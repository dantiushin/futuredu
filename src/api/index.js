import axios from 'axios';

const Api = axios.create({
  baseURL: `${process.env.REACT_APP_BACK_URL}/api/v1`,
});

export default Api;
