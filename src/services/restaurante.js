import BASE_ROUTE from './route';
import axios from 'axios';

function getRestaurantes() {
    return axios.get(`${BASE_ROUTE}/restaurantes`);
}

function getRestaurantesById(id) {
    return axios.get(`${BASE_ROUTE}/restaurantes/${id}`);
}

export { 
    getRestaurantes, 
    getRestaurantesById 
};
