import postgresql
import psycopg2

class ShapefileRepository():

    def __init__(self):
        self.isConnected = False
        self.fieldsToColumns = None
        pass


    def credentialsAreValid(self, credentials):
        try:
            #self.connector = postgresql.open(f'pq://{credentials["username"]}:{credentials["password"]}@{credentials["host"]}:{credentials["port"]}/{credentials["database"]}')
            self.connector = psycopg2.connect(f"dbname='{credentials['database']}' user='{credentials['username']}' host='{credentials['host']}' password='{credentials['password']}' port='{credentials['port']}'")
            self.cursor = self.connector.cursor()
            return True
        except:
            return False

    
    def getTables(self):
        self.cursor.execute("SELECT table_name FROM information_schema.tables WHERE table_schema='public'")
        defaultTables = ["geography_columns", "geometry_columns", "spatial_ref_sys"]
        self.tables = list(table[0] for table in self.cursor.fetchall() if table[0] not in defaultTables)
        return self.tables

    
    def getColumnsNames(self, tableName):
        self.cursor.execute(f"SELECT column_name FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name = '{tableName}'")
        #getting the columns datatype
        #cursor.execute(f"SELECT data_type FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name = '{tableName}'")
        columns = [column[0] for column in self.cursor.fetchall()]
        return columns
    

    def tupleToQuery(self, tupleFields, tableColumnsList, tableName):
        tupleFields = tupleFields[1:]
        columnsInsert = str()
        columnsArgs = str()
        
        for arg in tableColumnsList:
            columnsArgs += str(arg) + ', '
        columnsArgs = columnsArgs[:-2]
        
        for valueIndex in range(len(tupleFields) - 1):
            
            if type(tupleFields[valueIndex]) == str:
                columnsInsert += f"'{tupleFields[valueIndex]}'" + ', '    
            else:
                columnsInsert += str(tupleFields[valueIndex]) + ', '
            
        return f"INSERT INTO {tableName} ({columnsArgs}) VALUES ({columnsInsert} ST_GeomFromText('{tupleFields[-1].wkt}', 4674))"
        
    
    def shpToPostgis(self, DataFrame, tableColumnsList, tableName):
        for line in DataFrame.itertuples():
            if None not in line:
                self.cursor.execute(self.tupleToQuery(line, tableColumnsList, tableName))
            else:
                copy = list(line).copy()
                line = list()
                for field in copy:
                    if field != None:
                        line.append(field)
                    else:
                        line.append(0)
                self.cursor.execute(self.tupleToQuery(line, tableColumnsList, tableName))
        self.connector.commit()
