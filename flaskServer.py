#flask imports
from flask import Flask, flash, render_template, request, redirect, url_for

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('p5jsDraw.html')


if __name__ == "__main__":
    app.run(debug=True)