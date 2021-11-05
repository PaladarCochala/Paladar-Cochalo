import Header from '../../layouts/Header';
import React, { useEffect } from 'react';


import Image1 from '../assets/mainBanner.jpg';
export default function MediaCard() {


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <img 
        src={Image1}
        width='100%'
        height= 'auto'
        style= {{
          verticalAlign: 'text-top',
          border: '5px none'
        }}
      />

  );
}
