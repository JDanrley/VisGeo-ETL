#Python modules
import os

#Flask modules
from flask import request, redirect, url_for, render_template, json
from werkzeug.utils import secure_filename

#Custom modules
from app import app
from app.domain.shape import Shapefile
from app.infrastructure.ShapefileRepository import ShapefileRepository
connection = ShapefileRepository()
credentials = dict()

@app.route('/auth', methods=['GET', 'POST'])
def auth():
    global connection
    global credentials
    credentials = dict(request.json)
    if connection.credentialsAreValid(credentials):
        return json.dumps({"isConnected": True})
    return json.dumps({"isConnected": False})


UPLOAD_FOLDER = os.path.join(os.getcwd(), 'shapefiles')
@app.route('/uploads', methods=['POST'])
def upload():
    file = request.files['shapefiles']
    savePath = os.path.join(UPLOAD_FOLDER, secure_filename(file.filename))
    file.save(savePath)
    return redirect(f'/fields/{file.filename}')


@app.route('/fields/<fileName>', methods=['GET','POST'])
def fields(fileName):
    shapefile = Shapefile(f'shapefiles/{fileName}')
    return shapefile.exportFields()


@app.route('/tables')
def tables():
    global connection
    return json.dumps(connection.getTables())


@app.route('/save', methods=['GET', 'POST'])
def save():
    connection.fieldsToColumns = dict(request.json)
    
    return 