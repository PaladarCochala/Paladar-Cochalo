import BASE_ROUTE from './route';
import axios from 'axios';

function postComentario(body){
    return axios.post(`${BASE_ROUTE}/comentarios`, body);
}

function getComentarioDeUsuario(idRestaurante, emailUsuario){
    return axios.get(`${BASE_ROUTE}/comentarios/restaurante/${idRestaurante}/Usuario/${emailUsuario}`);
}
export { 
    postComentario,
    getComentarioDeUsuario,
};
