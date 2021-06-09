import axios from 'axios';

const clienteAxios = axios.create({
    // baseURL: process.env.REACT_APP_BACKEND_URL
    baseURL: "http://localhost:4000/api/"
});


export default clienteAxios;