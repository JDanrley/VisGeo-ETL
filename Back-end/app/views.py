#Python modules
import os

#Flask modules
from flask import request, redirect, url_for, render_template
from app import basedir, app
from werkzeug.utils import secure_filename

#ETL module
from etl import Converter

UPLOAD_FOLDER = os.path.join(os.getcwd(), 'shapefiles')
@app.route('/upload', methods=['GET', 'POST'])
def upload():
    file = request.files['shapefiles']
    savePath = os.path.join(UPLOAD_FOLDER, secure_filename(file.filename))
    file.save(savePath)
    return "Até aqui rodou"

