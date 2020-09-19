import React, { useState } from 'react'
import api from '../../../../services/api';

import { Spin, Alert } from 'antd';

import { Modal } from './styles';

const ModalTable = ({show, setShow, fields, columns, tableName}) => {
  /* CODIGO PARA DEBUG */
  const mode = localStorage.getItem('MODE');

  const columnsDebug = ['Coluna 1','Coluna 2','Coluna 3','Coluna 4','Coluna 5','Coluna 6'];
  const fieldsDebug = ['Campo 1','Campo 2','Campo 3','Campo 4','Campo 5','Campo 6'];

  /* CODIGO PARA DEBUG */


  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [spin, setSpin] = useState(false);

  async function handleSend() {
    const data = [];
    setSpin(true);

    columns.forEach(column => {
      const field = document.querySelector(`#${column}`);
      if(field.value !== "Escolha um campo") {
        data.push(field.value);
      }
    });

    try {
      await api.post('/save', { message: data });
      setSuccess(true);
    } catch (a) {
      setError(true);
    }

    setSpin(false);
  }

  return (
    <>
      <Modal show={show} onHide={()=> setShow(false)}>
        <Modal.Header>
          Configuração De - Para
        </Modal.Header>

        {spin && <Spin />}

        {error && (
          <Alert
            message="Erro"
            description={'Falha ao comunicar com o servidor'}
            type="error"
            closable
            showIcon
            onClose={()=> setError(false)}
          />
        )}

        {success && (
          <Alert
            message="Sucesso"
            description={'Arquivos enviados com sucesso'}
            type="success"
            closable
            showIcon
            onClose={()=> setSuccess(false)}
          />
        )}

        <section className="content"> 
          {!mode === 'debug' 
            ? columns.map(column => (
              <>
                <section>
                  <span>
                    {column}
                  </span>              
                  
                  <select
                    style={{ width: '100%' }}
                    id={column}
                    name="teste"
                    title="teste"
                  >
                    <>
                      <option>
                        Escolha um campo
                      </option>
                      {fields.map(item =>
                        <option key={item} value={item}>
                          {item}
                        </option>
                      )}
                    </>
                  </select>
                </section>
              </>
            )) : columnsDebug.map(column => (
              <>
                <section>
                  <span>
                    {column}
                  </span>              
                  
                  <select
                    style={{ width: '100%' }}
                    id={column}
                    name="teste"
                    title="teste"
                  >
                    <>
                      <option>
                        Escolha um campo
                      </option>
                      {fieldsDebug.map(item =>
                        <option key={item} value={item}>
                          {item}
                        </option>
                      )}
                    </>
                  </select>
                </section>
              </>
            ))}

          <button onClick={handleSend}>Enviar campos</button>
        </section>
      </Modal>      
    </>
  )
}

export default ModalTable;
