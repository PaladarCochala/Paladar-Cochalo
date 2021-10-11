import { Link } from 'react-router-dom';
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import { AppBar, Toolbar, Button, Grid, makeStyles, IconButton } from '@material-ui/core';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import FoodBankIcon from '@mui/icons-material/FoodBank';


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
    /* [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
    }, */
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
                            to="/restaurantes">
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
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Buscar un restaurante..."
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                    <Button
                        variant="text"
                        size="small"
                        style={{
                            color: "white",
                            width: "10%"
                        }}
                    >Ingresar</Button>
                    <Button
                        variant="text"
                        size="small"
                        style={{
                            color: "white",
                            width: "10%"
                        }}
                    >Crear cuenta</Button>
                </Toolbar>
            </AppBar>
        </Grid>
    );
}