import shapefile
import postgresql
from flask import json

class Shapefile():

    fieldTypes = {
        "C": str,
        "N": int,
        "F": float,
        "L": bool,
        "D": 'Date'
    }

    def __init__(self, shapefileAddress):
        self.reader = shapefile.Reader(shapefileAddress)
        self.shpType = self.reader.shapeTypeName
        self.fieldTypes = list(self.fieldTypes[field[1]] for field in self.reader.fields)
        self.fields = list(field[0] for field in self.reader.fields)[1:]
        self.matrixBase = self.__concatenateRecordsToShapes()


    def shpToDatabase(self, shapeTypeName):
        pass


    def __concatenateRecordsToShapes(self):
        matrix = list()
        shapeIndex = int()
        shapes = self.reader.shapes()
        for recordList in self.reader.records():
            matrix.append(recordList)
            matrix[shapeIndex].append(shapes[shapeIndex])
            shapeIndex += 1
        return matrix


    def exportFields(self):
        return json.dumps(self.fields)

        







