import React from 'react';
import { Grid, Typography, Divider, makeStyles } from '@material-ui/core';
import Table from './Tabla';


export default function Informacion({ restaurante }) {


    return (
        <>
            
                <Grid item xs={12} sm={12}>
                    <Typography variante='h1'>
                        Informacion
                    </Typography>
                    <Divider />
                </Grid>

            <Table restaurante={restaurante}></Table>
        </>
    );
}