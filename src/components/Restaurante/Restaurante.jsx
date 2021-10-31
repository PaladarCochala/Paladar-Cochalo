import React, { useEffect, useState } from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import Info from './Common/Info';
import { styled } from '@mui/material/styles';

//
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography'
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import FlavorIcon from '@mui/icons-material/Flatware';
import DiningIcon from '@mui/icons-material/Dining';
import DiningOutlined from '@mui/icons-material/DiningOutlined';


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
    const [nombre, setNombre] = useState("UsuarioTest");
    const [fechaDePublicacion, setFechaDePublicacion] = useState("2021-10-31");

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
                console.log(response.response);
                setComentario(response.response.Comentarios);
                console.log(response.response.Comentarios);
                setLoading(false);
            });
    }

    const handleChange = (prop) => (event) => {
        prop === 'nombre' ? setNombre(event.target.value) : setNuevoComentario(event.target.value);
    };

    function crearComentario() {
        postComentario({
            descripcion: nuevoComentario,
            fechaDePublicacion: fechaDePublicacion,
            nombreUsuario: nombre,
            restauranteId: props.match.params.id
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


    
    //Rating Servicio
    const labels = {
        0.5: 'De muy mala calidad+',1: 'De muy mala calidad',
        1.5: 'De mala calidad+',2: 'De mala calidad',
        2.5: 'Aceptable',3: 'Aceptable+ ',
        3.5: 'Agradable',4: 'Agradable+',
        4.5: 'Excelente',5: 'Excelente+',
    };
    const [valorS1, setValor1] = React.useState(2);
    const [hoverS1, setHover1] = React.useState(-1);
    
    //Rating Sabor
    const StyledRating = styled(Rating)({
        '& .MuiRating-iconFilled': {
          color: '#ff6d75',
        },
        '& .MuiRating-iconHover': {
          color: '#ff3d47',
        },
      });
    const labels2 = {
        0.5: 'De muy mala calidad+',1: 'De muy mala calidad',
        1.5: 'De mala calidad+',2: 'De mala calidad',
        2.5: 'Aceptable',3: 'Aceptable+ ',
        3.5: 'Agradable',4: 'Agradable+',
        4.5: 'Excelente',5: 'Excelente+',
    };
    const [valorS2, setValor2] = React.useState(2);
    const [hoverS2, setHover2] = React.useState(-1);

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

                        <Grid>
                        <Rating
                            name="rating-servicio" value={valorS1} precision={0.5} onChange={(event, newValue) => {
                            console.log("Servicio " + newValue);
                            setValor1(newValue);
                            }} onChangeActive={(event, newHover) => {
                            setHover1(newHover);
                            }} 
                            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                            
                        />
                        {valorS1 !== null && (<Box sx={{ ml: 2 }}>{labels[hoverS1 !== -1 ? hoverS1 : valorS1]}</Box>)}
                        </Grid>
                        
                        <Grid >
                        <StyledRating
                            name="rating sabor"
                            defaultValue={3}
                            getLabelText={(value) => `${value} Flatware${value !== 1 ? 's' : ''}`}
                            precision={0.5}
                            icon={<DiningIcon fontSize="inherit" />}
                            value={valorS2}
                            onChange={(event, newValue) => {
                                console.log("Sabor " + newValue);
                                setValor2(newValue);
                                }} onChangeActive={(event, newHover) => {
                                setHover2(newHover);
                                }} emptyIcon={<DiningOutlined style={{ opacity: 0.55 }} fontSize="inherit" />}   
                        />
                        {valorS2 !== null && (<Box sx={{ ml: 2 }} >{labels2[hoverS2 !== -1 ? hoverS2 : valorS2]}</Box>)}
                        </Grid>
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