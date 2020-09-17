import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Upload, message } from 'antd';

import ModalConnection from './ModalConnection';

import { DashboardContainer, UploadIcon, SearchIcon } from './styles';

import LogoHeader from '../../assets/images/Logo-white-bg.png';

const { Dragger } = Upload;

const props = {
  name: 'file',
  multiple: true,
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
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

function Dashboard() {
  const [openConnection, setOpenConnection] = useState(false);
  const history = useHistory();

  return (
    <>
      <DashboardContainer>
        <header>
          <img 
            src={LogoHeader}
            alt="VisGeo"
            className="logo-header"
            onClick={() => history.push('/')}
          />
        </header>

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

      </DashboardContainer>
    </>
  );
}

export default Dashboard;
