import React from 'react';
import { useHistory } from 'react-router-dom';
import { Upload, message } from 'antd';

import { DashboardContainer, UserIcon, Lock, PortIcon,
  DatabaseIcon, UploadIcon, SearchIcon } from './styles';

import LogoHeader from '../../assets/images/Logo-white-bg.png';
import HostIcon from '../../assets/icons/host-icon.png';

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

        <div className="cred-info-container">

          <span className="cred-meta-info">
            <UserIcon />
            Username
          </span>

          <span className="cred-meta-info">
            <Lock />
            Senha
          </span>

          <span className="cred-meta-info">
            <img src={HostIcon} alt="Host Icon" className="host-icon"/>
            Host
          </span>

          <span className="cred-meta-info">
            <PortIcon />
            Port
          </span>

          <span className="cred-meta-info">
            <DatabaseIcon />
            Database
          </span>

          <input type="text" className="cred-input-info"/>
          
          <input type="password" className="cred-input-info"/>

          <input type="text" className="cred-input-info"/>

          <input type="text" className="cred-input-info"/>

          <input type="text" className="cred-input-info"/>

        </div>

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
            <button className="upload-dash search-dash">
              <SearchIcon className="upload-icon" />

              <span className="upload-desc search-desc">Pesquise no banco de dados</span>
            </button>

            <button className="handle-button">Buscar</button>
          </div>
          
        </div>

      </DashboardContainer>
    </>
  );
}

export default Dashboard;
