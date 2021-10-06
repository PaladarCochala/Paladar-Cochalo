import Header from '../../layouts/Header';
import React, { useEffect } from 'react';

import RestaurantCard from '../Restaurante/Common/RestaurantCard';

export default function MediaCard() {

  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  
    return (
        <>
        <Header item={'Home'} />
        <p> lista restaurantes</p>
        <RestaurantCard></RestaurantCard>
        </>
    );
  }