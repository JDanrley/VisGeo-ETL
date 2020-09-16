import shapefile
import postgresql
from flask import json

class Converter():

    fieldTypes = {
        "C": str,
        "N": int,
        "F": float,
        "L": bool,
        "D": 'Date'
    }

    def __init__(self, shapefileAddress, databaseName, username = 'postgres', password = 'root', host = 'localhost', port = 5432):
        self.reader = shapefile.Reader(shapefileAddress)
        self.shpType = self.reader.shapeTypeName
        self.username = username
        self.__password = password
        self.host = host
        self.port = port
        self.database = databaseName
        self.connector = postgresql.open(f'pq://{self.username}:{self.__password}@{self.host}:{self.port}/{self.database}')
        self.fieldTypes = list(self.fieldTypes[field[1]] for field in self.reader.fields)
        self.fields = list(field[0] for field in self.reader.fields)[1:]
    

    def shpToDatabase(self, shapeTypeName):
        pass


    def __insertPointQueryGenerator(self, tableName, columnsList, fieldsList):
        self.query = f'INSERT INTO {tableName} '


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

        







