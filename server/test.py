import unittest
from flask.ext.testing import TestCase
from server import app, db

class BaseTestCase(TestCase):
    
    def create_app(self):
        app.config.from_object('config.TestConfig')
        return app
    
    def setUp(self):
        db.create_all()
        db.session.add('Test Client', 'This is a test. Only a test')
        db.session.add(Client('John', 'Smith'))
        db.session.commit()

    def tearDown(self):
        db.session.remove()
        db.drop_all()