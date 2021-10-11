import React, { Component, useEffect, useState } from 'react'
import { getRestaurantes } from '../../services/restaurante';
import { Button } from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid'
import { deleteRestauranteById } from '../../services/restaurante';


  const columns = [
    { field: 'id', headerName: 'ID', width: 70, headerAlign: 'center' },
    { field: 'Logotipo', headerName: 'Logotipo', width: 160, headerAlign: 'center' },
    { field: 'Nombre', headerName: 'Nombre', width: 160, headerAlign: 'center' },
    {
      field: 'colEliminar',
      headerName: 'Acciones',
      width: 160,
      renderCell: (params) => {
        return (
          <strong>
            <Button
              variant="contained"
              color="secondary"
              size="small"
              style={{ marginLeft: 16 }}
              onClick={() => {
                deleteRestauranteById(params.id)
              }}
            >
              Borrar
            </Button>
          </strong>
        )
      },
      disableClickEventBubbling: true,
    },
  ];
//const renderDetailsButton = 
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
      <br />
      <div style={{ height: 650, width: '100%' }}>
        <DataGrid
          disableSelectionOnClick = "false"
          rows={restaurantes.map((restaurante) => ({ id: restaurante.id, Nombre: restaurante.nombre, Logotipo: restaurante.logo }))}
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
