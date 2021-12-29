from flask import Flask, render_template, send_file
from os.path import isfile
from requests import get
import urllib.parse
import html

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/input-ingredients')
def input_ingredients():
    return render_template('input-ingre.html')

@app.route('/show-all-dishes')
def input_dishes():
    # data = get('http://localhost:5000/dishes/').json()
    return render_template('all-dishes.html')

@app.route('/recipe/dish/<dish>')
def get_recipe_by_name(dish):
    # return dish
    # dish = urllib.parse.unquote_plus(html.unescape(dish))
    # return dish
    return render_template('recipe.html', dish=dish)

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=8080, debug=True)