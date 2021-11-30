import React from "react";
import {useState} from "react";
import { Button, Card, CardContent, CardMedia, Dialog, DialogContent, DialogTitle, Divider, Grid, Slide, TextField, Typography, IconButton, Slider } from '@mui/material';
import { makeStyles } from "@mui/styles";
import { crearRestaurante } from "../../../services/restaurante";
import { styled } from "@mui/material/styles";
import PhotoCamera from '@mui/icons-material/PhotoCamera';

const myStyle= {
  color: "#212121",
  backgroundColor: "white",
  padding: "5px",
  fontFamily: "inherit",
  fontSize: 35,
  fontWeight: 'bold',
  textAlign:"center"
}

const Input = styled('input')({
  display: 'none',
});



const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ModalCrear({ update }) {
  const [habilitado, setHabilitado] = React.useState(false);
  const [nombre, setNombre] = React.useState("");
  const [ubicacion, setUbicacion] = React.useState("");
  const [contacto, setContacto] = React.useState("");
  const [urlFacebook, setFacebook] = React.useState("");
  const [urlInstagram, setInstagram] = React.useState("");
  const [estaActivo, setEstaActivo] = React.useState(true);
  const [promedioSabor, setPromedioSabor] = React.useState(0.0);
  const [promedioServicio, setPromedioServicio] = React.useState(0.0);
  const [urlLogo, setUrlLogo] = React.useState("");
  const [rangoDePrecios, setRango] = React.useState("");
  const [descripcion, setDescripcion] = React.useState("");


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
      case "contacto":
        setContacto(e.target.value);
        break; 
      case "urlFacebook":
          setFacebook(e.target.value);
          break;
      case "urlInstagram":
        setInstagram(e.target.value);
        break;
      case "descripcion":
        setDescripcion(e.target.value);
        break;
    }
    if (validacionNombre && validacionUbicacion) {
      setHabilitado(true);
    }
  };

  function resetValores() {
    setNombre("");
    setUbicacion("");
    setContacto("");
    setFacebook("");
    setInstagram("");
    setPromedioSabor(0.0);
    setPromedioServicio(0.0);
    setUrlLogo(null);
    setEstaActivo(true);
    setValidacionNombre(false);
    setValidacionUbicacion(false);
    setSelectedImage(null);
  }

  function crearNuevoRestaurante() {
    console.log(nombre);
    console.log(ubicacion);
    console.log(contacto);
    //console.log(urlFacebook);
    //console.log(urlInstagram);
    //console.log(urlLogo);
    crearRestaurante({
      nombre: nombre,
      ubicacion: ubicacion,
      contacto: contacto,
      urlFacebook: urlFacebook,
      urlInstagram: urlInstagram,
      promedioSabor: promedioSabor,
      promedioServicio: promedioServicio,
      urlLogo: urlLogo,
      rangoDePrecios: rangoDePrecios,
      descripcion: descripcion,
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
      height: "600px",
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



  //Sección IMAGEN
  const [selectedImage, setSelectedImage] = useState();
   // Subir imagen
   const imageChange = async (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
      const file = e.target.files[0];
      const base64 = await convertBase64(file);
      setUrlLogo(String(base64));
      console.log(String(base64));
    }
  };
  // Eliminar imagen
  const removeSelectedImage = () => {
    setSelectedImage();
    setUrlLogo("");
  };
  //Seccion BASE64
  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  //Seccion SLIDER
  function valuetext(value) {
    return `${value} Bs.`;
  }
  const minDistance = 5;
  const [value1, setValue1] = React.useState([25, 50]);
  
  const handleChange1 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
      setRango(String(value1[0])+"bs. - "+String(value1[1])+"bs.");

      
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
      setRango(String(value1[0])+"bs. - "+String(value1[1])+"bs.");

    }
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
        maxWidth="xl"
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
                            {/*NO QUITAR EL LABEL, SIN EL, NO RECIBIRA NINGUNA IMAGEN */}
                            <label htmlFor="icon-button-file">
                              <Input accept="image/*" id="icon-button-file" type="file" onChange={imageChange}/>
                              <IconButton color="primary" aria-label="upload picture" component="span">
                                <PhotoCamera />
                              </IconButton>
                              <CardMedia>
                              {selectedImage && (
                                <div >
                                  <img
                                    src={urlLogo}
                                    alt="Thumb"
                                    style={{maxWidth: "100%", maxHeight: 320}}
                                  />
                                  <button onClick={removeSelectedImage}>
                                    Eliminar Imagen
                                  </button>
                                </div>
                              )}
                              </CardMedia>
                            </label>
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
                              <TextField
                                label="Contacto"
                                placeholder="Ingrese el contacto telefónico"
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
                                value={contacto}
                                onChange={(e) => {
                                  handleInputChange(e, "contacto");
                                }}
                              />
                            </Grid>


                            <Grid
                              container
                              justifyContent="center"
                              alignItems="center"
                              sx={{p: 1,m: 1,}}
                            >
                              <Typography id="input-slider" gutterBottom style={{fontFamily: "Arial",color: "black"}}>
                              Rango de precios (Bs.)
                              </Typography>

                              <Slider
                                getAriaLabel={() => 'Rango de Precios'}
                                value={value1}
                                onChange={handleChange1}
                                valueLabelDisplay="auto"
                                getAriaValueText={valuetext}
                                disableSwap
                              />
                              
                            </Grid>

                            <Grid 
                              container
                              justifyContent="center"
                              alignItems="center"
                              sx={{p: 1,m: 1,}}
                              >
                              <TextField
                                id="outlined-multiline-static"
                                fullWidth
                                label="Descripción"
                                multiline
                                rows={10}
                                value={descripcion}
                                onChange={(e) => {
                                  handleInputChange(e, "descripcion");
                                }}
                              />     
                            </Grid>

                            

                            <Grid
                              container
                              justifyContent="center"
                              alignItems="center"
                              sx={{p: 1,m: 1,}}
                            >

                              <Grid>
                                <TextField
                                  label="Facebook"
                                  placeholder="Ingrese el URL de la página"
                                  variant="outlined"
                                  size="small"
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
                                  value={urlFacebook}
                                  onChange={(e) => {
                                    handleInputChange(e, "urlFacebook");
                                  }}
                                />
                                <TextField
                                  label="Instagram"
                                  placeholder="Ingrese el URL de la página"
                                  variant="outlined"
                                  size="small"
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
                                  value={urlInstagram}
                                  onChange={(e) => {
                                    handleInputChange(e, "urlInstagram");
                                  }}
                                />
                              </Grid>
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
