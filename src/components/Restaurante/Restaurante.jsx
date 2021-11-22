import React, { useEffect, useState } from 'react';
import { Grid, CircularProgress, Divider, Typography, Rating, Box, OutlinedInput, Button, InputLabel, FormControl } from '@mui/material';
import Info from './Common/Info';
import { styled } from '@mui/material/styles';
import Comentario from './Comentario';
import { useHistory } from "react-router-dom";
//
import StarIcon from '@mui/icons-material/Star';
import DiningIcon from '@mui/icons-material/Dining';
import DiningOutlined from '@mui/icons-material/DiningOutlined';
import Snackbar from '@mui/material/Snackbar';
import Slide from '@mui/material/Slide';
import Alert from '@mui/material/Alert';
// Services
import { getRestaurantesById, getComentariosByRestaurantId } from '../../services/restaurante';
import { postComentario, getComentarioDeUsuario } from '../../services/comentario';
// Styles
import '../../Styles/Comentarios.css'

export default function SingleRestaurante(props) {

    const history = useHistory(); 
    const [restaurante, setRestaurante] = useState(null);
    const [comentarios, setComentarios] = useState([]);
    const [loading, setLoading] = useState(true);

    // Vars Comments
    const [nuevoComentario, setNuevoComentario] = useState("");
    const [email, setEmail] = useState("SenseKarma@gmail.com");
    const [fechaDePublicacion, setFechaDePublicacion] = useState("2021-10-31");
    const [valoracionSabor, setValoracionSabor] = useState(0.5);
    const [valoracionServicio, setValoracionServicio] = useState(3.0);
    const [transition, setTransition] = React.useState(undefined);
    const [state, setState] = React.useState({
      openSnakbar: false,
      vertical: 'bottom',
      horizontal: 'center',
    });
    const { vertical, horizontal, openSnakbar } = state;
    function TransitionDown(props) {
      return <Slide {...props} direction="up" />;
    }
    const handleClickOpenSnakbar = (Transition,newState) => {
        setTransition(() => Transition);
        setState({ openSnakbar: true, ...newState });
    };
  
    const handleCloseSnakbar = () => {
        setState({ ...state, openSnakbar: false });
        
        
    };
    //Rating Servicio
    const labels = {
        0.5: 'De muy mala calidad+', 1: 'De muy mala calidad',
        1.5: 'De mala calidad+', 2: 'De mala calidad',
        2.5: 'Aceptable', 3: 'Aceptable+ ',
        3.5: 'Agradable', 4: 'Agradable+',
        4.5: 'Excelente', 5: 'Excelente+',
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
        0.5: 'De muy mala calidad+', 1: 'De muy mala calidad',
        1.5: 'De mala calidad+', 2: 'De mala calidad',
        2.5: 'Aceptable', 3: 'Aceptable+ ',
        3.5: 'Agradable', 4: 'Agradable+',
        4.5: 'Excelente', 5: 'Excelente+',
    };
    const [valorS2, setValor2] = React.useState(2);
    const [hoverS2, setHover2] = React.useState(-1);


    useEffect(() => {
        getDataRestaurante(props.match.params.id);
        getDataComentarios(props.match.params.id)
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
                console.log(restaurante)
            });
    }
    function getDataComentarios(id) {
        getComentariosByRestaurantId(id)
            .then((response) => {
                return response.data
            })
            .then((response) => {
                setComentarios(response.response);
            })
    }

    const handleChange = (prop) => (event) => {
        prop === 'email' ? setEmail(event.target.value) : setNuevoComentario(event.target.value);
    };
    async function  validation() {
        var validar = await getComentarioDeUsuario(props.match.params.id, email)
        const dato = validar.data.estaComentadoElRestaurante
        console.log(validar.data.estaComentadoElRestaurante)
        return validar.data.estaComentadoElRestaurante
    }
    async function crearComentario() {
        const result = await validation()
        if(result) {
            handleClickOpenSnakbar( TransitionDown,{ vertical: 'bottom', horizontal: 'center' });
        }else{    
            postComentario({
                descripcion: nuevoComentario,
                fechaDePublicacion: fechaDePublicacion,
                valoracionSabor: valorS1,
                valoracionServicio: valorS2,
                emailUsuario: email,
                restauranteId: props.match.params.id,
                sesionIniciado: true
            })
                .then((x) => {
                    return x.data;
                })
                .then((x) => {
                    return x.result;
                })
                .then((x) => {
                    history.go(0);
                    return getDataRestaurante(props.match.params.id);
                });
        }
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

                        <FormControl className={'input'} sx={{ width: '98%'}}>
                            <InputLabel htmlFor="nuevo-comentario" style={{fontFamily:"san-serif"}}>Comentario</InputLabel>
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
                        <Snackbar
                            anchorOrigin={{ vertical, horizontal }}
                            open={openSnakbar}
                            autoHideDuration={1500}
                            onClose={handleCloseSnakbar}
                            TransitionComponent={transition}
                            key={transition ? transition.name : ''}
                        >
                            <Alert onClose={handleCloseSnakbar} severity="error" variant="filled">
                                Usted ya tiene un comentario en este restaurante
                            </Alert>
                        </Snackbar>
                        <Grid sx={{fontFamily:"sans-serif"}}>
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

                        <Grid sx={{fontFamily:"sans-serif"}}>
                            <StyledRating
                                name="rating sabor"
                                defaultValue={3}
                                getLabelText={(value) => `${value} Flatware${value !== 1 ? 's' : ''}`}
                                precision={0.5}
                                icon={<DiningIcon fontSize="inherit" />}
                                value={valorS2}
                                onChange={(event, newValue) => {
                                    setValor2(newValue);
                                }} onChangeActive={(event, newHover) => {
                                    setHover2(newHover);
                                }} emptyIcon={<DiningOutlined style={{ opacity: 0.55 }} fontSize="inherit" />}
                            />
                            {valorS2 !== null && (<Box sx={{ ml: 2 }} >{labels2[hoverS2 !== -1 ? hoverS2 : valorS2]}</Box>)}
                        </Grid>
                    </Grid>

                    
                    
                    {!loading ? comentarios.map(comentario => (
                        <Comentario comentario={comentario}></Comentario>
                        
                    )) : null}
                    
                </div>
            </Grid>
        </>
    );
}