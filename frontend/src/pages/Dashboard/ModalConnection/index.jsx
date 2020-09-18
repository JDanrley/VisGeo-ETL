import React from 'react';

import api from '../../../services/api';

import { UserIcon, Lock, PortIcon, DatabaseIcon, Modal, HostIcon } from './styles';

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
            <UserIcon className="white-icon" />
            Username
          </span>

          <span className="cred-meta-info">
            <Lock className="white-icon" />
            Senha
          </span>

          <input type="text" className="cred-input-info"/>

          <input type="password" className="cred-input-info"/>
        </section>

        <section>
          <span className="cred-meta-info">
            <HostIcon className="white-icon"/>
            Host
          </span>
    

          <span className="cred-meta-info">
            <PortIcon className="white-icon" />
            Port
          </span>


          <span className="cred-meta-info">
            <DatabaseIcon className="white-icon" />
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
