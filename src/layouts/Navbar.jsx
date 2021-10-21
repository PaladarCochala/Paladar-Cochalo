<<<<<<< HEAD
import { Link } from 'react-router-dom';
//import * as React from 'react';
=======
import { Link, useHistory} from 'react-router-dom';
import React, { useEffect, useState } from 'react';
>>>>>>> Añadido el buscador-Se fixearon errores menores
import { styled, alpha } from '@mui/material/styles';
import { AppBar, Toolbar, Button, Grid, makeStyles, IconButton } from '@material-ui/core';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import FoodBankIcon from '@mui/icons-material/FoodBank';

import React, { useState } from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from './SidebarData';
import '../Styles/Navbar.css';
import { IconContext } from 'react-icons';
import CardUser from '../components/Restaurante/Common/CardUser'
import Box from '@mui/material/Box';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 1),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.55),
    },
    display: 'flex',
    alignItems: 'left',
    width: '70%',
     [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
    },
    marginLeft: 15,
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    color: 'black',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'black',
    paddingLeft: '4px',
    width: "100%",
    padding: theme.spacing(0.5, 1, 0.5, 0),
    marginLeft: '50px',

}));
export default function Navbar({ item }) {
<<<<<<< HEAD
    
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <IconContext.Provider value={{ color: '#fff' }}>
            <div className="navbar">
                <Link to="#" className="menu-bars">
                    <FaIcons.FaBars onClick={showSidebar} />
                
                </Link>
                <Search>
=======

    const [searched,setSearched] = useState("")
    const history = useHistory();
    const handleSearchImput = (event) => { 
        
        setSearched(event.target.value)
     }

    const handleEnterKey = (event) => {
        if (event.key === 'Enter') {
            history.push({pathname: "/restaurantes",state: {response: searched}})
            
        }}
    return (
        <Grid>
            <AppBar position="static" style={{ background: '#B82601', width: "100%" }}>
                <Toolbar style={{
                    padding: 0,
                    width: "100%",
                    textAlign: "center"
                }}>
                    <Grid style={{ width: "5%" }}>
                        <MenuIcon />
                    </Grid>
                    <Grid
                        style={{ width: "5%" }} >
                        <Button
                            component={Link}
                            to="/home">
                            <FoodBankIcon
                                size="large"
                                edge="start"
                                aria-label="open drawer"
                                style={{color: "white"}}
                            >
                            </FoodBankIcon>
                        </Button>
                    </Grid>
                    <Search>
>>>>>>> Añadido el buscador-Se fixearon errores menores
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Buscar un restaurante..."
                            inputProps={{ 'aria-label': 'search' }}
                            onChange={(e)=> {handleSearchImput(e)}}
                            onKeyPress={(e) => handleEnterKey(e)}
                        />
                </Search>
                <Grid>
                    <Box component="span" sx={{ display: { xs: 'none', lg: 'block', xl: 'block'} }}>
                        <button className="btnLog">Iniciar Sesion</button>
                        <button className="btnLog">Registrate</button>
                    </Box>
                </Grid>
            </div>
            
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <CardUser/>
                    <li className='navbar-toggle'></li>
                    
                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                            <Link to={item.path}>
                                {item.icon}
                                <span className = "ml16">{item.title}</span>
                            </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </IconContext.Provider>
    );
}