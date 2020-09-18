import React from 'react';
import { useHistory } from 'react-router-dom';

import { DashboardContainer } from './styles';

import Acess from './components/Acess';

import LogoHeader from '../../assets/images/Logo-white-bg.png';

function Dashboard() {
  const history = useHistory();

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

        <Acess />
          
      </DashboardContainer>
    </>
  );
}

export default Dashboard;
