import React, { Component, useEffect, useState } from 'react'
import { getRestaurantes } from '../../services/restaurante';


import { DataGrid } from '@material-ui/data-grid'
const columns = [
  { field: 'id', headerName: 'ID', width: 70 , headerAlign: 'center'},
  { field: 'Logotipo', headerName: 'Logotipo', width: 160,headerAlign: 'center' },
  { field: 'Nombre', headerName: 'Nombre', width: 160, headerAlign: 'center'},
  
];

export default function ListaRestaurantesVistaAdmin() {

  const [restaurantes, setRestaurantes] = useState([]);
  useEffect(() => {
    getDataRestaurantes();
  }, []);

  function getDataRestaurantes() {
    getRestaurantes()
      .then((response) => {
        return response.data;
      })
      .then((response) => {
        console.log(response.response)
        setRestaurantes(response.response);
      })
  }

  return (
    <div>
      <br/>
      <div style={{ height: 650, width: '100%'}}>
        <DataGrid
          rows={restaurantes.map((restaurante) => ({ id: restaurante.id, Nombre: restaurante.nombre , Logotipo: restaurante.logo }))}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[5]}
          checkboxSelection
          style={{
            color: "black"
          }}
        />
      </div>
    </div>
  )

}
