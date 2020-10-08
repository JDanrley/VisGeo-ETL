import geopandas as gpd 

class Table():

    def __init__(self, tableName, connector):
        self.name = tableName
        self.connector = connector
        query = f'SELECT * FROM {self.name}'
        self.dataFrame = gpd.GeoDataFrame.from_postgis(query, self.connector)
    

    def extractShapefile(self, enc = "UTF-8"):
        self.dataFrame.to_file(f'{self.name}', enconding = enc)
        return self.name


