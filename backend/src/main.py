from flask import Flask, jsonify
from pymongo import MongoClient

app = Flask(__name__)

def get_db():
    client = MongoClient("mongodb://mongodb")
    db = client['yourMeal']
    return db

@app.route('/')
def index():
    return "<h1>Hello!</h1>"

@app.route('/dishes', methods=['GET'])
def dishes_route():
    db = get_db()
    _dishes = db['Dishes'].find()
    dishes = [{"id": str(dish['_id']), "name": dish['name'], "ingredients": dish['ingredients']} for dish in _dishes]
    return jsonify(dishes)


if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5000, debug=True)
