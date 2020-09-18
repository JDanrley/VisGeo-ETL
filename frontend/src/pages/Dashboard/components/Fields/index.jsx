import React from 'react'
import { Dropdown, Menu } from 'antd';

import { Container } from './styles';

const Fields = () => {
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

  const dataForDevelopment = ['Campo-1','Campo-2','Campo-3','Campo-4','Campo-5','Campo-6','Campo-7'];

  return (  
    <Container>
      <div className="fields-search-container">
        <section>
          <h1>CAMPOS DISPONÍVEIS</h1>
          <div className="fields-container">
            {dataForDevelopment.map(eachField => (
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