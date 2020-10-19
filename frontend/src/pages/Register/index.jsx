import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { RegisterContainer, Lock, LoginIcon, RegisterIcon, UserIcon } from './styles';

import Logo from '../../assets/images/Logo.png';

import apiUser from '../../services/apiUser';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  async function handleRegister() {
    try {
      await apiUser.post('/register', { name, email, password });
    } catch (err) {
      alert('Cadastrado com sucesso.')
      window.location.href = 'http://localhost:3000'
    }
  }

  return (
    <>
      <RegisterContainer>
        <div className="form-container">
            
            <span className="page-title">CRIAR UMA CONTA</span>

            <form>
              <div className="input-container">
                <UserIcon className="user-icon" />
                <input type="text" onChange={(e) => setName(e.target.value)} placeholder="Nome" />
              </div>

              <div className="input-container">
                <span className="email-symbol">@</span>
                <input type="text" onChange={(e) => setEmail(e.target.value)} placeholder="E-mail" />
              </div>

              <div className="input-container">
                <Lock className="password-icon" />
                <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Senha" />
              </div>
            </form>

            <button className="log-in" onClick={handleRegister}>
              <RegisterIcon />
              CADASTRAR
            </button>
          
        </div>

        <div className="register-container">
          <img src={Logo} alt="VisGeo"/>
          <span className="welcome">JÁ TEM UMA CONTA?</span>

          <p className="welcome-paragraph">Mantenha-se conectado com a gente! preencha suas credênciais de acesso aqui.</p>
          
          <button
            className="register-btn"
            onClick={() => history.push('/')}
          >
            <LoginIcon className="hover-icon"/>
            ENTRAR
          </button>

        </div>
      </RegisterContainer>
    </>
  );
}

export default Register;