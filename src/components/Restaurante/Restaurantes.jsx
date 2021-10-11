import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getRestaurantes } from '../../services/restaurante';
import { Grid, Typography, Divider, Card, CardHeader, Button, CardMedia, CardContent, CardActions, makeStyles } from '@material-ui/core';

import RestaurantCard from '../Restaurante/Common/RestaurantCard';

const useStyles = makeStyles((theme) => ({
    container: {
        background: theme.palette.primary.main,
    },
    loader: {
        color: theme.palette.secondary.main,
        marginTop: '33vh',
        marginBottom: '34vh',
    }
}));

export default function Restaurantes() {

    const classes = useStyles();

    const [restaurantes, setRestaurantes] = useState([]);

    useEffect(() => {
        getDataRestaurantes();
    }, []);

    function getDataRestaurantes() {
        getRestaurantes()
            .then((response) => {
                return response.data;
            })
            .then((response) => {
                console.log(response.response)
                setRestaurantes(response.response);
            })
    }

    return(
        <Grid
        container
    >
        {restaurantes.map(restaurante => (
            <>
                <Grid
                    align="center"
                   // item xs={12} sm={3}
                >
                    <RestaurantCard restaurante={restaurante}/>
                </Grid>
            </>
        ))}
    </Grid>
    )
    
}
