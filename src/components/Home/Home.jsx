import Header from "../../layouts/Header";
import React, { useEffect, useState } from "react";
import { Carousel } from "3d-react-carousal";
import Carrusel from "./Carousel/Carrusel";
import { obtenerUltimos5Restaurantes } from "../../services/restaurante";
import Banner from "../assets/mainBanner.jpg";
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

  return (
    <div>
      <img
        src={Banner}
        width="100%"
        height="auto"
        style={{
          border: " none",
        }}
      />

      {/* <div style={{ margin: "auto", width: "70%", padding: "5px" }}> */}
      <div>
       
        

        <Box
          sx={{
            backgroundColor: "black",
            p: 1,
          }}
          style={{
            border: "none",
          }}
        >
          <Typography
            variant="h3"
            component="div"
            align="center"
            color="white"
            sx={{padding:"5px"}}
          >
            Recientes
          </Typography>
          <Carousel slides={restaurantesRecientes} />
        </Box>
      </div>

      {/* </div> */}
    </div>
  );
}
