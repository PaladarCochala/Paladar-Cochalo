import React, { useEffect, useState } from "react";
import { getRestaurantes } from "../../services/restaurante";
import RestaurantCard from "../Restaurante/Common/RestaurantCard";
import ReactPaginate from "react-paginate";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import "../../Styles/Paginacion.css";

import Pagination from "@mui/material/Pagination";

import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Restaurantes(props) {
  const [restaurantes, setRestaurantes] = useState([]);

  const [page, setPage] = useState(1);
  const restaurantesPerPage = 5;
  const pagesVisited = (page - 1) * restaurantesPerPage;

  useEffect(() => {
    getDataRestaurantes();
  }, [props]);

  function filterByValue(array) {
    return array.filter((o) =>
      o["nombre"]
        .toLowerCase()
        .includes(props.location.state.response.toLowerCase())
    );
  }

  function getDataRestaurantes() {
    getRestaurantes()
      .then((response) => {
        return response.data;
      })
      .then((response) => {
        console.log(response.response);
        setRestaurantes(filterByValue(response.response));
        //setRestaurantes(response.response);
      });
  }

  //LISTADO RESTAURANTES
  const displayRestaurantes = restaurantes
    .slice(pagesVisited, pagesVisited + restaurantesPerPage)
    .map((restaurante) => {
      return (
        <>
          <Grid item spacing={3} align="center" key={restaurante.id}>
            <RestaurantCard restaurante={restaurante} />
          </Grid>
        </>
      );
    });
  const pageCount = Math.ceil(restaurantes.length / restaurantesPerPage);

  //PAGINACIÓN
  return (
    <Paper
      sx={{
        p: 4,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Grid container justifyContent="center">
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {restaurantes .slice(pagesVisited, pagesVisited +
            restaurantesPerPage) .map((restaurante) => (
              <Grid item xs={6} sm={4} md={4} lg={3} xl={2} align="center" key={restaurante.id} >
                <RestaurantCard restaurante={restaurante} />
              </Grid>
             ))}
          </Grid>
        </Box>
        {/* {displayRestaurantes} */}
      </Grid>
      <Grid
        container
        justifyContent="center"
        sx={{
          mt: 4,
          display: "flex",
        }}
      >
        <Pagination
          count={pageCount}
          page={page}
          shape="rounded"
          variant="outlined"
          onChange={(event, value) => setPage(value)}
        />
      </Grid>
    </Paper>
  );
}
