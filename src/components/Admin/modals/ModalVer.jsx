import React, { Component, useEffect } from 'react'

import Button from '@mui/material/Button';
import ButtonModal from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';



import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function ModalVer({ restaurante }) {
    const [open, setOpen] = React.useState(false);


    const handleClickOpen = () => {
        //console.log(nombre)
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <div>
            <Button
                variant="contained"
                color="primary"
                size="small"
                style={{ marginLeft: 16 }}
                onClick={() => {
                    //deleteRestauranteById(params.id)
                    handleClickOpen()
                }}
            >
                Ver
            </Button>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle align="center">{restaurante.nombre}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        <Box sx={{
                            width: 500,
                            height: 400,
                        }}>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <b>Dirección:</b>
                                    <p>{restaurante.ubicacion}</p>
                                    <b>Rango de precios:</b>
                                    <p>Bs. 50 - Bs. 200</p>
                                    <b>Etiquetas:</b>
                                    <p>Italiana, Europea</p>
                                    <b>Contactos:</b>
                                    <p>+591 123456789</p>
                                </Grid>
                                <Grid item xs={6}>
                                    <p>logo</p>
                                    {restaurante.logo}
                                </Grid>

                            </Grid>
                            <Grid
                                container
                                justifyContent="center"
                                alignItems="center"
                            >
                                <ButtonModal  color="success" onClick={handleClose}>Continuar</ButtonModal>
                            </Grid>
                        </Box>
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </div>
    )

}
