import React, { useState } from 'react';

import api from '../../../services/api';

import { UserIcon, Lock, PortIcon, DatabaseIcon, Modal, HostIcon } from './styles';

const ModalConnection = ({open, close}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [host, setHost] = useState('');
  const [port, setPort] = useState('');
  const [database, setDatabase] = useState('');

  const handleConnect = () => {
    api.post('/auth', {
      username,
      password,
      host,
      port,
      database
    }).then(response => console.log(response));
  }

  const handleClose = () => {
    close(true);
  }

  return (
    <Modal show={!open} >
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

          <input onChange={e => setUsername(e.target.value)} type="text" className="cred-input-info"/>

          <input onChange={e => setPassword(e.target.value)} type="password" className="cred-input-info"/>
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
          
          <input onChange={e => setHost(e.target.value)} type="text" className="cred-input-info"/>

          <input onChange={e => setPort(e.target.value)} type="text" className="cred-input-info"/>

          <input onChange={e => setDatabase(e.target.value)} type="text" className="cred-input-info"/>
        </section>
      </div>

      <Modal.Footer>
        <button 
          onClick={handleClose}
          className="handle-button"
        >
          Conectar
        </button>
      </Modal.Footer>
    </Modal>
  )
}
export default ModalConnection;
