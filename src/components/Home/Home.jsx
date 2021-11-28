import React, { useEffect, useState } from "react";
import Carusel from "./Carusel";
import { obtenerUltimos5Restaurantes ,obtenerRestaurantesMasValoradosPorSabor,obtenerRestaurantesMasValoradosPorServicio} from "../../services/restaurante";
import Banner from "../assets/mainBanner.jpg";
import { styled, alpha  } from '@mui/material/styles';
import RestaurantCard from "../Restaurante/Common/RestaurantCard";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { VerticalAlignCenter } from "@mui/icons-material";

export default function MediaCard() {
  const [restaurantesRecientes, setRestaurantesRecientes] = useState([]);
  const [restaurantesMasValoradosPorServicio, setRestaurantesMasValoradosPorServicio] = useState([]);
  const [restaurantesMasValoradosPorSabor, setRestaurantesMasValoradosPorSabor] = useState([]);

  useEffect(() => {
    getRestaurantesNuevos();
    getRestaurantesMasValoradosPorServicio();
    getRestaurantesMasValoradosPorSabor();
  }, []);


  
  function getRestaurantesNuevos() {
    obtenerUltimos5Restaurantes()
      .then((response) => {
        return response.data;
      })
      .then((response) => {
        setRestaurantesRecientes(
          response.response.map((restaurante) => {
            return <RestaurantCard restaurante={restaurante} />;
          })
        );
      });
  }
  function getRestaurantesMasValoradosPorSabor() {
    obtenerRestaurantesMasValoradosPorSabor()
      .then((response) => {
        return response.data;
      })
      .then((response) => {
        setRestaurantesMasValoradosPorServicio(
          response.response.map((restaurante) => {
            return <RestaurantCard restaurante={restaurante} />;
          })
        );
      });
  }
  function getRestaurantesMasValoradosPorServicio() {
    obtenerRestaurantesMasValoradosPorServicio()
      .then((response) => {
        return response.data;
      })
      .then((response) => {
        setRestaurantesMasValoradosPorSabor(
          response.response.map((restaurante) => {
            return <RestaurantCard restaurante={restaurante} />;
          })
        );
      });
  }

  const Root = styled('div')(({ theme }) => ({
    padding: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      padding: "40px 20px 20px 90px",
    },
    [theme.breakpoints.between('sm', 'md')]: {
      padding: "40px 20px 20px 90px",
    },
    [theme.breakpoints.between('md', 'lg')]: {
      padding: "40px 20px 20px 150px",
    },
    [theme.breakpoints.between('lg', 'xl')]: {
      padding: "40px 20px 20px 200px",
    },
    [theme.breakpoints.up('xl')]: {
      padding: "40px 20px 20px 255px",
    },

  }));

  return (
    <div>
      <img
        src={Banner}
        width="100%"
        height="auto"
        style={{
          border: "5px none",
        }}
      />
      <Root>
        <div>

          <div style={{
            display: "inline-block",
            width: "30px",
            height: "10px",
            background: "#C03228"
          }}></div>
          <Typography
            variant="h4"
            component="div"
            color="black"
            sx={{ padding: "5px", display: "inline", verticalAlign: "middle" }}
          >
            RECIENTES
          </Typography>
        </div>
      </Root>
      <Carusel lista={restaurantesRecientes}> </Carusel>
      <Root>
        <div>

          <div style={{
            display: "inline-block",
            width: "30px",
            height: "10px",
            background: "#C03228"
          }}></div>
          <Typography
            variant="h4"
            component="div"
            color="black"
            sx={{ padding: "5px", display: "inline", verticalAlign: "middle" }}
          >
            VALORADOS POR SERVICIO
          </Typography>
        </div>
      </Root>
      <Carusel lista={restaurantesMasValoradosPorServicio}> </Carusel>
      <Root>
        <div>

          <div style={{
            display: "inline-block",
            width: "30px",
            height: "10px",
            background: "#C03228"
          }}></div>
          <Typography
            variant="h4"
            component="div"
            color="black"
            sx={{ padding: "5px", display: "inline", verticalAlign: "middle" }}
          >
            VALORADOS POR SABOR
          </Typography>
        </div>
      </Root>
      <Carusel lista={restaurantesMasValoradosPorSabor}> </Carusel>
      
    </div>
  );
}
