import React from 'react';
import { useHistory } from 'react-router-dom';

import {
  RegisterContainer, Lock, LoginIcon, RegisterIcon,
  UserIcon,
} from './styles';

import Logo from '../../assets/images/Logo.png';

function Register() {
  const history = useHistory();

  return (
    <>
      <RegisterContainer>
        <div className="form-container">

          <span className="page-title">CRIAR UMA CONTA</span>

          <form>
            <div className="input-container">
              <UserIcon className="user-icon" />
              <input type="text" placeholder="Nome" />
            </div>

            <div className="input-container">
              <span className="email-symbol">@</span>
              <input type="text" placeholder="E-mail" />
            </div>

            <div className="input-container">
              <Lock className="password-icon" />
              <input type="password" placeholder="Senha" />
            </div>
          </form>

          <button type="button" className="log-in">
            <RegisterIcon />
            CADASTRAR
          </button>

        </div>

        <div className="register-container">
          <img src={Logo} alt="VisGeo" />
          <span className="welcome">JÁ TEM UMA CONTA?</span>

          <p className="welcome-paragraph">Mantenha-se conectado com a gente! preencha suas credênciais de acesso aqui.</p>

          <button
            type="button"
            className="register-btn"
            onClick={() => history.push('/')}
          >
            <LoginIcon className="hover-icon" />
            ENTRAR
          </button>

        </div>
      </RegisterContainer>
    </>
  );
}

export default Register;
