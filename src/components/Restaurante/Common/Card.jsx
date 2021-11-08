import React from 'react';
import { Grid, Typography, Card, ButtonGroup, Button, CardMedia, CardContent, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        justify: "center",
        marginRight: '5vw',
        marginLeft: '5vw',
        width: '90vw',
    },
    card: {
        color: theme.palette.primary.main,
        width: '50%',
        marginTop: 50,
    },
    media: {
        height: '25vw',
        width: '25vw'
    },
    containerCard: {
        marginTop: 20,
    },
    description: {
        fontSize: 25,
    },
    price: {
        fontSize: 30,
        color: theme.palette.secondary.dark
    },
    disabledButton: {
        background: theme.palette.primary.dark,
    },
    button: {
        color: theme.palette.text.primary,
        background: theme.palette.secondary.main,
        '&:hover': {
            backgroundColor: theme.palette.secondary.dark,
            color: theme.palette.text.primary,
        },
    }
}));

export default function CardRestaurante({ restaurante }) {
    const classes = useStyles();
    return (
        <>
            <Grid
                className={classes.root}
                container
            >
                <Grid
                    align="center"
                    item xs={12} sm={12}
                >
                    <Card
                        className={classes.card}
                    >
                        <CardContent>
                            <Grid
                                xs={12} sm={12}>
                                <Typography
                                    className={classes.description}
                                    variant="h4"
                                    align="center"
                                >
                                    BRO
                                </Typography>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>

            </Grid>
        </>
    );
}
