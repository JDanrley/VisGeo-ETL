import postgresql

class ShapefileRepository():

    def __init__(self):
        self.isConnected = False
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
        return list(table[0] for table in tables)