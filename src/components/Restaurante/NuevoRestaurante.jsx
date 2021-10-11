import React, {Fragment, useState} from 'react';
import { Grid, TextField, Button, Card, CardContent, Typography } from '@material-ui/core';


export default function Formulario(){
    return (
        <Grid>
        <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
          <CardContent>
            <form>
              <Grid container spacing={1}>
                <Grid xs={12} sm={6} item>
                  <TextField placeholder="Ingrese el nombre del restaurante" label="Nombre" variant="outlined" fullWidth required />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField placeholder="Ingrese la dirección" label="Dirección" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField type="number" placeholder="Promedio Sabor" label="Promedio Sabor" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField type="number" placeholder="Promedio Servicio" label="Promedio Servicio" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" color="primary" fullWidth>Registrar</Button>
                </Grid>

              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>

    );
}