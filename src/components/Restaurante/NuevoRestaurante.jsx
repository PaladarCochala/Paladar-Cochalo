import React, { useState } from 'react';
import { Grid, TextField, Button, Card, CardContent, Typography, Divider } from '@material-ui/core';
import { crearRestaurante } from '../../services/restaurante';
import { makeStyles } from "@material-ui/styles";

export default function Formulario(){
  const [habilitado, setHabilitado] = useState(false)
  const [nombre, setNombre] = useState("");
  const [ubicacion, setUbicacion] = useState("");
  const [estaActivo, setEstaActivo] = useState(true);
  const [promedioSabor, setPromedioSabor] = useState(0.0);
  const [promedioServicio, setPromedioServicio] = useState(0.0);
  const [urlLogo, setUrlLogo] = useState(null);

  const [validacionNombre, setValidacionNombre] = useState(false)
  const [validacionUbicacion, setValidacionUbicacion] = useState(false)

  const handleInputChange = (e, nombreTipo) => {
    switch (nombreTipo) {
      case "nombre":
        setNombre(e.target.value)
        if (e.target.value !== 0)
        setValidacionNombre(true)
        break;
      case "ubicacion":
        setUbicacion(e.target.value)
        if (e.target.value !== 0)
        setValidacionUbicacion(true)
        break;
    }
    if (validacionNombre &&
      validacionUbicacion) {
      setHabilitado(true);
  }
  }

  function resetValores(){
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
    console.log(nombre)
    console.log(ubicacion)
    crearRestaurante({
      nombre: nombre,
      ubicacion: ubicacion,
      promedioSabor: promedioSabor,
      promedioServicio: promedioServicio,
      urlLogo: urlLogo,
      estaActivo: estaActivo
    })
        .then((x) => {
            return x.data;
        })
  }
  
  const useStyles = makeStyles({
    container: {
      height: "400px"
    },
    item: {
      flex: 1
    },
    title: {
      color: "#d50000",
    backgroundColor: "white",
    padding: "25px",
    fontSize: 30,
    fontFamily: "Apple Color Emoji"
    }
  });

  const classes = useStyles();
  return (
      
    <Grid spacing={4}>
    <Typography className={classes.title} variante='h1'>Formulario - Restaurante</Typography>
    <Divider />
      <form>
      <Grid spacing={4} className={classes.container} container>
        <Grid  align="center" item xs={12} sm={12} >
          <Grid spacing={4} direction="column" className={classes.container} container>
            <Grid className={classes.item} item>
              <Card style={{ maxWidth: 500, padding: "25px 25px", margin: "0 auto", marginTop: "100px", marginRight: "50px", border:"dark" }}> 
                <CardContent>
                  <img src="https://static.thenounproject.com/png/187803-200.png" alt="new"/>
                </CardContent>
              </Card>
            </Grid>

            <Grid className={classes.item} item>
              <Card style={{ maxWidth: 700, padding: "54px 5px", margin: "0 auto", marginTop: "100px" }}>
                <CardContent>
                    <Grid container spacing={1}>
                      
                        <TextField label="Nombre" placeholder="Ingrese el nombre del restaurante" variant="outlined" fullWidth required
                        InputLabelProps={{ style: { fontFamily: 'Arial', color: 'black' }}} inputProps={{ style: { fontFamily: 'Arial', color: 'black'}}}
                        value={nombre}
                        onChange={(e) => {
                          handleInputChange(e,"nombre")
                        }}/>
                        <TextField label="Dirección" placeholder="Ingrese la dirección" variant="outlined" fullWidth required
                         InputLabelProps={{ style: { fontFamily: 'Arial', color: 'black' }}} inputProps={{ style: { fontFamily: 'Arial', color: 'black'}}}
                        value={ubicacion}
                        onChange={(e) => {
                          handleInputChange(e,"ubicacion")
                        }}/>
                      <Grid item xs={12}>
                        <Button type="submit" variant="contained" color="primary" fullWidth
                                disabled={!habilitado}
                                onClick={() => {
                                  crearNuevoRestaurante();
                                  resetValores()}}>Registrar</Button>
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
     );
 }