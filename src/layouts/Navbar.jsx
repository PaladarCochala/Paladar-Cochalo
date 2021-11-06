import InputBase from "@mui/material/InputBase";

import * as React from "react";
import { useState } from "react";
import { styled, useTheme, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";

import MailIcon from "@mui/icons-material/Mail";
import SearchIcon from "@mui/icons-material/Search";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import RestaurantMenuRoundedIcon from '@mui/icons-material/RestaurantMenuRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import RestaurantRoundedIcon from '@mui/icons-material/RestaurantRounded';
import ReportRoundedIcon from '@mui/icons-material/ReportRounded';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import AppRegistrationRoundedIcon from '@mui/icons-material/AppRegistrationRounded';

import { useHistory } from "react-router-dom";


import '../Styles/Navbar.css'
const drawerWidth = 240;

//Sidebar Styles
const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

//Elements Navbar Styles
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 1),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.55),
  },
  display: "flex",
  alignItems: "left",
  width: "70%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
  },
  marginLeft: 15,
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  color: "black",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "black",
  paddingLeft: "4px",
  width: "100%",
  padding: theme.spacing(0.5, 1, 0.5, 0),
  marginLeft: "50px",
}));


export default function Navbar({ item }) {
  const [searched, setSearched] = useState("");
  const history = useHistory();

  const handleSearchImput = (event) => {
    setSearched(event.target.value);
  };

  const handleEnterKey = (event) => {
    if (event.key === "Enter") {
      history.push({
        pathname: "/restaurantes",
        state: { response: searched },
      });
    }
  };

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex"}}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{ backgroundColor: "#C03228" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Buscar un restaurante..."
              inputProps={{ "aria-label": "search" }}
              onChange={(e) => {
                handleSearchImput(e);
              }}
              onKeyPress={(e) => handleEnterKey(e)}
            />
          </Search>

          <Button sx={{ display: { xs: 'none', sm: 'none', md: 'block' }, background: "#e6b439", color: "black", fontFamily: 'Mochiy Pop P One', marginLeft: "15px", "&:hover": {
    backgroundColor: "#3a0a18", color: "white"
  },}}>
            Iniciar Sesion
        </Button>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            background: "#C03228",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <span className="drawName">
            Hola Bombon!
          </span>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon sx={{ color: "white" }}/>
            ) : (
              <ChevronRightIcon sx={{ color: "white" }}/>
            )}
          </IconButton>
        </DrawerHeader>
        

        <Divider sx={{ background: "white" }}/>
        <List sx={{ color: "white" }}>
          <ListItem className="PersonTypo" button onClick={() => history.push("/home")}>
            <HomeRoundedIcon sx={{ marginRight: "15px" }}/>
            <ListItemText disableTypography primary={"Home"} />
          </ListItem>
          <ListItem className="PersonTypo" button onClick={() => history.push("/panel-administrador/restaurantes")}>
           <RestaurantMenuRoundedIcon sx={{ marginRight: "15px" }}/>
            <ListItemText disableTypography primary={"Restaurantes"} />
          </ListItem>
          <ListItem className="PersonTypo" button onClick={() => history.push("/about-us")}>
            <InfoRoundedIcon sx={{ marginRight: "15px" }}/>
            <ListItemText disableTypography primary={"Acerca de Nosotros"} />
          </ListItem>
          <ListItem className="PersonTypo" button onClick={() => history.push("/about-us")}>
            <MailIcon sx={{ marginRight: "15px" }}/>
            <ListItemText disableTypography primary={"Sugerencias"} />
          </ListItem>
        </List>
        <Divider sx={{ background: "white" }}/>
        <List sx={{ color: "white" }}>
          
          <ListItem className="PersonTypo" button onClick={() => history.push("/panel-administrador/restaurantes")}>
            <RestaurantRoundedIcon sx={{ marginRight: "15px" }}/>
            <ListItemText disableTypography primary={"Restaurantes"} />
          </ListItem>
          <ListItem className="PersonTypo" button onClick={() => history.push("/reportes")}>
            <ReportRoundedIcon sx={{ marginRight: "15px" }}/>
            <ListItemText disableTypography primary={"Reportes"} />
          </ListItem>
          <ListItem className="PersonTypo" button onClick={() => history.push("/solicitudes-creacion")}>
            <AddCircleRoundedIcon sx={{ marginRight: "15px" }}/>
            <ListItemText disableTypography primary={"Solicitudes Creacion"} />
          </ListItem>
          <ListItem className="PersonTypo" button onClick={() => history.push("/solicitudes-edicion")}>
            <EditRoundedIcon  sx={{ marginRight: "15px" }}/>
            <ListItemText disableTypography primary={"Solicitudes Edicion"} />
          </ListItem>
        </List>

        <Divider sx={{ background: "white" }}/>
            <List sx={{ color: "white" ,display: { xs: 'block', sm: 'none' } }}>
              <ListItem className="PersonTypo" button onClick={() => history.push("/login")}>
                <LoginRoundedIcon sx={{ marginRight: "15px" }}/>
                <ListItemText disableTypography primary={"Iniciar Sesion"} />
              </ListItem>
              <ListItem className="PersonTypo" button onClick={() => history.push("/register")}>
                <AppRegistrationRoundedIcon sx={{ marginRight: "15px" }}/>
                <ListItemText disableTypography primary={"Registrarse"} />
              </ListItem>
            </List>

      </Drawer>
      <Main open={open}>
        <DrawerHeader />
      </Main>
    </Box>
  );
}
