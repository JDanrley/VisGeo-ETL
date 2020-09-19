import styled from 'styled-components';

import { Modal as ModalBoots} from 'react-bootstrap';

export const Modal = styled(ModalBoots)`
  width: 100%;
  height: 100vh;

  .modal-content {
    width: 800px;
    height: 600px;
     
    background: rgba(47, 145, 132, 0.65);
    box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
    border-radius: 50px;

    overflow: scroll;

    ::-webkit-scrollbar{
      visibility:hidden;
    }
  }

  .modal-header {
    align-items: center;
    justify-content: center;
    border: none;

    font-family: Quicksand;
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: 75px;
    text-align: center;
    color: #FFFFFF;
  }

  .modal-dialog {
    max-width: 100%;
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;


    section {
      width: 80%;
      display: flex;
      height: 70px;    
      border-radius: 8px;
      margin: 10px 0px;
      
      justify-content: space-between;
      padding: 0px 40px;
      align-items: center;
 
      background: antiquewhite;

      select {
        width: 200px !important;
        border-radius: 8px;        
      }
    }
  }

  button {
    position: absolute;
    bottom: 10px;
    padding: 10px 40px;
    border: none;
    border-radius: 8px;

    color: #FFFFFF;
    font-size: 20px;
    font-weight: 600;
    background-color: #43DBB2;
  }

  ul {
    list-style-type: none;
  }
`