import postgresql


class ShapefileRepository():

    def __init__(self):
        self.isConnected = False
        self.fieldsToColumns = None
        pass


    def credentialsAreValid(self, credentials):
        try:
            self.connector = postgresql.open(f'pq://{credentials["username"]}:{credentials["password"]}@{credentials["host"]}:{credentials["port"]}/{credentials["database"]}')
            self.isConnected = True
            self.credentials = credentials
            return True
        except:
            return False

    
    def getTables(self):
        tables = self.connector.query("SELECT table_name FROM information_schema.tables WHERE table_schema='public'")
        defaultTables = ["geography_columns", "geometry_columns", "spatial_ref_sys"]
        self.tables = list(table[0] for table in tables if table[0] not in defaultTables)
        return self.tables

    
    def getColumnsNames(self, tableName):
        columns = self.connector.query(f"SELECT column_name FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name = '{tableName}'")
        columns = [column[0] for column in columns]
        return columns[:-1]
    

    def populateTableMultipoint(self, data, shapefileFields, tableName, selectedFields, columnsList):
        #selectedFields = ['fid', 'idponto', 'deponto'] -> example
        for row in data:
            selectedFieldsIndex = list()

            for field in selectedFields:
                selectedFieldsIndex.append(shapefileFields.index(field))   #getting the index for each selected field
            
            selectedRecords = list()
            
            for selectedIndex in selectedFieldsIndex:               #filtering the values according to the index
                selectedRecords.append(row[:-1][selectedIndex])

            query = self.queryGeneratorMultipoint(tableName, columnsList, selectedRecords, row[-1])
            self.connector.execute(query)

    
    def queryGeneratorMultipoint(self, tableName, columnsList, inputValuesList, points, ersi = 4674):
        columnsArgs = str()
        valuesArgs = str()
        
        for arg in columnsList:
            columnsArgs += str(arg) + ', '
        columnsArgs = columnsArgs[:-2]

        for arg in inputValuesList:
            if type(arg) == str:
                valuesArgs += f"'{arg}'" + ', '
            else:
                valuesArgs += str(arg) + ', '
        valuesArgs = valuesArgs[:-2]

        query = f"INSERT INTO {tableName} ({columnsArgs}, GEOM) VALUES ({valuesArgs}, ST_GeomFromText('MULTIPOINT({points[0][0]} {points[0][1]})', {ersi}))"
        return query


    def queryGeneratorPolygon(self, tableName, columnsList, inputValuesList, geom, ersi = 4674):
        columnsArgs = str()
        valuesArgs = str()
        geomArgs = str()
        
        for arg in columnsList:
            columnsArgs += str(arg) + ', '
        columnsArgs = columnsArgs[:-2]

        for arg in inputValuesList:
            if type(arg) == str:
                valuesArgs += f"'{arg}'" + ', '
            else:
                valuesArgs += str(arg) + ', '
        valuesArgs = valuesArgs[:-2]

        for pair in geom:
            geomArgs += str(pair[0]) + ' ' + str(pair[1]) + ', '
        geomArgs = geomArgs[:-2]
        
        query = f"INSERT INTO {tableName} ({columnsArgs}, GEOM) VALUES ({valuesArgs}, ST_GeomFromText('POLYGON(({geomArgs}))', {ersi}))"
        return query
    
    
    def populateTablePolygon(self, data, shapefileFields, tableName, selectedFields, columnsList):
        #selectedFields = ['fid', 'idponto', 'deponto'] -> example
        
        for row in data:
            selectedFieldsIndex = list()

            for field in selectedFields:
                selectedFieldsIndex.append(shapefileFields.index(field))   #getting the index for each selected field
            
            selectedRecords = list()
            
            for selectedIndex in selectedFieldsIndex:               #filtering the values according to the index
                selectedRecords.append(row[:-1][selectedIndex])
            
            
            query = self.queryGeneratorPolygon(tableName, columnsList, selectedRecords, row[-1])
            
            self.connector.execute(query)
            

    def close(self):
        self.connector = None
        self.isConnected = False
        self.tables = None

    