import React from 'react';

import api from '../../../services/api';

import HostIcon from '../../../assets/icons/host-icon.png';

import { UserIcon, Lock, PortIcon, DatabaseIcon, Modal } from './styles';

const ModalConnection = ({open}) => {

  const handleConnect = () => {
    api.post('/auth');
  }

  return (
    <Modal show={open}>
      <Modal.Header>
        <h1>ACESSE O BANCO DE DADOS DESEJADO</h1>
      </Modal.Header>

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

      <Modal.Footer>
        <button onClick={handleConnect}>Conectar</button>
      </Modal.Footer>
    </Modal>
  )
}
export default ModalConnection;
