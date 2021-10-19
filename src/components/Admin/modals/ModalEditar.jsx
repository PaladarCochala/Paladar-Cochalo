import React, { Component, useEffect, useState } from 'react'

import Button from '@mui/material/Button';
import ButtonModal from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';



import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import { putRestauranteById } from '../../../services/restaurante';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function ModalVer({ restaurante, update }) {
    const [open, setOpen] = React.useState(false);

    const [nombre, setNombre] = useState(restaurante.nombre);
    const [ubicacion, setUbicacion] = useState(restaurante.ubicacion);
    /* const [promedioSabor, setPromedioSabor] = useState(0.0);
    const [promedioServicio, setPromedioServicio] = useState(0.0);
    const [logo, setLogo] = useState(null); */

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    function editRestaurant(id) {
        setOpen(false);
        /* console.log(id)
        console.log(nombre)
        console.log(ubicacion) */
        putRestauranteById(id, {
            nombre: nombre,
            ubicacion: ubicacion
        }).then((x) => {
            return x.data;
        }).then(()=>{update()})
    }

    return (
        <div>
            <Button
                variant="contained"
                color="success"
                size="small"
                style={{ marginLeft: 16 }}
                onClick={() => {
                    handleClickOpen()
                }}
            >
                Editar
            </Button>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle align="center">Editar Restaurante</DialogTitle>
                <Divider></Divider>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        <Box sx={{
                            width: 550,
                            height: 460,
                        }}>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <Grid
                                        container
                                        justifyContent="center"
                                        alignItems="center"
                                        sx={{
                                            p: 1,
                                            m: 1,
                                        }}
                                    >
                                        <TextField
                                            id="outlined-required"
                                            label="Nombre:"
                                            defaultValue={restaurante.nombre}
                                            onChange={(e) => setNombre(e.target.value)}
                                        />
                                    </Grid>
                                    <Grid
                                        container
                                        justifyContent="center"
                                        alignItems="center"
                                        sx={{
                                            p: 1,
                                            m: 1,
                                        }}
                                    >
                                        <TextField
                                            id="outlined-required"
                                            label="Dirección:"
                                            defaultValue={restaurante.ubicacion}
                                            onChange={(e) => setUbicacion(e.target.value)}
                                        />
                                    </Grid>
                                    <Grid
                                        container
                                        justifyContent="center"
                                        alignItems="center"
                                        sx={{
                                            p: 1,
                                            m: 1,
                                        }}
                                    >
                                        <TextField
                                            id="outlined-required"
                                            label="Rango de precios:"
                                            defaultValue="Bs. 50 - Bs. 200"
                                        />
                                    </Grid>
                                    <Grid
                                        container
                                        justifyContent="center"
                                        alignItems="center"
                                        sx={{
                                            p: 1,
                                            m: 1,
                                        }}
                                    >
                                        <TextField
                                            id="outlined-required"
                                            label="Etiquetas:"
                                            defaultValue="Italiana, Europea"
                                        />
                                    </Grid>
                                    <Grid
                                        container
                                        justifyContent="center"
                                        alignItems="center"
                                        sx={{
                                            p: 1,
                                            m: 1,
                                        }}
                                    >
                                        <TextField
                                            id="outlined-required"
                                            label="Contactos:"
                                            defaultValue="+591 123456789"
                                        />
                                    </Grid>
                                </Grid>
                                <Grid item xs={6}>
                                    <p>Cambiar imagen</p>
                                    {restaurante.logo}
                                </Grid>

                            </Grid>
                            <Divider></Divider>
                            <Grid
                                container
                                justifyContent="center"
                                alignItems="center"
                            >
                                <ButtonModal color="error" onClick={handleClose}>Cancelar</ButtonModal>
                                <ButtonModal color="success" onClick={() => { editRestaurant(restaurante.id) }}>Guardar</ButtonModal>
                            </Grid>
                        </Box>
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </div >
    )

}
