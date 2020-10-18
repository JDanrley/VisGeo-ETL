import React, { useState, useEffect } from 'react';
import { message } from 'antd';

import api from '../../../../services/api';
import { Container } from './styles';

const DownloadTables = ({tables}) => {
  // const data = ['Tabela 1','Tabela 2','Tabela 3','Tabela 4','Tabela 5','Tabela 6','Tabela 7','Tabela 8','Tabela 9','Tabela 10'];

  const [tableName, setTableName] = useState('');
  const { info, error } = message;

  const handleSelectTable = (table) => {
    setTableName(table);
    info(table);
  }

  async function handleDownload() {
    try {
      api.post('/recoverFile', {
        selectedTable: tableName,
      });

      info(table);
    } catch (error) {
      error('Deu merda');
    }
  }

  return (
    <Container>
      <h1>
        TABELAS DISPONÍVEIS
      </h1>

      <section>
        <ul>
          {tables.map(table => (
            <li onClick={()=> handleSelectTable(table)} key={table}>
              {table}
            </li>
          ))}
        </ul>
      </section>

      <button onClick={handleDownload}>
        BAIXAR <br/> SHAPEFILE
      </button>
    </Container>
  );
}

export default DownloadTables;