import React, { useEffect, useState } from "react";
import { getRestaurantes, getRestaurantesByEtiqueta } from "../../services/restaurante";
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
  const restaurantesPerPage = 8;
  const pagesVisited = (page - 1) * restaurantesPerPage;

  useEffect(() => {
    props.location.state.filter? getDataRestaurantesByEtiqueta():getDataRestaurantes();
  }, [props]);

  function filterByValue(array) {
    return array.filter((o) =>
      o["nombre"]
        .toLowerCase()
        .includes(props.location.state.buscador.toLowerCase())
    );
  }

  function getDataRestaurantes() {
    getRestaurantes()
      .then((response) => {
        return response.data;
      })
      .then((response) => {
        props.location.state.buscador? setRestaurantes(filterByValue(response.response)):setRestaurantes(response.response);
      });
  }
  function getDataRestaurantesByEtiqueta() {
    getRestaurantesByEtiqueta(props.location.state.filter)
      .then((response) => {
        return response.data;
      })
      .then((response) => {
        setRestaurantes(response.response);
      });
  }

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
