import React, { useEffect, useState } from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import Info from './Common/Info';

//
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography'

// Form 
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

// Services
import { getRestaurantesById } from '../../services/restaurante';
import { postComentario } from '../../services/comentario';
// Styles
import '../../Styles/Comentarios.css'

export default function SingleRestaurante(props) {

    const [restaurante, setRestaurante] = useState(null);
    const [comentarios, setComentario] = useState(null);
    const [loading, setLoading] = useState(true);

    // Vars Comments
    const [nuevoComentario, setNuevoComentario] = useState("");
    const [nombre, setNombre] = useState("");

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
                setComentario(response.response.comentarios);
                setLoading(false);
            });
    }

    const handleChange = (prop) => (event) => {
        prop === 'nombre' ? setNombre(event.target.value) : setNuevoComentario(event.target.value);
    };

    function crearComentario() {
        postComentario({
            descripcion: nuevoComentario,
            RestauranteId: props.match.params.id
        })
            .then((x) => {
                return x.data;
            })
            .then((x) => {
                return x.result;
            })
            .then((x) => {
                return getDataRestaurante(props.match.params.id);
            });
    }

    return (
        <>
            < Grid container className={'root'} >
                {!loading ?
                    <>
                        <Info restaurante={restaurante} />
                    </>
                    :
                    <Grid align="center" item xs={12} sm={12}>
                        <CircularProgress />
                    </Grid>
                }

                <div className={'container'}>
                    <Typography style={{ margin: '0.5rem' }} variant="h5" gutterBottom component="div">
                        COMENTARIOS
                    </Typography>
                    <Grid container >

                        <FormControl className={'input'} sx={{ width: '98%' }}>
                            <InputLabel htmlFor="nuevo-comentario">Comentario</InputLabel>
                            <OutlinedInput
                                id="nuevo-comentario"
                                value={nuevoComentario}
                                onChange={handleChange('comentario')}
                                placeholder="Escribe un comentario"
                                label="Comentario"
                            />
                        </FormControl>

                        <Button onClick={() => { crearComentario() }} className={'button'}>
                            Comentar
                        </Button>
                    </Grid>

                    <Divider style={{ margin: '1rem' }} />

                    {!loading ? comentarios.map(comentario => (
                        <div>
                            <div className={'comentario'}>
                                <Typography variant="h5" gutterBottom component="div">
                                    {comentario.descripcion}
                                </Typography>
                            </div>
                        </div>
                    )) : null}

                </div>
            </Grid>
        </>
    );
}