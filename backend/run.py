from app import app
import os

os.system('mkdir shapefile')
os.system('mkdir download')

if __name__ == "__main__":
    app.run(debug=True)