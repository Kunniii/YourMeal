from operator import itemgetter
import this
from flask import Flask, jsonify, request
from pymongo import MongoClient
from bson.objectid import ObjectId
from flask_cors import CORS, cross_origin
from flask_restful import Api

import re

from urllib.parse import unquote

app = Flask(__name__)
# remove strict slashes in url
app.url_map.strict_slashes = False

api = Api(app)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

def get_db():
    client = MongoClient("mongodb://mongodb")
    db = client['yourMeal']
    return db

# Simple route to make sure app is working
@app.route('/')
def index():
    return "APIs OK!"

# Begin DB Dishes #################################################################
@cross_origin()
@app.route('/random/')
def get_random_dish():
    from random import randrange
    db = get_db()
    dishes = [{"id": str(dish['_id']), "name": dish['name'], "calories": dish['cal'], "ingredients": dish['ingredients'], "prepare_steps": dish['prepare_steps'], "cook_steps": dish['cook_steps'], "image": dish['link_img']} for dish in db['Dishes'].find()]
    count = len(list(dishes))
    return jsonify(dishes[randrange(count)])

@cross_origin()
@app.route('/search', methods=['POST', 'GET'])
def seach_in_array_and_return_dish_that_contain_ingredients():

    dishes_that_have_ingredients = []

    # get list off ingredients
    try:
        request_ingredients = request.args.get('ingredients').replace(', ', ',').split(',')
        request_ingredients = (" ".join(request_ingredients)).split()
    except:
        return jsonify({"message":"array name must be `ingredients` or some errors have orcured!"}), 400

    # get all dishes
    db = get_db()
    _dishes = db['Dishes'].find()
    dishes_in_db = [{"id": str(dish['_id']), "name": dish['name'], "calories": dish['cal'], "ingredients": dish['ingredients'], "prepare_steps": dish['prepare_steps'], "cook_steps": dish['cook_steps'], "image": dish['link_img']} for dish in _dishes]
    if not dishes_in_db:
        return jsonify({"message": "Not found!"}), 404
    
    for dish in dishes_in_db:
        ingredient_that_this_dish_has = 0
        this_dish_ingredients = set((" ".join(dish['ingredients'])).split())
        for the_ingredient in this_dish_ingredients:
            if the_ingredient in request_ingredients:
                ingredient_that_this_dish_has += 1
        if ingredient_that_this_dish_has > 0:
            dish.update({'score':ingredient_that_this_dish_has})
            dishes_that_have_ingredients.append(dish)

    # take only 5 most highest score
    dishes_that_have_ingredients = dishes_that_have_ingredients[:5]
    
    list_of_dishes_sorted_by_score = sorted(dishes_that_have_ingredients, key=itemgetter('score'), reverse=True)
    
    return jsonify(list_of_dishes_sorted_by_score), 200

@cross_origin()
@app.route('/dishes/', methods=['GET'])
def get_all_dishes():
    db = get_db()
    _dishes = db['Dishes'].find()
    dishes = [{"id": str(dish['_id']), "name": dish['name'], "calories": dish['cal'], "ingredients": dish['ingredients'], "prepare_steps": dish['prepare_steps'], "cook_steps": dish['cook_steps'], "image": dish['link_img']} for dish in _dishes]
    if not dishes:
        return jsonify({"message": "Not found!"}), 404
    return jsonify(dishes), 200

@cross_origin()
@app.route('/dish/id/<id>', methods=['GET', 'POST'])
def get_dish_by_id(id):
    db = get_db()
    dish = db['Dishes'].find_one(ObjectId(str(id)))
    dish = {"id": str(dish['_id']), "name": dish['name'], "calories": dish['cal'], "ingredients": dish['ingredients'], "prepare_steps": dish['prepare_steps'], "cook_steps": dish['cook_steps'], "image": dish['link_img']}
    if not dish:
        return jsonify({"message": "Not found!"}), 404
    return jsonify(dish), 200

@cross_origin()
@app.route('/dish/name/<name>', methods=['GET', 'POST'])
def get_dish_by_name(name):
    # Easy%20beef%20hotpot
    # Easy beef hotpot
    # name = unquote(name)
    # print(name)
    db = get_db()
    _dish = db['Dishes'].find({"name": name})
    this_dish = [{"id": str(dish['_id']), "name": dish['name'], "calories": dish['cal'], "ingredients": dish['ingredients'], "prepare_steps": dish['prepare_steps'], "cook_steps": dish['cook_steps'], "image": dish['link_img']} for dish in _dish]
    if not this_dish:
        return jsonify({"message": "Not found!"}), 404
    return jsonify(this_dish), 200

@cross_origin()
@app.route('/dish/name/like/<name>', methods=['GET', 'POST'])
def get_dish_by_name_like(name):
    db = get_db()
    rgx = re.compile(f'.*{name}.*', re.IGNORECASE)
    _dish = db['Dishes'].find({"name": rgx})
    this_dish = [{"id": str(dish['_id']), "name": dish['name'], "calories": dish['cal'], "ingredients": dish['ingredients'], "prepare_steps": dish['prepare_steps'], "cook_steps": dish['cook_steps'], "image": dish['link_img']} for dish in _dish]
    if not this_dish:
        return jsonify({"message": "Not found!"}), 404
    return jsonify(this_dish), 200

# End DB Dishes

# Begin DB Ingredients #################################################################
@cross_origin()
@app.route('/ingredients/')
def get_all_ingredients():
    db = get_db()
    _ingredients = db['Ingredients'].find()
    ingredients = [{'id': i['id'], 'name': i['name'], 'calories': i['cal'], 'image': i['link_img']} for i in _ingredients]
    if not ingredients:
        return jsonify({"message": "Not found!"}), 404
    return jsonify(ingredients), 200

@cross_origin()
@app.route('/ingredient/id/<id>')
def get_ingredient_by_id(id):
    db = get_db()
    _ingredient = db['Ingredients'].find({"id": int(id)})
    ingredient = [{'id': i['id'], 'name': i['name'], 'calories': i['cal'], 'image': i['link_img']} for i in _ingredient]
    if not ingredient:
        return jsonify({"message": "Not found!"}), 404
    return jsonify(ingredient), 200

@cross_origin()
@app.route('/ingredient/name/<name>')
def get_ingredient_by_name(name):
    db = get_db()
    rgx = re.compile(f'.*{name}.*', re.IGNORECASE)
    _ingredient = db['Ingredients'].find({"name": rgx})
    ingredient = [{'id': i['id'], 'name': i['name'], 'calories': i['cal'], 'image': i['link_img']} for i in _ingredient]
    if not ingredient:
        return jsonify({"message": "Not found!"}), 404
    return jsonify(ingredient), 200

# End DB Ingredients

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
