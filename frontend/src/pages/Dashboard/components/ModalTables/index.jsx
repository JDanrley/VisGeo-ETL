import React, { useState } from 'react'
import api from '../../../../services/api';

import { Select } from 'antd';
import { Modal } from './styles';

const ModalTable = ({show, setShow, fields, tableName}) => {

  const [columns, setColumns] = useState([]);

  async function handleGetColumns() {
    const response = await api.get(`/columns/${tableName}`);
    setColumns(response.data);
    console.log(response.data)
  }

  async function handleSend() {
    const data = [];

    columns.map(column => {
      const field = document.querySelector(`#${column}`);
      console.log(field.value)
      if(field.value !== "Escolha um campo") {
        data.push(field.value);
      }
    });

    try {
      await api.post('/save', { message: data });
      console.log('sucesso');
    } catch (a) {
      console.log('deu ruim');
    }

    console.log(data)
  }

  return (
    <>
      <Modal show={show} onHide={()=> setShow(false)}>
        <Modal.Header>
          Configuração De - Para
        </Modal.Header>
        <section className="content">        
          {columns.map(column => (
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
          ))}

          <button onClick={handleSend}>Enviar campos</button>
        </section>



      </Modal>      
    </>
  )
}

export default ModalTable;
