import axios from "axios";

const instance = axios.create({
  baseURL: 'https://637591a248dfab73a4fb2bc4.mockapi.io/api',
});

export default instance;
