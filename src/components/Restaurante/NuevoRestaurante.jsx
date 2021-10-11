import React, {Fragment, useState} from 'react';
import { Grid, TextField, Button, Card, CardContent, Typography } from '@material-ui/core';
import { crearRestaurante } from '../../services/restaurante';

export default function Formulario(){
  const [habilitado, setHabilitado] = useState(false)
  const [nombre, setNombre] = useState("");
  const [ubicacion, setUbicacion] = useState("");
  const [promedioSabor, setPromedioSabor] = useState(0.0);
  const [promedioServicio, setPromedioServicio] = useState(0.0);
  const [logo, setLogo] = useState(null);

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
    setLogo(null);

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
      logo: logo
    })
        .then((x) => {
            return x.data;
        })
  }

    return (
        <Grid>
        <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
          <CardContent>
            <form>
              <Grid container spacing={1}>
                <Grid xs={12} sm={6} item>
                  <TextField label="Nombre" placeholder="Ingrese el nombre del restaurante" variant="outlined" fullWidth required
                  inputProps={{ style: { fontFamily: 'Arial', color: 'black'}}}
                  value={nombre}
                  onChange={(e) => {
                    handleInputChange(e,"nombre")
                  }}/>
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField label="Dirección" placeholder="Ingrese la dirección" variant="outlined" fullWidth required
                  inputProps={{ style: { fontFamily: 'Arial', color: 'black'}}}
                  value={ubicacion}
                  onChange={(e) => {
                    handleInputChange(e,"ubicacion")
                  }}/>
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" color="primary" fullWidth
                          disabled={!habilitado}
                          onClick={() => {
                            crearNuevoRestaurante();
                            resetValores()}}>Registrar</Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    );
}