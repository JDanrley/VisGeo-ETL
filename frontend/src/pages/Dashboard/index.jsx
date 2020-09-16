import React from 'react';
import { useHistory } from 'react-router-dom';

import { DashboardContainer, UserIcon, Lock, PortIcon,
  DatabaseIcon, UploadIcon, SearchIcon } from './styles';

import LogoHeader from '../../assets/images/Logo-white-bg.png';
import HostIcon from '../../assets/icons/host-icon.png';

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
            <div className="upload-dash">
              <UploadIcon className="upload-icon" />

              <span className="upload-desc">Clique ou arraste seus arquivos aqui</span>
            </div>

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