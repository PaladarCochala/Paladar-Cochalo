import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Grid from '@mui/material/Grid';
import TableRow from '@mui/material/TableRow';
import React, { Component, useEffect, useState } from 'react'
import { getRestaurantes } from '../../services/restaurante';
import ModalEliminar from './modals/ModalEliminar'
import Button from '@mui/material/Button';

export default function ListaRestaurantes() {

    const [restaurantes, setRestaurantes] = useState([]);
    const [isLoading, setLoading] = useState(true);

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
                setLoading(false);
            })
    }


    return (
        <div>
            <br/> 
            <Button variant="contained" href="/panel-administrador/crear-restaurante"> Crear nuevo restaurante </Button>
        <Grid
            align="center"
            item xs={12} sm={12}>
            <TableContainer >
                <Table aria-label="simple table">
                    <TableBody>
                        <TableHead>
                            <TableRow >
                                <TableCell style={{ color: "black", borderBottom: "none", textAlign: 'left' }} > ID</TableCell>
                                <TableCell style={{ color: "black", borderBottom: "none", textAlign: 'left' }} > LOGO</TableCell>
                                <TableCell align="right" style={{ color: "#C7522D", borderBottom: "none", textAlign: 'left' }} >Nombre</TableCell>
                                <TableCell align="right" style={{ color: "#EBEBEB", borderBottom: "none", textAlign: 'center' }} >Acciones</TableCell>
                            </TableRow>
                        </TableHead>
                        {!isLoading ?
                            restaurantes.map((restaurante) => ( 
                                <TableRow key={restaurante.id}>
                                    <TableCell align="center" >{restaurante.id}</TableCell>
                                    <TableCell align="center" >{restaurante.logo}</TableCell>
                                    <TableCell align="center" >{restaurante.nombre}</TableCell>
                                    <TableCell align="center" > <ModalEliminar id={restaurante.id} nombre={restaurante.nombre} update={getDataRestaurantes}/>  </TableCell>
                                </TableRow>
                            )): null//Pendiente
                        }
                        {/* 
                    {restaurantes.nombre ?
                        <TableRow key='code'>
                            <TableCell align="left" component="th" scope="row"  >Codigo</TableCell>
                            <TableCell align="left"  >{restaurantes.nombre}</TableCell>
                        </TableRow>
                        : null
                    }

                    {restaurantes.logo ?
                        <TableRow key='size'>
                            <TableCell align="left" component="th" scope="row" >Dimensiones</TableCell>
                            <TableCell align="left" >{restaurantes.logo}</TableCell>
                        </TableRow>
                        : null
                    }

                    {console.weight ?
                        <TableRow key='weight'>
                            <TableCell align="left"  >Peso</TableCell>
                            <TableCell align="left" >{console.weight}</TableCell>
                        </TableRow>
                        : null
                    }

                    {console.colors ?
                        <TableRow key='colors'>
                            <TableCell align="left" component="th" scope="row" >Colores</TableCell>
                            <TableCell align="left" >{console.colors}</TableCell>
                        </TableRow>
                        : null
                    }

                    {console.controls ?
                        <TableRow key='controls'>
                            <TableCell align="left" component="th" scope="row" >Controles</TableCell>
                            <TableCell align="left" >{console.controls}</TableCell>
                        </TableRow>
                        : null
                    } */}

                    </TableBody>
                </Table>
            </TableContainer>
        </Grid>
        </div>
    )

}
