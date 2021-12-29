from flask import Flask, jsonify, request
from pymongo import MongoClient
from flask_cors import CORS, cross_origin
from flask_restful import Api

import re

from urllib.parse import unquote

app = Flask(__name__)
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
    return "Back-end OK! <a href=\"http://localhost\">Go to Front-end</a>"

# Begin DB Dishes #################################################################
@cross_origin()
@app.route('/dishes', methods=['GET'])
@app.route('/dishes/', methods=['GET'])
def get_all_dishes():
    db = get_db()
    _dishes = db['Dishes'].find()
    dishes = [{"id": str(dish['_id']), "name": dish['name'], "calories": dish['cal'], "ingredients": dish['ingredients'],  "recipe": dish['cook'],"image": dish['link_img']} for dish in _dishes]
    if not dishes:
        return jsonify({"message": "Not found!"}), 404
    return jsonify(dishes)

@cross_origin()
@app.route('/dish/id/<id>', methods=['GET', 'POST'])
def get_dish_by_id(id):
    return str(id)

@cross_origin()
@app.route('/dish/name/<name>', methods=['GET', 'POST'])
def get_dish_by_name(name):
    # Easy%20beef%20hotpot
    # Easy beef hotpot
    # name = unquote(name)
    # print(name)
    db = get_db()
    _dish = db['Dishes'].find({"name": name})
    this_dish = [{"id": str(dish['_id']), "name": dish['name'], "calories": dish['cal'], "ingredients": dish['ingredients'],  "recipe": dish['cook'],"image": dish['link_img']} for dish in _dish]
    if not this_dish:
        return jsonify({"message": "Not found!"}), 404
    return jsonify(this_dish)

@cross_origin()
@app.route('/dish/name/like/<name>', methods=['GET', 'POST'])
def get_dish_by_name_like(name):
    db = get_db()
    rgx = re.compile(f'.*{name}.*', re.IGNORECASE)
    _dish = db['Dishes'].find({"name": rgx})
    this_dish = [{"id": str(dish['_id']), "name": dish['name'], "calories": dish['cal'], "ingredients": dish['ingredients'],  "recipe": dish['cook'],"image": dish['link_img']} for dish in _dish]
    if not this_dish:
        return jsonify({"message": "Not found!"}), 404
    return jsonify(this_dish)

# End DB Dishes

# Begin DB Ingredients #################################################################
@cross_origin()
@app.route('/ingredients')
@app.route('/ingredients/')
def get_all_ingredients():
    db = get_db()
    _ingredients = db['Ingredients'].find()
    ingredients = [{'id': i['id'], 'name': i['name'], 'calories': i['cal'], 'image': i['link_img']} for i in _ingredients]
    if not ingredients:
        return jsonify({"message": "Not found!"}), 404
    return jsonify(ingredients)

@cross_origin()
@app.route('/ingredient/id/<id>')
def get_ingredient_by_id(id):
    db = get_db()
    _ingredient = db['Ingredients'].find({"id": int(id)})
    ingredient = [{'id': i['id'], 'name': i['name'], 'calories': i['cal'], 'image': i['link_img']} for i in _ingredient]
    if not ingredient:
        return jsonify({"message": "Not found!"}), 404
    return jsonify(ingredient)



@cross_origin()
@app.route('/ingredient/name/<name>')
def get_ingredient_by_name(name):
    db = get_db()
    rgx = re.compile(f'.*{name}.*', re.IGNORECASE)
    _ingredient = db['Ingredients'].find({"name": rgx})
    ingredient = [{'id': i['id'], 'name': i['name'], 'calories': i['cal'], 'image': i['link_img']} for i in _ingredient]
    if not ingredient:
        return jsonify({"message": "Not found!"}), 404
    return jsonify(ingredient)

# End DB Ingredients

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
