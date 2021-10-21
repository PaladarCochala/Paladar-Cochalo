import { Link } from 'react-router-dom';
//import * as React from 'react';
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
    
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <IconContext.Provider value={{ color: '#fff' }}>
            <div className="navbar">
                <Link to="#" className="menu-bars">
                    <FaIcons.FaBars onClick={showSidebar} />
                
                </Link>
                <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Buscar un restaurante..."
                            inputProps={{ 'aria-label': 'search' }}
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