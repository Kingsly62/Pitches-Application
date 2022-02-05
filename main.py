from flask import Flask, render_template, request, session, logging, url_for, redirect
from sqlalchemy import create_engine
from sqlalchemy.orm import scoped_session, sessionmaker
from passlib.hash import sha256_crypt

app = Flask(__name__)


@app.route('/')
def landing():
    return render_template('landing.html')


#login page form
@app.route('/signin')
def signin():
    return render_template('signin.html')


#register form functions
@app.route('/signup')
def signup():
    return render_template('signup.html')


@app.route('/contact')
def contact():
    return render_template('contact.html')


if __name__ == "__main__":
    app.run(debug=True)