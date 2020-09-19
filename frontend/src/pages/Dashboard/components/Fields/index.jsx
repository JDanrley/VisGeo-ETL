import React, { useState } from 'react'

import { Container } from './styles';

import ModalTables from '../ModalTables';

const Fields = ({fields, tables}) => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  }

  return (  
    <Container>
      
      <ModalTables show={openModal} setShow={setOpenModal} tables={tables} />

      <div className="fields-search-container">
        <section>
          <h1>CAMPOS DISPONÍVEIS</h1>
          <div className="fields-container">
            {fields.map(eachField => (
              <span className="fields">
                {eachField}
              </span>
            ))}
          </div>
        </section>


        <section>
          <div className="fields-container">
            <button onClick={handleOpenModal} className="handle-button">Selecionar tabela</button>
          </div>
        </section>
      </div>
    </Container>
  )
}


export default Fields;