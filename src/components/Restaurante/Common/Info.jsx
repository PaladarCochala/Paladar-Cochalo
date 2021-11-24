import React from "react";
import { styled } from "@mui/material/styles";
import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  Grid,
  Typography,
  Link,
  Paper,
  Rating,
  Card,
  CardMedia,
  CardActions,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import Stack from '@mui/material/Stack';

//Iconos
import Dining from "@mui/icons-material/Dining";
import DiningOutlined from "@mui/icons-material/DiningOutlined";
import Facebook from "@mui/icons-material/Facebook";
import Instagram from "@mui/icons-material/Instagram";

export default function Informacion({ restaurante }) {
  //Estilos
  const myStyle = {
    color: "#212121",
    backgroundColor: "white",
    padding: "25px",
    fontSize: 50,
    textAlign: "center",
  };
  const Item = styled(Box)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    marginRight: "5vw",
    marginLeft: "5vw",
  }));
  const Item2 = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
    textAlign: "center",
    marginRight: "3vw",
    marginLeft: "5vw",
    marginTop: "2vw",
    marginBottom: "3vw",
  }));
  const Item3 = styled(Box)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    //backgroundColor: "#ffcdd2",
    marginRight: "5vw",
    marginLeft: "5vw",
    marginTop: "2vw",
  }));

  return (
    <>
      {/*TITULO*/}
      <Grid item xs={12} sm={12}>
        <Typography style={myStyle} variante="h1">
          {restaurante.nombre}
        </Typography>
        <Divider />
      </Grid>

      {/*RATING*/}
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6}>
          <Item>
            <Typography component="legend" variant="h5" color="black">
              Sabor
            </Typography>
            <Rating
              style={{ color: "#ff6d75", fontSize: 50, textAlign: "left" }}
              name="customized-restaurant"
              readOnly
              defaultValue={restaurante.promedioSabor}
              precision={0.5}
              icon={<Dining fontSize="inherit" />}
              emptyIcon={
                <DiningOutlined style={{ fontSize: 50 }} fontSize="inherit" />
              }
            />
          </Item>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Item>
            <Typography component="legend" variant="h5" color="black">
              Servicio
            </Typography>
            <Rating
              name="customized-5"
              style={{ fontSize: 50 }}
              defaultValue={restaurante.promedioServicio}
              readOnly
            />
          </Item>
        </Grid>
      </Grid>

      {/*DETALLES RESTAURANTE*/}

      <Grid container spacing={1}>
        <Grid item xs={12} sm={6}>
          <Item2>
            <Card sx={{ display: "flex" }}>
              <CardMedia
                component="img"
                image="https://www.enter.co/wp-content/uploads/2017/02/menu-restaurant-vintage-tableFINAL-768x432.jpg"
              />
            </Card>
          </Item2>
        </Grid>

        <Grid
          item
          xs={12}
          sm={1}
          style={{ marginTop: "5vw", marginBottom: "5vw" }}
        >
          <Divider variant="middle" orientation="vertical" />
        </Grid>

        <Grid item xs={12} sm={5}>
          <Item3>
            <Card sx={{ display: "flex" }}>
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                  <Grid item xs={6} md={8}>
                    <Typography
                      type="body2"
                      style={{ color: "#212121", fontSize: 20 }}
                    >
                      DIRECCIÓN:
                    </Typography>
                  </Grid>
                  <Grid item xs={6} md={4}>
                    <Typography
                      type="body2"
                      style={{ color: "#212121", fontSize: 15 }}
                    >
                      {restaurante.ubicacion}
                    </Typography>
                  </Grid>

                  <Grid item xs={6} md={8}>
                    {/* <Item> */}
                    <Typography
                      type="body2"
                      style={{ color: "#212121", fontSize: 20 }}
                    >
                      RANGO DE PRECIOS:
                    </Typography>
                    {/* </Item> */}
                  </Grid>
                  <Grid item xs={6} md={4}>
                    {restaurante.rangoDePrecios}
                  </Grid>

                  <Grid item xs={6} md={8}>
                    {/* <Item> */}
                    <Typography
                      type="body2"
                      style={{ color: "#212121", fontSize: 20 }}
                    >
                      ETIQUETAS:
                    </Typography>
                    {/* </Item> */}
                  </Grid>
                  <Grid item xs={6} md={4}>
                    {restaurante.Etiquetas.map((etiqueta) => {
                      return (
                        <Typography
                          key={etiqueta.nombreEtiqueta}
                          /* value={etiqueta.nombreEtiqueta} */
                          type="body2"
                          style={{
                            color: "#212121",
                            fontSize: 15,
                            marginTop: "5px",
                          }}
                        >
                          {etiqueta.nombreEtiqueta}
                        </Typography>
                      );
                    })}
                  </Grid>

                  <Grid item xs={6} md={8}>
                    <Typography
                      type="body2"
                      style={{ color: "#212121", fontSize: 20 }}
                    >
                      CONTACTOS:
                    </Typography>
                  </Grid>
                  <Grid item xs={6} md={4}>
                    {restaurante.contacto}
                  </Grid>

                  <Grid item xs={12} md={12}>
                   
                    <CardActions disableSpacing>
                      <ButtonGroup
                        variant="outlined"
                        aria-label="outlined button group"
                      >
                        <Button
                          component={Link}
                          variant="text"
                          target="_blank"
                          id="FacebookButton"
                          href={restaurante.urlFacebook}
                        >
                          <Facebook />
                        </Button>
                        <Button
                          component={Link}
                          variant="text"
                          target="_blank"
                          id="InstagramButton"
                          href={restaurante.urlInstagram}
                          color="secondary"
                        >
                          <Instagram />
                        </Button>
                      </ButtonGroup>
                    </CardActions>
                  </Grid>
                </Grid>
              </Box>
            </Card>
          </Item3>
        </Grid>
      </Grid>
    </>
  );
}
