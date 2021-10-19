import BASE_ROUTE from './route';
import axios from 'axios';

function getRestaurantes() {
    return axios.get(`${BASE_ROUTE}/restaurantes`);
}

function getRestaurantesById(id) {
    return axios.get(`${BASE_ROUTE}/restaurantes/${id}`);
}
function deleteRestauranteById(id) {
    return axios.delete(`${BASE_ROUTE}/restaurantes/${id}`);
}

function crearRestaurante(body){
    return axios.post(`${BASE_ROUTE}/restaurantes`, body);
}

function putRestauranteById(id,body) {
    return axios.put(`${BASE_ROUTE}/restaurantes/${id}`,body);
}

export { 
    getRestaurantes, 
    getRestaurantesById,
    deleteRestauranteById,
    crearRestaurante,
    putRestauranteById,
};
