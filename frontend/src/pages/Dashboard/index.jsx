import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { DashboardContainer } from './styles';

import Acess from './components/Acess';
import Fields from './components/Fields';

import LogoHeader from '../../assets/images/Logo-white-bg.png';

function Dashboard() {
  const history = useHistory();
  const [change, setChange] = useState(false)

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

          <button onClick={()=> setChange(!change)}>DEBUG CHANGE COMPONENT</button>
        </header>
        
        {
          change 
            ? <Fields />
            : <Acess />
        }
          
      </DashboardContainer>
    </>
  );
}

export default Dashboard;
