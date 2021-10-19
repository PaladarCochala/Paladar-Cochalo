import React, { Component, useEffect } from 'react'

import Button from '@mui/material/Button';
import ButtonModal from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

import { deleteRestauranteById, getRestaurantesById } from '../../../services/restaurante';
import { removePropertiesDeep } from '@babel/types';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function ModalEliminar({ id, nombre, update }) {
    const [open, setOpen] = React.useState(false);


    const handleClickOpen = () => {
        console.log(nombre)
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    function deleteRestaurant(id) {
        setOpen(false);
        console.log("eliminado")
        deleteRestauranteById(id)
        .then((response) => {
            console.log(response.data)
            return response.data
        }).then((response) => {
            console.log(response.message)
            return response.message
        }).then(()=>{update()})
            
    }

    return (
        <div>
            <Button
                variant="contained"
                color="error"
                size="small"
                style={{ marginLeft: 16 }}
                onClick={() => {
                    //deleteRestauranteById(params.id)
                    handleClickOpen()
                }}
            >
                Borrar
            </Button>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{"¡ ALERTA !"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        ¿Desea eliminar {nombre} permanentemente?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <ButtonModal onClick={handleClose}>Rechazar</ButtonModal>
                    <ButtonModal onClick={() => { deleteRestaurant(id) }}>Aceptar</ButtonModal>
                </DialogActions>
            </Dialog>
        </div>
    )

}
