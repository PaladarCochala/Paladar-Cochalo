import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';


import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import Grid from '@mui/material/Grid';


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));
const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#ff6d75',
  },
  '& .MuiRating-iconHover': {
    color: '#ff3d47',
  },
});

export default function RestaurantCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="194"
        image="data:image/jpeg;base64,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"
        alt="Paella dish"
      />
      <CardHeader
        title="Chicken's Kingdom"
        align="center"
      />
      
      <CardContent>

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item md={4}>
            <Typography variant="body2" gutterBottom>
              Valoración:
            </Typography>
          </Grid>
          <Grid item md={8}>
        <StyledRating
          name="customized-restaurant"
          readOnly 
          defaultValue={3}
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
          <Rating name="customized-5" defaultValue={3} readOnly />
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
           125 comentarios
          </Typography>
          </Grid>
        </Grid>
        </Box>
            
        </CardContent>
    </Card>
  );
}
