import React, { useEffect, useState } from "react";
import Carousel, { slidesToShowPlugin ,arrowsPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { obtenerUltimos5Restaurantes } from "../../services/restaurante";
import Banner from "../assets/mainBanner.jpg";
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa'
import Button from "@mui/material/Button"
import { styled, alpha  } from '@mui/material/styles';
import RestaurantCard from "../Restaurante/Common/RestaurantCard";
import Typography from "@mui/material/Typography";


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

      <div style={{ margin: "auto", width: "70%" }}>
        <Carousel
          plugins={[
            {
              resolve: arrowsPlugin,
              options: {
                arrowLeft: <Button> <FaArrowCircleLeft size="50" color="#C03228" /></Button>,
                arrowLeftDisabled:<Button> <FaArrowCircleLeft size="50" color="#C03228"/></Button>,
                arrowRight: <Button> <FaArrowCircleRight size="50" color="#C03228"/></Button>,
                arrowRightDisabled: <Button> <FaArrowCircleRight size="50" color="#C03228"/></Button>,
                addArrowClickHandler: true,
              }},
            
            'infinite',
            
            {
              resolve: slidesToShowPlugin,
              options: {
                numberOfSlides: 3,
              },
            },
          ]}
          slides={restaurantesRecientes}
        >

        </Carousel>

      </div>
    </div>
  );
}
