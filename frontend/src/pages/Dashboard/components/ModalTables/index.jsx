import React from 'react'

import { Modal } from './styles';

const ModalTable = ({show, setShow}) => {

  const data = ["Table-1","Table-2","Table-3","Table-4","Table-5"];

  return (
    <>
      <Modal show={show} onhide={()=> setShow(false)}>
        <Modal.Header>
          Selecionar Tabelas
        </Modal.Header>

        <section>
          <h1>Tabelas</h1>
          <ul>
            {data.map(each => (
              <li >{each}</li>
            ))}
          </ul>
        </section>

        <section>
          <h1>Campos</h1>
          <ul>
            {data.map(each => (
              <li >{each}</li>
            ))}
          </ul>
        </section>



      </Modal>      
    </>
  )
}

export default ModalTable;
