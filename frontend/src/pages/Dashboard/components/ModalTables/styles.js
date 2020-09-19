import styled from 'styled-components';

import { Modal as ModalBoots} from 'react-bootstrap';

export const Modal = styled(ModalBoots)`
  width: 100%;
  height: 100vh;

  .modal-content {
    width: 800px;
    height: 600px;
  }

  .modal-dialog {
    max-width: 100%;
  }

  .content {
    display: flex;
    justify-content: space-evenly;
  }

  ul {
    list-style-type: none;
  }
`