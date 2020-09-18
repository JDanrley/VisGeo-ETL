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
            return True
        except:
            return False

    
    def getTables(self):
        tables = self.connector.query("SELECT table_name FROM information_schema.tables WHERE table_schema='public'")
        standardTables = ["geography_columns", "geometry_columns", "spatial_ref_sys"]
        self.tables = list(table[0] for table in tables if table[0] not in standardTables)
        return self.tables
    

    def savePointShapefile(self):
        pass


    def queryGeneratorPoint(self, tableName, columnsList):
        pass





