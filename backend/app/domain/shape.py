import shapefile
from flask import json
import geopandas as gpd


class Shapefile():

    def __init__(self, shapefileAddress):
        self.DataDrame = gpd.read_file(shapefileAddress).fillna(0)

    
    def getFields(self):
        return list(self.DataDrame.columns)[:-1]
    

    def converted(self, selectedFields):
        selectedFields.append('geometry')
        return self.DataDrame[selectedFields]