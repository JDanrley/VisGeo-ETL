import React, { useState } from 'react';

import { Menu, Dropdown, message } from 'antd';
// eslint-disable-next-line import/no-extraneous-dependencies
import { DownOutlined } from '@ant-design/icons';
import api from '../../../../services/api';

import { Container, ArrowRight } from './styles';

import ModalTables from '../ModalTables';

const Fields = ({ fields, tables }) => {
  const fieldsDebug = ['Campo 1', 'Campo 2', 'Campo 3', 'Campo 4', 'Campo 5', 'Campo 6'];
  const tablesDebug = ['Tabela 1', 'Tabela 2', 'Tabela 3', 'Tabela 4', 'Tabela 5', 'Tabela 6'];

  const [columns, setColumns] = useState([]);
  const [selectedTable, setSelectedTable] = useState('');
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  async function handleSaveDirectly () {
    try {
      await api.post('/saveDirectly');
      message.success('Salvo com sucesso');
    } catch (error) {
      message.error('Falha ao salvar arquivo no banco de dados');
    }
    
  };

  async function handleGetColumns(table) {
    setSelectedTable(table);

    const response = await api.get(`/columns/${table}`);
    setColumns(response.data);
    message.info(`Tabela ${table} selecionada`);
  }

  const menu = (
    <Menu>
      {localStorage.getItem('MODE') === 'production'
        ? tables.map((table) => (
          <Menu.Item
            onClick={() => handleGetColumns(table)}
            key={table}
          >
            {table}
          </Menu.Item>
        ))
        : tablesDebug.map((table) => (
          <Menu.Item
            onClick={() => handleGetColumns(table)}
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
            {localStorage.getItem('MODE') === 'production'
              ? fields.map((eachField) => (
                <span className="fields">
                  {eachField}
                </span>
              )) : fieldsDebug.map((eachField) => (
                <span className="fields">
                  {eachField}
                </span>
              ))}
          </div>
        </section>

        <section>
          <div className="fields-container">

            <Dropdown overlay={menu} trigger={['click']}>
              <a className="ant-dropdown-link" href onClick={(e) => e.preventDefault()}>
                {selectedTable || "SELECIONE UMA TABELA"}
                {' '}
                <DownOutlined className="down-arrow-menu" />
              </a>
            </Dropdown>

            <button type="button" onClick={handleOpenModal} className="handle-button">
              Configurar de
              {' '}
              <ArrowRight />
              {' '}
              para

            </button>
          </div>
        </section>
      </div>

      <button 
        className="saveDirectly"
        type="button"
        onClick={handleSaveDirectly}
      >
        Salvar diretamente
      </button>
    </Container>
  );
};

export default Fields;
