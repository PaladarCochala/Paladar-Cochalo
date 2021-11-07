import Header from '../../layouts/Header';
import React, { useEffect, useState } from 'react';
import {Carousel} from '3d-react-carousal'
import Carrusel from './Carousel/Carrusel'
import { obtenerUltimos5Restaurantes } from '../../services/restaurante';
import Banner from '../assets/mainBanner.jpg';
import { Grid } from '@material-ui/core';
import RestaurantCard from '../Restaurante/Common/RestaurantCard';
export default function MediaCard() {

  const [restaurantesRecientes, setRestaurantesRecientes] = useState([]);
  useEffect(() => {
    getRestaurantesNuevos()
  }, []);

  function getRestaurantesNuevos() {
    obtenerUltimos5Restaurantes()
      .then((response) => {
        return response.data;
      })
      .then((response) => {
        console.log(response.response)
        setRestaurantesRecientes(response.response.map((restaurante) => {
          return (

            <RestaurantCard restaurante={restaurante} />
          );
        }))})
      
  }

  return (

    <div>
      <img
        src={Banner}
        width='100%'
        height='auto'
        style={{
          verticalAlign: 'text-top',
          border: '5px none'
        }}
      />
      {/* //{restaurantesRecientes} */}
      <Carousel slides={restaurantesRecientes}/>
    </div>

  );
}
