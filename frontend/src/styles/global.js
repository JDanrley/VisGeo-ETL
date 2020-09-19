import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none !important;
    box-sizing: border-box;
  }

  body {
    background: #FFFFFF;
    -webkit-font-smoothing: antialiased;
  }

  body,
  input,
  button {
    font-family: Quicksand;
    font-weight: normal;
    font-size: 20px;
  }

  button {
    cursor: pointer;
  }

  .modal-dialog {
    display: flex;
    justify-content: center;
  }
`;