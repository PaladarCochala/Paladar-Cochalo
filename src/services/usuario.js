import BASE_ROUTE from './route';
import axios from 'axios';

function postUsuario(body){
    return axios.post(`${BASE_ROUTE}/usuarios`, body);
}

function getUsuario(emailUsuario){
    return axios.get(`${BASE_ROUTE}/usuarios/${emailUsuario}`);
}

function putUsuariobyEmail(email,body){
    return axios.put(`${BASE_ROUTE}/usuarios/${email}`, body);
}

function deleteUsuariobyEmail(email,body){
    return axios.delete(`${BASE_ROUTE}/usuarios/${email}`, body);
}

function getUsuarios(){
    return axios.get(`${BASE_ROUTE}/usuarios/`);
}

export { 
    postUsuario,
    getUsuario,
    getUsuarios,
    putUsuariobyEmail,
    deleteUsuariobyEmail,
};