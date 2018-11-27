from flask import Flask
from flask_cors import CORS
from flask import jsonify
import os


app = Flask(__name__)
CORS(app)

@app.route('/')
def hello_world():
    return jsonify({"test":'testing'})
   

if __name__ == '__main__':
    app.run(debug=True)