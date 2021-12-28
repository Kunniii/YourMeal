from flask import Flask, render_template, send_file
from os.path import isfile
from requests import get

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/input-ingredients')
def input_ingredients():
    return render_template('input-ingre.html')

@app.route('/input-dishes')
def input_dishes():
    # data = get('http://localhost:5000/dishes/').json()
    return render_template('input-dishes.html')

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=8080, debug=True)