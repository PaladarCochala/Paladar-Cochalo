import BASE_ROUTE from './route';
import axios from 'axios';

function getEtiquetas() {
    return axios.get(`${BASE_ROUTE}/etiquetas`);
}

export { 
    getEtiquetas,
};