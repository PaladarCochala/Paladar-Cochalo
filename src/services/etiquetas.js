import BASE_ROUTE from './route';
import axios from 'axios';

function getEtiquetas() {
    return axios.get(`${BASE_ROUTE}/etiquetas`);
}

function crearEtiquetas(body){
    return axios.post(`${BASE_ROUTE}/etiquetas`, body);
}

export { 
    getEtiquetas,
    crearEtiquetas,
};