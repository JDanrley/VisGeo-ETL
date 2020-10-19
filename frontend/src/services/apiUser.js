import axios from 'axios';

const apiUser = axios.create({
  baseURL: 'http://localhost:3333',
});

export default apiUser;