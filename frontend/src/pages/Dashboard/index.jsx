import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';
import { DashboardContainer } from './styles';

import Acess from './components/Acess';
import Fields from './components/Fields';
import DownloadTables from './components/DownloadTables';

import LogoHeader from '../../assets/images/Logo-white-bg.png';

function Dashboard() {
  const history = useHistory();
  const [fields, setFields] = useState([]);
  const [tables, setTables] = useState([]);
  const [screen, setScreen] = useState('main');

  const [tableFromDatabase, setTableFromDatabase] = useState([])

  useEffect(() => {
    api.get('/searchTables').then(response => {
      setTableFromDatabase(response.data);
    });
  },[])

  const renderScreens = (toScreen) => {
    switch (toScreen) {
      case 'main':
      
        return(
          <Acess setFields={setFields} setTables={setTables} changeScreen={setScreen} />
        );

      case 'upload':
        
        return(
          <Fields fields={fields} tables={tables} />
        );

      case 'download':

        return(
          <DownloadTables tables={tableFromDatabase} />
        );
  
      default:
        break;
    }
  }

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
          renderScreens(screen)
        }
          
      </DashboardContainer>
    </>
  );
}

export default Dashboard;
