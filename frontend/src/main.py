from flask import Flask, render_template, send_file
from os.path import isfile

app = Flask(__name__)

@app.route('/')
def index():
    return "Front-end OK! <a href=\"http://localhost:5000\">Go to Back-end</a>"

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=8080, debug=True)