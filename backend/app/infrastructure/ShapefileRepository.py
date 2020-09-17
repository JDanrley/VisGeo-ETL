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

    