import React from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  Slide,
  TextField,
  Typography,
  IconButton,
  Slider,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { postUsuario } from "../../../services/usuario";
import { styled } from "@mui/material/styles";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const myStyle = {
  color: "#212121",
  backgroundColor: "white",
  padding: "5px",
  fontFamily: "inherit",
  fontSize: 35,
  fontWeight: "bold",
  textAlign: "center",
};

const Input = styled("input")({
  display: "none",
});

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ModalCrearUsuario({ update }) {
  const [email, setEmail] = React.useState("");
  const [nombre, setNombre] = React.useState("");
  const [nickname, setNickname] = React.useState("");
  const [contrasenia, setContrasenia] = React.useState("");

  const [contadorComentario, setContadorComentario] = React.useState(0);
  const [urlImagenPerfil, setUrlImagenPerfil] = React.useState("");
  const [esAdmin, setEsAdmin] = React.useState(false);
  const [estaActivo, setEstaActivo] = React.useState(false);

  const [validacionNombre, setValidacionNombre] = React.useState(false);

  const [value, setValue] = React.useState("female");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleInputChange = (e, nombreTipo) => {
    switch (nombreTipo) {
      case "nombre":
        setNombre(e.target.value);
        if (e.target.value !== 0) setValidacionNombre(true);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      case "nickname":
        setNickname(e.target.value);
        break;
      case "contrasenia":
        setContrasenia(e.target.value);
        break;
      case "esAdmin":
        setEsAdmin(e.target.value);
        break;
      case "estaActivo":
        setEstaActivo(e.target.value);
        break;
    }
  };

  function resetValores() {
    setNombre("");
    setEmail("");
    setNickname("");
    setContrasenia("");
    setEsAdmin("");
    setEstaActivo("");
  }

  function crearNuevoUsuario() {
     postUsuario({
      nombre: nombre,
      nickname: nickname,
      email: email,
      contrasenia: contrasenia,
      contadorComentario: contadorComentario,
      urlImagenPerfil: urlImagenPerfil,
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

  const useStyles = makeStyles({
    container: {
      height: "425px",
    },
    item: {
      flex: 1,
    },
    title: {
      color: "#d50000",
      backgroundColor: "white",
      padding: "25px",
      fontSize: 30,
      fontFamily: "Apple Color Emoji",
    },
  });

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
 
  return (
    <div>
      <Grid align="right" style={{ marginLeft: 75 }}>
        <Button
          variant="contained"
          color="primary"
          size="small"
          onClick={() => {
            handleClickOpen();
          }}
        >
          Crear Usuario
        </Button>
      </Grid>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        fullWidth="true"
        maxWidth="xl"
      >
        <DialogTitle align="center">
          <Typography style={myStyle} variante="h1">
            Formulario - Nuevo Usuario
          </Typography>
        </DialogTitle>
        <Divider></Divider>

        <DialogContent>
          <Grid spacing={4}>
            <form>
              <Grid className={classes.container} container>
                <Grid align="center" item xs={12} sm={12} item>
                  <Grid
                    direction="column"
                    className={classes.container}
                    container
                  >
                    <Grid item xs={12} sm={12}>
                      <Grid container spacing={1}>
                        <Grid
                          container
                          justifyContent="center"
                          alignItems="center"
                          sx={{ p: 1, m: 1 }}
                        >
                          <TextField
                            label="Nickname"
                            placeholder="Ingrese el nickname del usuario"
                            variant="outlined"
                            fullWidth
                            required
                            InputLabelProps={{
                              style: {
                                fontFamily: "Arial",
                                color: "black",
                              },
                            }}
                            inputProps={{
                              style: {
                                fontFamily: "Arial",
                                color: "black",
                              },
                            }}
                            value={nickname}
                            onChange={(e) => {
                              handleInputChange(e, "nickname");
                            }}
                          />
                        </Grid>

                        <Grid
                          container
                          justifyContent="center"
                          alignItems="center"
                          sx={{ p: 1, m: 1 }}
                        >
                          <TextField
                            label="Nombre"
                            placeholder="Ingrese el nombre completo"
                            variant="outlined"
                            fullWidth
                            required
                            InputLabelProps={{
                              style: {
                                fontFamily: "Arial",
                                color: "black",
                              },
                            }}
                            inputProps={{
                              style: {
                                fontFamily: "Arial",
                                color: "black",
                              },
                            }}
                            value={nombre}
                            onChange={(e) => {
                              handleInputChange(e, "nombre");
                            }}
                          />
                        </Grid>

                        <Grid
                          container
                          justifyContent="center"
                          alignItems="center"
                          sx={{ p: 1, m: 1 }}
                        >
                          <TextField
                            label="Email"
                            placeholder="usuario@ejemplo.com"
                            variant="outlined"
                            fullWidth
                            required
                            InputLabelProps={{
                              style: {
                                fontFamily: "Arial",
                                color: "black",
                              },
                            }}
                            inputProps={{
                              style: {
                                fontFamily: "Arial",
                                color: "black",
                              },
                            }}
                            value={email}
                            onChange={(e) => {
                              handleInputChange(e, "email");
                            }}
                          />
                        </Grid>

                        <Grid
                          container
                          justifyContent="center"
                          alignItems="center"
                          sx={{ p: 1, m: 1 }}
                        >
                          <TextField
                            id="outlined-password-input"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            placeholder="****************"
                            variant="outlined"
                            fullWidth
                            required
                            InputLabelProps={{
                              style: {
                                fontFamily: "Arial",
                                color: "black",
                              },
                            }}
                            inputProps={{
                              style: {
                                fontFamily: "Arial",
                                color: "black",
                              },
                            }}
                            value={contrasenia}
                            onChange={(e) => {
                              handleInputChange(e, "contrasenia");
                            }}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <Grid container spacing={1}>
                            <Grid
                              container
                              justifyContent="center"
                              alignItems="center"
                              sx={{ p: 1, m: 1 }}
                            >
                              <FormControl component="fieldset">
                                <FormLabel component="legend">
                                  Administrador
                                </FormLabel>
                                <RadioGroup
                                  aria-label="gender"
                                  name="controlled-radio-buttons-group"
                                  /* value={value}
                                  onChange={handleChange} */
                                  value={esAdmin}
                                  onChange={(e) => {
                                    handleInputChange(e, "esAdmin");
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
                        <Grid item xs={12} sm={6}>
                          <Grid container spacing={1}>
                            <Grid
                              container
                              justifyContent="center"
                              alignItems="center"
                              sx={{ p: 1, m: 1 }}
                            >
                              <FormControl component="fieldset">
                                <FormLabel component="legend">Activo</FormLabel>
                                <RadioGroup
                                  aria-label="gender"
                                  name="controlled-radio-buttons-group"
                                  /* value={value}
                                  onChange={handleChange} */
                                  value={estaActivo}
                                  onChange={(e) => {
                                    handleInputChange(e, "estaActivo");
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
                        <Grid
                          container
                          justifyContent="center"
                          alignItems="center"
                          sx={{ p: 1, m: 1 }}
                        >
                          <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth
                            /* disabled={!habilitado} */
                            onClick={() => {
                              crearNuevoUsuario();
                            }}
                          >
                            Crear Usuario
                          </Button>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </DialogContent>
      </Dialog>
    </div>
  );
}
