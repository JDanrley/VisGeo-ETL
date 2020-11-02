import styled from 'styled-components';

import Background from '../../assets/images/background-dashboard.png';

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100vh;

  padding-right: 30px;
  padding-left: 30px;

  background-image: url(${Background});
  background-size: 750px;
  background-repeat: no-repeat;
  background-position: right;

  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    height: 200px;

    .logo-header {
      width: 180px;
      cursor: pointer;

      transition: ease-in-out 0.2s;

      &:hover {
        margin-left: 10px;
      }
    }
  }
`;
