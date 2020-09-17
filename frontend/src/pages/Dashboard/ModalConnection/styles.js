import styled from 'styled-components';

import { Modal as ModalBoots } from 'react-bootstrap';

import { FaUserAlt } from 'react-icons/fa';
import { IoIosLock } from 'react-icons/io';
import { RiLoginBoxFill } from 'react-icons/ri';
import { GoDatabase } from 'react-icons/go';

export const Modal = styled(ModalBoots)`

  .modal-content {
    width: 800px;
    height: 600px;

    display: flex;
    align-items: center;
    justify-content: center;

    background: rgba(47, 145, 132, 0.65);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 50px;
  }

`

export const UserIcon = styled(FaUserAlt)`
  margin-right: 5px;

  font-size: 20px;
  color: #B2B2B2;
`;

export const DatabaseIcon = styled(GoDatabase)`
  margin-right: 5px;

  font-size: 22px;
  color: #B2B2B2;
`;

export const PortIcon = styled(RiLoginBoxFill)`
  margin-right: 5px;

  font-size: 22px;
  color: #B2B2B2;
`;

export const Lock = styled(IoIosLock)`
  margin-right: 5px;

  font-size: 25px;
  color: #B2B2B2;
`;
