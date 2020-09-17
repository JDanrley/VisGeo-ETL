import React from 'react';

import api from '../../../services/api';

import HostIcon from '../../../assets/icons/host-icon.png';

import { UserIcon, Lock, PortIcon, DatabaseIcon, Modal } from './styles';

const ModalConnection = ({open, close}) => {

  const handleConnect = () => {
    api.get('/uploads').then(response => console.log(response));
  }

  const handleClose = () => {
    close(false);
  }

  return (
    <Modal show={open} onHide={handleClose}>
      <Modal.Header>
        <h1>ACESSE O BANCO DE DADOS DESEJADO</h1>
      </Modal.Header>

      <div className="cred-info-container">
        <section>
          <span className="cred-meta-info">
            <UserIcon />
            Username
          </span>

          <span className="cred-meta-info">
            <Lock />
            Senha
          </span>

          <input type="text" className="cred-input-info"/>

          <input type="password" className="cred-input-info"/>
        </section>

        <section>
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

          <input type="text" className="cred-input-info"/>

          <input type="text" className="cred-input-info"/>
        </section>
      </div>

      <Modal.Footer>
        <button onClick={handleConnect}>Conectar</button>
      </Modal.Footer>
    </Modal>
  )
}
export default ModalConnection;
