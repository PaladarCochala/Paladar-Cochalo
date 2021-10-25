import React, { useEffect, useState } from 'react';
import { getRestaurantes } from '../../services/restaurante';
import { Grid, makeStyles } from '@material-ui/core';
import RestaurantCard from '../Restaurante/Common/RestaurantCard';
import ReactPaginate from "react-paginate";
import "./css/Restaurante.css";


const useStyles = makeStyles((theme) => ({
    container: {
        background: theme.palette.primary.main,
    },
    loader: {
        color: theme.palette.secondary.main,
        marginTop: '33vh',
        marginBottom: '34vh',
    }
}));

export default function Restaurantes(props) {

    const classes = useStyles();

    const [restaurantes, setRestaurantes] = useState([]);

    const [pageNumber, setPageNumber] = useState(0);
    const restaurantesPerPage = 5;
    const pagesVisited = pageNumber * restaurantesPerPage;

    useEffect(() => {
        getDataRestaurantes();
    }, [props]);
/*
    function filterByValue(array) {
        return array.filter(o => o['nombre'].toLowerCase().includes(props.location.state.response.toLowerCase()));
    }
*/
    function getDataRestaurantes() {
        getRestaurantes()
            .then((response) => {
                return response.data;
            })
            .then((response) => {
                console.log(response.response)
                //setRestaurantes(filterByValue(response.response));
                setRestaurantes(response.response);
            })
    }


    //LISTADO RESTAURANTES
    const displayRestaurantes = restaurantes
        .slice(pagesVisited, pagesVisited + restaurantesPerPage)
        .map((restaurante) => {
            return(
            <>
                <Grid
                    align="center"
                    key={restaurante.id}
                    >
                    <RestaurantCard restaurante={restaurante}/>
                </Grid>
            </>
            );
        });
    const pageCount = Math.ceil(restaurantes.length / restaurantesPerPage);
    const changePage = ({ selected }) => {setPageNumber(selected);};
    
    //PAGINACIÓN
    return(
    <Grid container>
        {displayRestaurantes}
        <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationBttns"}
            previousLinkClassName={"previousBttn"}
            nextLinkClassName={"nextBttn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
        />
    </Grid>
    ) 
}
