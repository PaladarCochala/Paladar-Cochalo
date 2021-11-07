import React from "react";
import { Button, Card, CardContent, Dialog, DialogContent, DialogTitle, Divider, Grid, Paper, Slide, TextField, Typography } from '@mui/material';
import { makeStyles } from "@mui/styles";
import { crearRestaurante } from "../../../services/restaurante";
import { styled } from "@mui/material/styles";

const myStyle= {
  color: "#212121",
  backgroundColor: "white",
  padding: "5px",
  fontFamily: "Roboto",
  fontSize: 35,
  fontWeight: 'bold',
  textAlign:"center"
}

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const Item2 = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  backgroundColor: "#ffcdd2",
  marginRight: '5vw',
  marginLeft: '5vw',
  marginTop: '3vw',
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ModalCrear({ update }) {
  const [habilitado, setHabilitado] = React.useState(false);
  const [nombre, setNombre] = React.useState("");
  const [ubicacion, setUbicacion] = React.useState("");
  const [estaActivo, setEstaActivo] = React.useState(true);
  const [promedioSabor, setPromedioSabor] = React.useState(0.0);
  const [promedioServicio, setPromedioServicio] = React.useState(0.0);
  const [urlLogo, setUrlLogo] = React.useState(null);

  const [validacionNombre, setValidacionNombre] = React.useState(false);
  const [validacionUbicacion, setValidacionUbicacion] = React.useState(false);

  const handleInputChange = (e, nombreTipo) => {
    switch (nombreTipo) {
      case "nombre":
        setNombre(e.target.value);
        if (e.target.value !== 0) setValidacionNombre(true);
        break;
      case "ubicacion":
        setUbicacion(e.target.value);
        if (e.target.value !== 0) setValidacionUbicacion(true);
        break;
    }
    if (validacionNombre && validacionUbicacion) {
      setHabilitado(true);
    }
  };

  function resetValores() {
    setNombre("");
    setUbicacion("");
    setPromedioSabor(0.0);
    setPromedioServicio(0.0);
    setUrlLogo(null);
    setEstaActivo(true);

    setValidacionNombre(false);
    setValidacionUbicacion(false);
  }

  function crearNuevoRestaurante() {
    console.log(nombre);
    console.log(ubicacion);
    crearRestaurante({
      nombre: nombre,
      ubicacion: ubicacion,
      promedioSabor: promedioSabor,
      promedioServicio: promedioServicio,
      urlLogo: urlLogo,
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
      height: "400px",
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
      <Grid align="right"  style={{ marginLeft: 75 }}>
        <Button
          variant="contained"
          color="primary"
          size="small"
          onClick={() => {
            handleClickOpen();
          }}
        >
          Crear Restaurante
        </Button>
      </Grid>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        fullWidth="true"
        maxWidth="lg"
      >
        <DialogTitle align="center">
          <Typography style={myStyle} variante='h1'>
              Formulario - Nuevo Restaurante
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
                    <Grid item xs={12} sm={6} >
                        <Card
                            style={{
                              maxWidth: 500,
                              padding: "25px 25px",
                              margin: "0 auto",
                              marginTop: "50px",
                              marginLeft: "50px",
                              marginRight: "25px",
                              border: "dark",
                            }}
                          >
                            <CardContent>
                              <img
                                src="https://static.thenounproject.com/png/187803-200.png"
                                alt="new"
                              />
                            </CardContent>
                        </Card>
                    </Grid>

                    <Divider orientation="vertical" flexItem></Divider>

                    <Grid item xs={12} sm={6} >
                      <Card
                        style={{
                          maxWidth: 700,
                          padding: "54px 5px",
                          marginTop: "15px",
                          marginLeft: "50px",
                          marginRight: "25px",
                          border: "dark",
                        }}
                      >
                        <CardContent>
                          <Grid container spacing={1}>


                            <Grid
                              container
                              justifyContent="center"
                              alignItems="center"
                              sx={{p: 1,m: 1,}}
                            >
                              <TextField
                                label="Nombre"
                                placeholder="Ingrese el nombre del restaurante"
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
                              sx={{p: 1,m: 1,}}
                            >
                              <TextField
                                label="Dirección"
                                placeholder="Ingrese la dirección"
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
                                value={ubicacion}
                                onChange={(e) => {
                                  handleInputChange(e, "ubicacion");
                                }}
                              />
                            </Grid>


                            <Grid
                              container
                              justifyContent="center"
                              alignItems="center"
                              sx={{p: 1,m: 1,}}
                            >
                              <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                fullWidth
                                disabled={!habilitado}
                                onClick={() => {
                                  crearNuevoRestaurante();
                                }}
                              >
                                Registrar
                              </Button>
                            </Grid>


                          </Grid>
                        </CardContent>
                      </Card>
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
