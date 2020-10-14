from app import app
import os
import platform

if platform.system() == 'Linux':
    os.system('mkdir -p shapefiles')
    os.system('mkdir -p download')
    os.system('rm download/*')
    os.system('rm shapefiles/*')

if __name__ == "__main__":
    app.run(debug=True)