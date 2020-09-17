import styled from 'styled-components';

import Background from '../../assets/images/background-dashboard.png';


import { RiUploadCloud2Line } from 'react-icons/ri';
import { BsSearch } from 'react-icons/bs';



export const UploadIcon = styled(RiUploadCloud2Line)`
  font-size: 100px;
  color: rgba(67, 219, 178, 0.25);

  transition: ease-in-out 0.2s;
`;

export const SearchIcon = styled(BsSearch)`
  font-size: 80px;
  color: rgba(67, 219, 178, 0.25);

  transition: ease-in-out 0.2s;
`;

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100vw;
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

  .upload-search-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    height: 100%;

    padding-right: 250px;
    padding-left: 250px;

    .search-dash {
      border: 4px solid rgba(67, 219, 178, 0.25);

      &:hover {
        border: 4px solid #33AC91 !important;
      }
      
    }

    .upload-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      width: 350px;
      height: max-content;

      .dragger-props-custom {
        border: none;
        background: transparent;
      }

      .upload-dash {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        width: 100%;
        height: 250px;

        padding-top: 35px;
        padding-bottom: 35px;

        background: #FFFFFF;
        border: 4px solid rgba(67, 219, 178, 0.25);
        border-radius: 50px;

        cursor: pointer;
        transition: ease-in-out 0.2s;

        .search-desc {
          margin-bottom: 20px;
        }
        
        .upload-desc {
          text-align: center;

          font-size: 20px;
          font-weight: 600;
          color: rgba(67, 219, 178, 0.25);

          transition: ease-in-out 0.2s;
        }

        &:hover {
          border: 4px dashed #33AC91;

          .upload-icon {
            color: #33AC91;
          }

          .upload-desc {
            color: #33AC91;
          }
        }
      }

      .handle-button {
        width: 200px;
        height: 45px;

        margin-top: 50px;

        color: #FFFFFF;
        font-size: 20px;
        font-weight: 600;

        background-color: #43DBB2;
        border: none;
        border-radius: 50px;

        transition: ease-in-out 0.2s;

        &:hover {
          background-color: #33AC91;
        }
      }
    }
  }
`;