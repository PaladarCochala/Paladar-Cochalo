import BASE_ROUTE from './route';
import axios from 'axios';

function postUsuario(body){
    return axios.post(`${BASE_ROUTE}/usuarios`, body);
}

function getUsuario(emailUsuario){
    return axios.get(`${BASE_ROUTE}/usuarios/${emailUsuario}`);
}

export { 
    postUsuario,
    getUsuario,
};