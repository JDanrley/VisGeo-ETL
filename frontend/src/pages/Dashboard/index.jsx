import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { DashboardContainer } from './styles';

import Acess from './components/Acess';
import Fields from './components/Fields';

import LogoHeader from '../../assets/images/Logo-white-bg.png';

function Dashboard() {
  const history = useHistory();
  const [fields, setFields] = useState([]);
  const [tables, setTables] = useState([]);
  const [change, setChange] = useState(false);

  return (
    <>
      <DashboardContainer>
        <header>
          <img 
            src={LogoHeader}
            alt="VisGeo"
            className="logo-header"
            onClick={() => history.push('/')}
          />

        </header>
        
        {
          change 
            ? <Fields fields={fields} tables={tables} />
            : <Acess setFields={setFields} setTables={setTables} changeScreen={setChange} />
        }
          
      </DashboardContainer>
    </>
  );
}

export default Dashboard;
