import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles((theme) => ({
    container: {
        marginTop: 50,
        textAlign: 'center'
    },
    table: {
        marginTop: 50,
        width: '60vw'
    },
    text: {
        fontSize:18
    },
    row: {
        //background: theme.palette.primary.dark
    },
}));

export default function TablaRestaurantes({ restaurante }) {
    const classes = useStyles();

    return (
        <>
            <Grid
                align="center"
                item xs={12} sm={12}
            >
                <TableContainer >
                    <Table className={classes.table} aria-label="simple table">
                        <TableBody>

                            {restaurante.nombre ?
                                <TableRow className={classes.row} key='size'>
                                    <TableCell align="left" component="th" scope="row" className={classes.text}  >Nombre</TableCell>
                                    <TableCell align="left" className={classes.text} color={"00000"}>{restaurante.nombre}</TableCell>
                                </TableRow>
                                : null
                            }

                            {restaurante.ubicacion ?
                                <TableRow className={classes.row} key='weight'>
                                    <TableCell align="left" className={classes.text} >ubicacion</TableCell>
                                    <TableCell align="left" className={classes.text} >{restaurante.ubicacion}</TableCell>
                                </TableRow>
                                : null
                            }

                            {restaurante.promedioSabor ?
                                <TableRow className={classes.row} key='colors'>
                                    <TableCell align="left" component="th" scope="row" className={classes.text} >Promedio Sabor</TableCell>
                                    <TableCell align="left" className={classes.text} >{restaurante.promedioSabor}</TableCell>
                                </TableRow>
                                : null
                            }

                            {restaurante.promedioServicio ?
                                <TableRow className={classes.row} key='controls'>
                                    <TableCell align="left" component="th" scope="row" className={classes.text} >Promedio Servicio</TableCell>
                                    <TableCell align="left" className={classes.text} >{restaurante.promedioServicio}</TableCell>
                                </TableRow>
                                : null
                            }

                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </>
    );

}