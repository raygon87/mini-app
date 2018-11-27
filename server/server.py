from flask import Flask, request, abort, json
from flask_restful import Resource, Api
from flask_cors import CORS
from flask import jsonify
from flask_sqlalchemy import SQLAlchemy
import os


app = Flask(__name__)
api = Api(app)
CORS(app)

app.config['SECRET_KEY'] = 'secret'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db'
db = SQLAlchemy(app)
from models import Client, Invoice 


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
    return json.dumps({'success': 'success!'})

# @app.route('/clients')
# def get_clients():
#     clients = Client.query.all()
#     clientsList = [];
#     for client in clients:
#         clientsList.append(client.first_name)
#     clientFirstName = ''
#     for client in clientsList:
#         clientFirstName += client
#     return clientFirstName

@app.route('/client/<string:firstName>')
def get_client(firstName):
    clients = Client.query.filter_by(first_name = firstName).all()
    clientsList = [];
    for client in clients:
        clientsList.append(client.first_name)
    clientFirstName = ''
    for client in clientsList:
        clientFirstName += client
    return clientFirstName
    # return json.dumps()

if __name__ == '__main__':
    app.run(debug=True)