import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import Grid from '@mui/material/Grid';

import { Link } from 'react-router-dom';
import { CardActionArea } from '@mui/material';

const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#ff6d75',
  },
  '& .MuiRating-iconHover': {
    color: '#ff3d47',
  },
});

export default function RestaurantCard({ restaurante }) {

  return (
    <Card sx={{ maxWidth: 345 , border:" 3px outset"}}>
      <CardActionArea
      component={Link}
      to={`/restaurantes/${restaurante.id}`}>
        <CardMedia
          component="img"
          height="194"
          image={restaurante.urlLogo? restaurante.urlLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLJ7Dz7Li3ajen8vxSI96rSj61I2-_HBTYytK2e6kgwbGEEHd8ByXJUpnoqKU955Duhjk&usqp=CAU"}
          alt="Restaurante"
        />
        <Typography sx={{paddingTop: "5px" ,fontFamily:"inherit"}} variant="h5" component="div" align= "center" noWrap="true" >
            {restaurante.nombre} </Typography>

        <CardContent>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item md={4}>
                <Typography sx={{fontFamily:"inherit"}}variant="body2" gutterBottom>
                  Valoración:
                </Typography>
              </Grid>
              <Grid item md={8}>
                <StyledRating
                  name="customized-restaurant"
                  readOnly
                  defaultValue={restaurante.promedioSabor}
                  precision={0.5}
                  icon={<RestaurantIcon fontSize="inherit" />}
                  emptyIcon={<RestaurantIcon fontSize="inherit" />}
                />
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item md={4}>
                <Typography variant="subtitle2" gutterBottom component="div">
                  Servicio:
                </Typography>
              </Grid>
              <Grid item md={8}>
                <Rating name="customized-5" defaultValue={restaurante.promedioServicio} readOnly />
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item md={6}>
                <Typography variant="body2" gutterBottom color="#9e9e9e">
                  10.235 valoraciones
                </Typography>
              </Grid>
              <Grid item md={6}>
                <Typography variant="body2" gutterBottom color="#9e9e9e">
                 {restaurante.contadorDeComentarios}
                 {restaurante.contadorDeComentarios==1? " comentario" : " comentarios"} 
                </Typography>
              </Grid>
            </Grid>
          </Box>

        </CardContent>
      </CardActionArea>
    </Card>
  );
}
