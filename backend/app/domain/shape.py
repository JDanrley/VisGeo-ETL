import shapefile
from flask import json
import geopandas as gpd


class Shapefile():

    def __init__(self, shapefileAddress):
        self.DataDrame = gpd.read_file(shapefileAddress)

    
    def getFields(self):
        return list(self.DataDrame.columns)
    

    def converted(self, selectedFields):
        selectedFields.append('geometry')
        return self.DataDrame[selectedFields]

    


'''
    fieldTypes = {
        "C": str,
        "N": int,
        "F": float,
        "L": bool,
        "D": 'Date'
    }

    def __init__(self, shapefileAddress):
        self.reader = shapefile.Reader(shapefileAddress)
        self.geoType = self.reader.shapeTypeName
        self.fieldTypes = list(self.fieldTypes[field[1]] for field in self.reader.fields)
        self.fields = list(field[0] for field in self.reader.fields)[1:]
        self.data = self.__concatenateRecordsToShapes()


    def shpToDatabase(self, shapeTypeName):
        pass


    def __concatenateRecordsToShapes(self):
        matrix = list()
        shapeIndex = int()
        shapes = self.reader.shapes()
        for recordList in self.reader.records():
            matrix.append(recordList)
            matrix[shapeIndex].append(shapes[shapeIndex].points)
            shapeIndex += 1
        return matrix


    def getFields(self):
        return self.fields

    
    def namesToIndex(self, dePara):
        pass


    def indexFields(self):
        index = dict()
        indexCount = int()
        for field in self.fields:
            index[field] = indexCount
            indexCount += 1
        return index
'''
        







