from datetime import datetime
from __main__ import db



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
    