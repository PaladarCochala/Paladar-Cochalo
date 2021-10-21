import React, { useEffect, useState } from 'react';
import { getRestaurantes } from '../../services/restaurante';
import { Grid, makeStyles } from '@material-ui/core';
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

export default function Restaurantes(props) {

    const classes = useStyles();
    const [restaurantesBuscados, setRestaurantesBuscados] = useState([]);

    useEffect(() => {
        getDataRestaurantes();
    }, [props]);

    function getDataRestaurantes() {
        getRestaurantes()
            .then((response) => {
                return response.data;
            })
            .then((response) => {
                console.log(response.response)
                setRestaurantesBuscados(filterByValue(response.response));
            })
    }

    function filterByValue(array) {
        return array.filter(o => o['nombre'].toLowerCase().includes(props.location.state.response.toLowerCase()));
    }
    return (
        <Grid container>

            {restaurantesBuscados.map(restaurante => (
                <>
                    <Grid
                        align="center"
                        key={restaurante.id}
                    // item xs={12} sm={3}
                    >
                        <RestaurantCard restaurante={restaurante} />
                    </Grid>
                </>
            ))}
        </Grid>
    )

}
