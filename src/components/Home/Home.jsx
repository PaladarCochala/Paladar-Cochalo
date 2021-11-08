import Header from "../../layouts/Header";
import React, { useEffect, useState } from "react";
import { Carousel } from "3d-react-carousal";
import Carrusel from "./Carousel/Carrusel";
import { obtenerUltimos5Restaurantes } from "../../services/restaurante";
import Banner from "../assets/mainBanner.jpg";
import { styled } from '@mui/material/styles';
import { Grid } from "@material-ui/core";
import RestaurantCard from "../Restaurante/Common/RestaurantCard";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { VerticalAlignCenter } from "@mui/icons-material";
export default function MediaCard() {
  const [restaurantesRecientes, setRestaurantesRecientes] = useState([]);
  useEffect(() => {
    getRestaurantesNuevos();
  }, []);

  function getRestaurantesNuevos() {
    obtenerUltimos5Restaurantes()
      .then((response) => {
        return response.data;
      })
      .then((response) => {
        console.log(response.response);
        setRestaurantesRecientes(
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
    [theme.breakpoints.between('sm','md')]: {
      padding: "40px 20px 20px 90px",
    },
    [theme.breakpoints.between('md','lg')]: {
      padding: "40px 20px 20px 150px",
    },
    [theme.breakpoints.between('lg','xl')]: {
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
          sx={{ padding: "5px" ,display: "inline",verticalAlign: "middle"}}
        >
          RECIENTES
        </Typography>
      </div>
      </Root>

      {/* <div style={{ margin: "auto", width: "70%", padding: "5px" }}> */}
      <div style={{ margin: "auto", width: "70%", border: "15px double"}}>
        <Box
          sx={{
            backgroundColor: "black",
            p: 1,
          }}
          style={{
            border: "none",
          }}
        >
          {/* <Typography
            variant="h3"
            component="div"
            align="center"
            color="white"
            sx={{padding:"5px"}}
          >
            Recientes
          </Typography> */}
          <Carousel slides={restaurantesRecientes} />
        </Box>
      </div>

      {/* </div> */}
    </div>
  );
}
