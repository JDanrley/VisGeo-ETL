#Python modules
import os
import zipfile

#Flask modules
from flask import request, redirect, url_for, render_template, json, Response, jsonify, send_file, send_from_directory
from werkzeug.utils import secure_filename

#Custom modules
from app import app
from app.domain.shape import Shapefile
from app.domain.table import Table
from app.infrastructure.shapefileRepository import ShapefileRepository

#Global variables
connection = ShapefileRepository()
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
    shapefile.format(selectedFields)
    returnedMessage = connection.shpToPostgis(shapefile.DataDrame, connection.getColumnsNames(globalTableName), globalTableName)
    return jsonify(message = returnedMessage)


@app.route('/searchTables')
def searchTables():
    global connection
    return jsonify(connection.getTables())


DOWNLOAD_FOLDER = os.path.join(os.getcwd(), 'download')
@app.route('/recoverFile/', methods = ["GET", "POST"])
def recoverFile():
    tableName = request.json["selectedTable"]
    selectedTable = Table(tableName, connection.connector)
    try:
        selectedTable.extractShapefile(tableName, DOWNLOAD_FOLDER)
    except ValueError as erro:
        return erro + "Shapefile vazio"
    return redirect(f'/downloadFile/{tableName}')


@app.route('/downloadFile/<filename>', methods = ["GET", "POST"])
def download(filename):
    #filename = request.json["selectedTable"]
    downloadedFileName = f'{filename}.zip'
    downloadedFile = zipfile.ZipFile(f'{DOWNLOAD_FOLDER}/' + downloadedFileName, 'w')
    extensions = [".shp", ".shx", ".dbf", ".cpg", ".qix", ".prj"]
    for extension in extensions:
        try:
            downloadedFile.write(f'download/{filename}/' + filename + extension, arcname = filename + extension)
        except:
            pass
    
    downloadedFile.close()
    return send_from_directory(directory = DOWNLOAD_FOLDER, filename = downloadedFileName)