from crypt import methods
from unicodedata import name
from flask import Flask, render_template, request, session, logging, url_for, redirect
from sqlalchemy import create_engine
from sqlalchemy.orm import scoped_session, sessionmaker
from passlib.hash import sha256_crypt

engine = create_engine(
    "postgresql+psycopg2://moringa:Access@localhost/pitches")

db = scoped_session(sessionmaker(bind=engine))
app = Flask(__name__)


@app.route('/')
def landing():
    return render_template('landing.html')


#login page form
@app.route('/signin')
def signin():
    return render_template('signin.html')


#register form functions
@app.route("/signup", methods=["POST", "GET"])
def signup():
    if request.method == "POST":
        name = request.form.get("name")
        username = request.form.get("username")
        password = request.form.get("password")
        confirm = request.form.get("confirm")
        secure_password = sha256_crypt.encrypt(str(password))

    return render_template('signup.html')


@app.route('/contact')
def contact():
    return render_template('contact.html')


if __name__ == "__main__":
    app.run(debug=True)