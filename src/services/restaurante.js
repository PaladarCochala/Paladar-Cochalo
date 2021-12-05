import BASE_ROUTE from './route';
import axios from 'axios';

function getRestaurantes() {
    return axios.get(`${BASE_ROUTE}/restaurantes`);
}

function getRestaurantesById(id) {
    return axios.get(`${BASE_ROUTE}/restaurantes/${id}`);
}
function getRestaurantesByEtiqueta(etiqueta){
    return axios.get(`${BASE_ROUTE}/restaurantes/etiqueta/${etiqueta}`);
}

function getComentariosByRestaurantId(id) {
    return axios.get(`${BASE_ROUTE}/comentarios/detallado/restaurante/${id}`);
}
function deleteRestauranteById(id) {
    return axios.delete(`${BASE_ROUTE}/restaurantes/${id}`);
}

function crearRestaurante(body){
    return axios.post(`${BASE_ROUTE}/restaurantes`, body);
}
function crearRelacionRestauranteEtiquetas(body){
    return axios.post(`${BASE_ROUTE}/restaurantes/crearEtiquetas`, body);
}

function putRestauranteById(id, body) {
    return axios.put(`${BASE_ROUTE}/restaurantes/${id}`,body);
}

function obtenerUltimos5Restaurantes() {
    return axios.get(`${BASE_ROUTE}/restaurantes/ultimos`);
}
function obtenerRestaurantesMasValoradosPorSabor() {
    return axios.get(`${BASE_ROUTE}/restaurantes/sabor`);
}
function obtenerRestaurantesMasValoradosPorServicio() {
    return axios.get(`${BASE_ROUTE}/restaurantes/servicio`);
}

export { 
    getRestaurantes, 
    getRestaurantesById,
    getRestaurantesByEtiqueta,
    deleteRestauranteById,
    crearRestaurante,
    putRestauranteById,
    obtenerUltimos5Restaurantes,
    obtenerRestaurantesMasValoradosPorSabor,
    obtenerRestaurantesMasValoradosPorServicio,
    getComentariosByRestaurantId,
};
