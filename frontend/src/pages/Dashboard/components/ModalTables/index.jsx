import React from 'react'

import { Modal } from './styles';

const ModalTable = ({show, setShow, tables}) => {

  return (
    <>
      <Modal show={show} onhide={()=> setShow(false)}>
        <Modal.Header>
          Selecionar Tabelas
        </Modal.Header>
        <section className="content">        
          
          <section>
            <h1>Tabelas</h1>
            <ul>
              {tables.map(each => (
                <li >{each}</li>
              ))}
            </ul>
          </section>

          <section>
            <h1>Campos</h1>
            <ul>
              {tables.map(each => (
                <li >{each}</li>
              ))}
            </ul>
          </section>


        </section>



      </Modal>      
    </>
  )
}

export default ModalTable;
