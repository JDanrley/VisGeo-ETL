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
        self.fieldTypes = list(self.fieldTypes[field] for field in self.reader.fields)
        self.fields = list(field[0] for field in self.reader.fields)
    

    def shpToDatabase(self, shapeTypeName):
        pass


    def __insertQueryGenerator(self, tableName):
        self.query = f'INSERT INTO {tableName} ('

        for field in self.fields:
            self.query += f' {field},'
        self.query[:-1] += ') VALUES ('

        return self.query


    def __concatenateRecordsShapes(self):
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

        







