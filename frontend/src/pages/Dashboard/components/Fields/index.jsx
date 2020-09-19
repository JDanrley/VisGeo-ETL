import React from 'react'
import { Dropdown, Menu } from 'antd';

import { Container } from './styles';

const Fields = ({fields}) => {
  const menu = (
    <Menu>
      <Menu.Item>
        Coluna 1
      </Menu.Item>

      <Menu.Item>
        Coluna 2
      </Menu.Item>

      <Menu.Item>
        Coluna 3
      </Menu.Item>

      <Menu.Item>
        Coluna 4
      </Menu.Item>
    </Menu>
  );

  return (  
    <Container>
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
            <Dropdown 
              trigger={["click"]}
              overlay={menu} >
              <span className="title">Escolha a coluna</span>
            </Dropdown>


            <button className="handle-button">select-test</button>
          </div>
        </section>
      </div>
    </Container>
  )
}


export default Fields;