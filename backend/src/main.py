from flask import Flask, jsonify, request
from pymongo import MongoClient
from flask_cors import CORS, cross_origin
from flask_restful import Api

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

# Begin DB Recipes #################################################################
@cross_origin()
@app.route('/recipe/id/<id>')
def get_recipe_by_id(id):
    return str(id)

# End DB Recipes

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
    _dish = db['Dishes'].find({"name": f"/.*{name}.*/"})
    this_dish = [{"id": str(dish['_id']), "name": dish['name'], "calories": dish['cal'], "ingredients": dish['ingredients'],  "recipe": dish['cook'],"image": dish['link_img']} for dish in _dish]
    if not this_dish:
        return jsonify({"message": "Not found!"}), 404
    return jsonify(this_dish)

# End DB Dishes

# Begin DB Ingredients #################################################################
@cross_origin()
@app.route('/ingredients')
def get_all_ingredients():
    return "all_ingredients"

@cross_origin()
@app.route('/ingredient/id/<id>')
def get_ingredient_by_id(id):
    return str(id)

@cross_origin()
@app.route('/ingredient/name/<name>')
def get_ingredient_by_name(name):
    return str(name)

# End DB Ingredients


# Begin DB Photos #################################################################
@cross_origin()
@app.route('/photo/<id>')
def get_photo_by_id(id):
    return str(id)

# End DB Photos


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
