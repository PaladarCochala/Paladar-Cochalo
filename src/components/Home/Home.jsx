import Header from '../../layouts/Header';
import React, { useEffect } from 'react';

export default function MediaCard() {

  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  
    return (
  
      <div className={classes.root}>
        <Header item={'Home'} />
      </div>
    );
  }