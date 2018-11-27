from flask import Flask
from flask_cors import CORS
from flask import jsonify
import os


app = Flask(__name__)
CORS(app)

@app.route('/')
def hello_world():
    return jsonify({"test":'testing'})


@app.route("/client", methods=["POST"])
def add_client():
    content = request.get_json()
    firstName = content.get('first_name')
    lastName = content.get('last_name')
    new_client = Client(first_name=firstName, last_name=lastName)
    db.session.add(new_client)
    db.session.commit()
    client = {}
    client['first_name'] = new_client.first_name
    client['last_name'] = new_client.last_name
    return jsonify(client=client)
   

if __name__ == '__main__':
    app.run(debug=True)