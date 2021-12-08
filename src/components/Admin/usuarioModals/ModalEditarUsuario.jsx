import React, { Component, useEffect, useState } from "react";

import Button from "@mui/material/Button";
import ButtonModal from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import { putUsuariobyEmail } from "../../../services/usuario";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ModalEditarUsuario({ usuario, update }) {
  const [open, setOpen] = React.useState(false);

  const [nombre, setNombre] = useState(usuario.nombre);
  const [nickname, setNickname] = useState(usuario.nickname);
  const [email, setEmail] = useState(usuario.email);
  const [esAdmin, setEsAdmin] = useState(usuario.esAdmin);
  const [estaActivo, setEstaActivo] = useState(usuario.estaActivo);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function editUsuario(email) {
    setOpen(false);
    putUsuariobyEmail(email, {
      nombre: nombre,
      nickname: nickname,
      email: email,
      esAdmin: esAdmin,
      estaActivo: estaActivo,
    })
      .then((x) => {
        return x.data;
      })
      .then(() => {
        update();
      });
  }

  return (
    <div>
      <Button
        variant="contained"
        color="success"
        size="small"
        style={{ marginLeft: 16 }}
        onClick={() => {
          handleClickOpen();
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
        <DialogTitle align="center">Editar Usuario</DialogTitle>
        <Divider></Divider>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <Box
              sx={{
                width: 550,
                height: 460,
              }}
            >
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <p>Cambiar imagen</p>
                  {usuario.logo}
                </Grid>
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
                      defaultValue={usuario.nombre}
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
                      label="Nickname:"
                      defaultValue={usuario.nickname}
                      onChange={(e) => setNickname(e.target.value)}
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
                      label="Email:"
                      defaultValue={usuario.email}
                      onChange={(e) => setEmail(e.target.value)}
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
                    <FormControl component="fieldset">
                      <FormLabel component="legend">Administrador</FormLabel>
                      <RadioGroup
                        row
                        aria-label="gender"
                        name="controlled-radio-buttons-group"
                        value={esAdmin}
                        onChange={(e) => {
                          setEsAdmin(e.target.value);
                        }}
                      >
                        <FormControlLabel
                          value={true}
                          control={<Radio />}
                          label="Sí"
                        />
                        <FormControlLabel
                          value={false}
                          control={<Radio />}
                          label="No"
                        />
                      </RadioGroup>
                    </FormControl>
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
                    <FormControl component="fieldset">
                      <FormLabel component="legend">Activo</FormLabel>
                      <RadioGroup
                        row
                        aria-label="gender"
                        name="controlled-radio-buttons-group"
                        value={estaActivo}
                        onChange={(e) => {
                          setEstaActivo(e.target.value);
                        }}
                      >
                        <FormControlLabel
                          value={true}
                          control={<Radio />}
                          label="Sí"
                        />
                        <FormControlLabel
                          value={false}
                          control={<Radio />}
                          label="No"
                        />
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                </Grid>
              </Grid>
              <Divider></Divider>
              <Grid container justifyContent="center" alignItems="center">
                <ButtonModal color="error" onClick={handleClose}>
                  Cancelar
                </ButtonModal>
                <ButtonModal
                  color="success"
                  onClick={() => {
                    editUsuario(usuario.email);
                  }}
                >
                  Guardar
                </ButtonModal>
              </Grid>
            </Box>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
