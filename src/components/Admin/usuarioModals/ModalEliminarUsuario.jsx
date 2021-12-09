import React, { Component, useEffect } from 'react'

import Button from '@mui/material/Button';
import ButtonModal from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

import { deleteUsuariobyEmail} from '../../../services/usuario';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
export default function ModalEliminarUsuario({ email, nombre, update }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function deleteUsuario(email) {
    setOpen(false);
    deleteUsuariobyEmail(email)
      .then((response) => {
        return response.data;
      })
      .then((response) => {
        return response.message;
      })
      .then(() => {
        update();
      });
  }
  return (
    <div>
      <Button
        variant="contained"
        color="error"
        size="small"
        style={{ marginLeft: 16 }}
        onClick={() => {
          handleClickOpen();
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
            ¿Desea eliminar a {nombre} permanentemente?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <ButtonModal onClick={handleClose}>Rechazar</ButtonModal>
          <ButtonModal
            onClick={() => {
              deleteUsuario(email);
            }}
          >
            Aceptar
          </ButtonModal>
        </DialogActions>
      </Dialog>
    </div>
  );
}
