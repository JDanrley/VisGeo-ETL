import React, { useState } from 'react';

import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

import { Container } from './styles';

import ModalTables from '../ModalTables';

const Fields = ({fields, tables}) => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  }


  const menu = (
    <Menu>
      <Menu.Item key="0">
        <a href="http://www.alipay.com/">1st menu item</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a href="http://www.taobao.com/">2nd menu item</a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3">3rd menu item</Menu.Item>
    </Menu>
  );


  return (  
    <Container>
      
      <ModalTables show={openModal} setShow={setOpenModal} fields={fields} tableName={'ft_ponto_drenagem'} />

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