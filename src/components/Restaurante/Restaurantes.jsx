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
                    <Card
                        style={{
                        color:"black"
                        }}
                        className={classes.card}>
                        <CardHeader
                            titleTypographyProps={{ variant: 'h4' }}
                            className={classes.cardHeader}
                            title={restaurante.nombre}
                            style={{
                                color:"black"
                            }}
                        // subheader="September 14, 2016"
                        />
                        <CardContent
                            className={classes.content}
                        >
                            <div
                                className={classes.text}
                            >
                                <Typography
                                    variant="p"
                                    align="center"
                                >
                                    {restaurante.ubicacion}
                                </Typography>
                            </div>
                        </CardContent>
                        <CardActions
                            className={classes.action}
                            disableSpacing
                        >
                            <Button
                                className={classes.button}
                                variant="contained"
                                exact 
                                component={Link}
                                to={`/restaurantes/${restaurante.id}`}
                            >
                                Leer Mas
                            </Button>

                        </CardActions>
                    </Card>
                    <Divider className={classes.dividerCard} />
                    <RestaurantCard restaurante={restaurante}/>
                </Grid>
            </>
        ))}
    </Grid>
    )
    
}
