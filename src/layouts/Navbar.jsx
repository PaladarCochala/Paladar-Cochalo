import { Link, useHistory } from 'react-router-dom';
import { styled, alpha } from '@mui/material/styles';
import { Button, Grid } from '@material-ui/core';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import FoodBankIcon from '@mui/icons-material/FoodBank';
import React, { useState } from 'react'
import * as FaIcons from "react-icons/fa";
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
    const [searched, setSearched] = useState("")
    const history = useHistory();
    const handleSearchImput = (event) => {

        setSearched(event.target.value)
    }

    const handleEnterKey = (event) => {
        if (event.key === 'Enter') {
            history.push({ pathname: "/restaurantes", state: { response: searched } })

        }
    }

    return (
        <IconContext.Provider value={{ color: '#fff' }} >
            <div className="navbar" >
            <FaIcons.FaBars onClick={showSidebar} style={{marginLeft: "15px"}}/>
               {/*  <Link to="home" className="menu-bars">
                </Link> */}
                <Button
                    component={Link}
                    to="/home">
                    <FoodBankIcon
                        size="large"
                        edge="start"
                        aria-label="open drawer"
                        style={{ color: "white" }}
                    >
                    </FoodBankIcon>
                </Button>
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Buscar un restaurante..."
                        inputProps={{ 'aria-label': 'search' }}
                        onChange={(e) => { handleSearchImput(e) }}
                        onKeyPress={(e) => handleEnterKey(e)}
                    />
                </Search>
                <Grid>
                    <Box component="span" sx={{ display: { xs: 'none', lg: 'block', xl: 'block' } }}>
                        <button className="btnLog">Iniciar Sesion</button>
                        <button className="btnLog">Registrate</button>
                    </Box>
                </Grid>
            </div>

            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <CardUser />
                    <li className='navbar-toggle'></li>

                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span className="ml16">{item.title}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </IconContext.Provider>
    );
}