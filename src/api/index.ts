import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3001/api', // Replace with the URL of your backend server
});

export default instance;