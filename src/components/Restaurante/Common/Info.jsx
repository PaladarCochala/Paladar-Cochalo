import React from 'react';
import { Grid, Typography, Divider, makeStyles } from '@material-ui/core';
import Table from './Tabla';


export default function Informacion({ restaurante }) {

const myStyle= {
    color: "#B8161F",
    backgroundColor: "white",
    padding: "25px",
    fontFamily: "Sans-Serif"
}

    return (
        <>
            
                <Grid item xs={12} sm={12}>
                    <Typography style={myStyle} variante='h1'>
                        Informacion
                    </Typography>
                    <Divider />
                </Grid>

            <Table restaurante={restaurante}></Table>
        </>
    );
}