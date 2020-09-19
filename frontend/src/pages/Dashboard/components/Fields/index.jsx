import React, { useState } from 'react';

import api from '../../../../services/api';

import { Menu, Dropdown, message } from 'antd';
import { DownOutlined } from '@ant-design/icons';

import { Container } from './styles';

import ModalTables from '../ModalTables';

const Fields = ({fields, tables}) => {
  const fieldsDebug = ['Campo 1','Campo 2','Campo 3','Campo 4','Campo 5','Campo 6',];

  const [columns, setColumns] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  }

  async function handleGetColumns(table) {
    const response = await api.get(`/columns/${table}`);
    setColumns(response.data);
    message.info(`Tabela ${table} selecionada`);
  }


  const menu = (
    <Menu>
      {tables.map(table => (
        <Menu.Item 
          onClick={()=> handleGetColumns(table)} 
          key={table}
        >
          {table}
        </Menu.Item>
      ))}
    </Menu>
  );


  return (  
    <Container>
      <ModalTables 
        fields={fields} 
        show={openModal}
        columns={columns}
        setShow={setOpenModal}
      />

      <div className="fields-search-container">
        <section>
          <h1>CAMPOS DISPONÍVEIS</h1>
          <div className="fields-container">
            {localStorage.getItem('MODE') === 'production' ?
              fields.map(eachField => (
                <span className="fields">
                  {eachField}
                </span>
              )): fieldsDebug.map(eachField => (
                <span className="fields">
                  {eachField}
                </span>
              ))}
          </div>
        </section>


        <section>
          <div className="fields-container">

            <Dropdown overlay={menu} trigger={['click']}>
              <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                ESCOLHA A COLUNA <DownOutlined className="down-arrow-menu" />
              </a>
            </Dropdown>

            <button onClick={handleOpenModal} className="handle-button">Selecionar tabela</button>
          </div>
        </section>
      </div>
    </Container>
  )
}


export default Fields;