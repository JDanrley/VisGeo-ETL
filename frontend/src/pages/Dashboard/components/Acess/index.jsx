import React, { useState } from 'react'

import { Upload, message } from 'antd';

import ModalConnection from '../../ModalConnection';

import { UploadIcon, SearchIcon, Container } from './styles';

const Acess = () => {  
  const [openConnection, setOpenConnection] = useState(false);
  const { Dragger } = Upload;

  const props = {
    name: 'shapefiles',
    multiple: true,
    action: 'http://localhost:5000/uploads',

    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  return (
    <Container>
      <ModalConnection 
        open={openConnection} 
        close={setOpenConnection} 
      />

      <div className="upload-search-container">

        <div className="upload-container">
          <Dragger className="dragger-props-custom" {...props}>
            <div className="upload-dash">
              <UploadIcon className="upload-icon" />

              <span className="upload-desc">Clique ou arraste seus arquivos aqui</span>
            </div>
          </Dragger>

          <button className="handle-button">Upload</button>
        </div>

        <div className="upload-container">
          <button onClick={()=> setOpenConnection(true)} className="upload-dash search-dash">
            <SearchIcon className="upload-icon" />

            <span className="upload-desc search-desc">Pesquise no banco de dados</span>
          </button>

          <button 
            onClick={()=> setOpenConnection(true)} 
            className="handle-button"
          >
            Buscar
          </button>
        </div>
      </div>
    </Container>
  )
}

export default Acess;