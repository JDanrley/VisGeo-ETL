#Python modules
import os

#Flask modules
from flask import request, redirect, url_for, render_template, json, Response
from werkzeug.utils import secure_filename

#Custom modules
from app import app
from app.domain.shape import Shapefile
from app.infrastructure.ShapefileRepository import ShapefileRepository

#Global variables
connection = ShapefileRepository()
credentials = dict()
currentFileName = None


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
    global currentFileName
    currentFileName = file.filename
    return Response(status=201)
    

@app.route('/getFields/', methods=['GET'])
def fields(fileName):
    shapefile = Shapefile(f'shapefiles/{currentFileName}')
    return shapefile.exportFields()


@app.route('/tables')
def tables():
    global connection
    return json.dumps(connection.getTables())


@app.route('/columns/<tableName>', methods=['GET'])
def columns(tableName):
    return json.dumps(connection.getColumnsNames(tableName))