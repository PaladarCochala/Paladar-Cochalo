import Header from '../../layouts/Header';
import React, { useEffect } from 'react';

export default function MediaCard() {

  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  
    return (
        <>
        <Header item={'Home'} />
        <p> lista restaurantes</p>
        </>
    );
  }