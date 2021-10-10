import React, { useEffect, useState } from 'react';
import { Grid, CircularProgress, makeStyles } from '@material-ui/core';
import { getRestaurantesById } from '../../services/restaurante';
import Info from './Common/Info';

import RestaurantCard from '../Restaurante/Common/RestaurantCard';

export default function SingleRestaurante(props) {

    const [restaurante, setRestaurante] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getDataRestaurante(props.match.params.id);
        window.scrollTo(0, 0);
    }, [props.match.params.id]);

    function getDataRestaurante(id) {
        getRestaurantesById(id)
            .then((response) => {
                return response.data;
            })
            .then((response) => {
                setRestaurante(response.response);
                setLoading(false);
            });
    }

    return (
        <>
        <Grid container>
        {!loading ?
            <>
                <Info restaurante={restaurante}/>
            </>
            :
            <Grid align="center" item xs={12} sm={12}>
                <CircularProgress/>
            </Grid>
        }
        </Grid>
    </>
    );
}