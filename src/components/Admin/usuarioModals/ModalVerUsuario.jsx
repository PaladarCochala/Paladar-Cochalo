import React from "react";

import Button from "@mui/material/Button";
import ButtonModal from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ModalVerUsuario({ usuario }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
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
          handleClickOpen();
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
        <DialogTitle align="center">{usuario.nickname}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <Box
              sx={{
                width: 500,
                height: 400,
              }}
            >
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <p>foto de perfil</p>
                  {usuario.urlImagenPerfil}
                </Grid>
                <Grid item xs={6}>
                  <b>Nombre:</b>
                  <p>{usuario.nombre}</p>
                  <b>Email:</b>
                  <p>{usuario.email}</p>
                  <b>Comentarios realizados:</b>
                  <p>{usuario.contadorComentario}</p>
                  <b>Es Administrador:</b>
                  <p>{usuario.esAdmin.toString()}</p>
                  <b>Esta Activo:</b>
                  <p>{usuario.estaActivo.toString()}</p>
                </Grid>
              </Grid>
              <Grid container justifyContent="center" alignItems="center">
                <ButtonModal color="success" onClick={handleClose}>
                  Continuar
                </ButtonModal>
              </Grid>
            </Box>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
