import React, { useEffect, useState } from 'react';
import { Grid, CircularProgress, makeStyles, Table, TableContainer, TableHead, TableCell, TableBody, TableRow, Modal, Button, TextField } from '@material-ui/core';
import { getRestaurantesById } from '../../services/restaurante';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import FilledInput from '@mui/material/FilledInput';
import Info from './Common/Info';
// Form Imports
import OutlinedInput from '@mui/material/OutlinedInput';

export default function SingleRestaurante(props) {

    const [restaurante, setRestaurante] = useState(null);
    const [comentarios, setComentario] = useState(null);
    const [loading, setLoading] = useState(true);

    // Vars Comments
    const [nuevoComentario, setNuevoComentario] = useState("");

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
                console.log(response.response.comentarios);
                setComentario(response.response.comentarios);
                console.log(comentarios)
                // console.log(comentarios)
                setLoading(false);
            });
    }

    return (
        <>
            <Grid container 
            //style={{ background: "aqua" }}
            >
                {!loading ?
                    <>
                        <Info restaurante={restaurante} />
                    </>
                    :
                    <Grid align="center" item xs={12} sm={12}>
                        <CircularProgress />
                    </Grid>
                }

                <Grid container 
                //style={{ background: "coral" }}
                >
                    <div style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}> 

                    <FormControl fullWidth sx={{ m: 1 }}>
                        <InputLabel htmlFor="nuevo-comentario">Comentario</InputLabel>
                        <OutlinedInput
                            id="nuevo-comentario"
                            value={nuevoComentario}
                            //onChange={handleChange('amount')}
                            placeholder="Escribe un comentario"
                            startAdornment={<InputAdornment position="start"></InputAdornment>}
                            label="Amount"
                        />
                    </FormControl>
                    </div>
                    {/* <FormControl fullWidth sx={{ m: 1 }} variant="filled">
            <TextField
                id="filled-multiline-static"
                label="Comentarios"
                multiline
                columns={10}
                rows={10}
                size="medium"
                defaultValue="Default Value"
            />
            </FormControl> */}
                    Hola Carlitossssssss

                </Grid>
            </Grid>
        </>
    );
}