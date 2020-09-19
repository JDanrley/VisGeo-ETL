#Python modules
import os

#Flask modules
from flask import request, redirect, url_for, render_template, json, Response, jsonify
from werkzeug.utils import secure_filename

#Custom modules
from app import app
from app.domain.shape import Shapefile
from app.infrastructure.ShapefileRepository import ShapefileRepository

#Global variables
connection = ShapefileRepository()
credentials = dict()
currentFileName = None
globalTableName = None


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
    

@app.route('/getFieldsAndTables/', methods=['GET'])
def fields():
    shapefile = Shapefile(f'shapefiles/{currentFileName}')
    return jsonify(fields = shapefile.getFields(),
                   tables = connection.getTables())


@app.route('/columns/<tableName>', methods=['GET'])
def columns(tableName):
    global globalTableName
    globalTableName = tableName
    return json.dumps(connection.getColumnsNames(tableName))


@app.route('/save', methods=['POST'])
def save():
    selectedFields = request.json["message"]
    global globalTableName
    shapefile = Shapefile(f'shapefiles/{currentFileName}')
    connection.populateTableMultipoint(shapefile.data, shapefile.fields, globalTableName, selectedFields, connection.getColumnsNames(globalTableName))
    return Response(status=201)