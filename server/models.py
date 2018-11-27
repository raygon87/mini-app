from flask import Flask
import os
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
from flask_migrate import Migrate

basedir = os.path.abspath(os.path.dirname(__file__))
app = Flask(__name__)

app.config['SECRET_KEY'] = 'secret'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///'+os.path.join(basedir, 'data.sqlite')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)
Migrate(app,db)


class Client(db.Model):
    __tablename__ = 'clients'

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(120), unique=True, nullable=False)
    last_name = db.Column(db.String(120), unique=True, nullable=False)

    


    # invoices = db.relationship('invoice', backref = 'client')

   # def __repr__(self):
    #    return f"User('{self.first_name}', '{self.last_name}')"


class Invoice(db.Model):
    __tablename__ = 'invoices'

    id = db.Column(db.Integer, primary_key=True)
    date_posted = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)
    location = db.Column(db.Text, nullable=False)
    client_id = db.Column(db.Integer, db.ForeignKey('client.id'), nullable=False)
    
    # def __repr__(self):
     #   return f"User('{self.date_posted}', '{self.location}')"