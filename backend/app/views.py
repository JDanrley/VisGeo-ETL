#Python modules
import os

#Flask modules
from flask import request, redirect, url_for, render_template, json
from werkzeug.utils import secure_filename

#Custom modules
from app import basedir, app
from app.etl import Shapefile
from app.infrastructure.ShapefileRepository import ShapefileRepository

@app.route('/auth', methods=['GET', 'POST'])
def auth():
    connection = ShapefileRepository()
    credentials = dict(request.json)
    if connection.credentialsAreValid(credentials):
        return json.dumps({"isConnected": True})
    return json.dumps({"isConnected": False})



UPLOAD_FOLDER = os.path.join(os.getcwd(), 'shapefiles')
@app.route('/uploads', methods=['POST'])
def upload():
    try:
        file = request.files['shapefiles']
        savePath = os.path.join(UPLOAD_FOLDER, secure_filename(file.filename))
        file.save(savePath)
        return json.dumps({"fileSaved": True})

    except:
        return json.dumps({"fileSaved": False})


@app.route('/fields/<fileName>')
def fields(fileName):
    shapefile = Shapefile(f'shapefiles/{fileName}')
    return shapefile.exportFields()