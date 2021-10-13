import BASE_ROUTE from './route';
import axios from 'axios';

function postComentario(body){
    return axios.post(`${BASE_ROUTE}/comentarios`, body);
}

export { 
    postComentario
};
