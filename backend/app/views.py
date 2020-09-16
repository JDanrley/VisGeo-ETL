#Python modules
import os

#Flask modules
from flask import request, redirect, url_for, render_template
from werkzeug.utils import secure_filename

#Custom modules
from app import basedir, app
from app.etl import Converter


UPLOAD_FOLDER = os.path.join(os.getcwd(), 'shapefiles')
@app.route('/uploads', methods=['POST'])
def upload():
    file = request.files['shapefiles']
    savePath = os.path.join(UPLOAD_FOLDER, secure_filename(file.filename))
    file.save(savePath)
    return "Até aqui rodou"


@app.route('/fields/<shapefileName>/<databaseName>')
def fields(shapefileName, databaseName):
    converter = Converter(f'shapefiles/{shapefileName}', f'{databaseName}')
    return converter.exportFields()