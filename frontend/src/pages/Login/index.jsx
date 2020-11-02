import React from 'react';
import { useHistory } from 'react-router-dom';

import {
  LoginContainer, Lock, LoginIcon, RegisterIcon,
} from './styles';

import Logo from '../../assets/images/Logo.png';

function Login() {
  const history = useHistory();

  return (
    <>
      <LoginContainer>
        <div className="form-container">

          <span className="page-title">ACESSE SUA CONTA</span>

          <form>
            <div className="input-container">
              <span className="email-symbol">@</span>
              <input type="text" placeholder="E-mail" />
            </div>

            <div className="input-container">
              <Lock className="password-icon" />
              <input type="password" placeholder="Senha" />
            </div>
          </form>

          <a href="/recovery" className="forgot-password">Esqueceu sua senha?</a>

          <button
            type="button"
            className="log-in"
            onClick={() => history.push('/dashboard')}
          >
            <LoginIcon />
            ACESSAR
          </button>

        </div>

        <div className="register-container">
          <img src={Logo} alt="VisGeo" />
          <span className="welcome">OLÁ, SEJA BEM-VINDO!</span>

          <p className="welcome-paragraph">Estavamos ansiosos por sua chegada, comece aqui sua nova jornada conosco.</p>

          <button
            type="button"
            className="register-btn"
            onClick={() => history.push('/register')}
          >
            <RegisterIcon className="register-icon" />
            CADASTRE-SE
          </button>

        </div>
      </LoginContainer>
    </>
  );
}

export default Login;
