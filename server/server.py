from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from datetime import datetime

app = Flask(__name__)
#CORS(app)
cors = CORS(app, resources={r"/*": {"origins": "*"}})

app.config['SECRET_KEY'] = 'secret'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db'

db = SQLAlchemy(app)

class Client(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(30), nullable=False)
    last_name = db.Column(db.String(30), nullable=False)
    invoices = db.relationship('Invoice', backref='invoice', lazy=True)    

    def __repr__(self):
        return self.first_name, self.last_name

class Invoice(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    date_posted = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)
    location = db.Column(db.Text, nullable=False)
    client_id = db.Column(db.Integer, db.ForeignKey('client.id'), nullable=False)

    def __repr__(self):
        return f"Client'{self.date_posted}', '{self.location}'"

# get all clients
@app.route('/clients', methods=['GET'])
def get_clients():
    clients = Client.query.all()
    output = []
    for client in clients:
        client_data = {}
        client_data['id'] = client.id
        client_data['first_name'] = client.first_name
        client_data['last_name'] = client.last_name
        output.append(client_data)
    return jsonify({'clients': output})

# add client
@app.route('/client', methods=['POST', 'GET'])
def add_client():
    data = request.get_json()
    first = data.get('first_name')
    last = data.get('last_name')
    new_client = Client(first_name=first, last_name=last)
    db.session.add(new_client)
    db.session.commit()
    return jsonify({'newClient': 'new client created'})

# get clients by name
@app.route('/client/<name>')
def get_filtered_clients(name):
    clients = Client.query.filter_by(first_name=name).all()
    if not clients:
        return jsonify({'message': 'No client found!'})
    
    output = []
    for client in clients:
        client_data = {}
        client_data['id'] = client.id
        client_data['first_name'] = client.first_name
        client_data['last_name'] = client.last_name
        output.append(client_data)
    return jsonify({'clients': output})

# get client by id
@app.route('/client/<int:id>')
def get_client(id):
    client = Client.query.filter_by(id=id).first()
    
    if not client:
        return jsonify({'message': 'No client found!'})
    
    client_data = {}
    client_data['first_name'] = client.first_name
    client_data['last_name'] = client.last_name

    return jsonify({'client': client_data})

# update client

@app.route('/client/<int:id>', methods=['PUT', 'GET'])
def update_client(id):
    client = Client.query.filter_by(id=id).first()

    if not client:
        return jsonify({'message': 'No client found!'})

    data = request.get_json()
    first = data.get('first_name')
    last = data.get('last_name')
    client.first_name = first
    client.last_name = last
    db.session.commit()
    client_data = {}
    client_data['first_name'] =  client.first_name
    client_data['last_name'] = client.last_name
    return jsonify({'updatedClient': client_data})

# delete client
@app.route('/client/<id>', methods=['DELETE'])
def delete_client(id):
    client = Client.query.filter_by(id=id).first()

    if not client:
        return jsonify({'message': 'No client found!'})
    
    db.session.delete(client)
    db.session.commit()

    return jsonify({'message': 'The client has been deleted'})

if __name__ == '__main__':
    app.run(debug=True)