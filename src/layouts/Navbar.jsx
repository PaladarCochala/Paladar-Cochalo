import InputBase from "@mui/material/InputBase";

import * as React from "react";
import { useState } from "react";
import { styled, useTheme, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from '@mui/material/Typography';
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

import { useHistory } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import '../Styles/Navbar.css'
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import Profile from "./Profile";
const drawerWidth = 240;

//Sidebar Styles
const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(0),
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
  const { user, isAuthenticated } = useAuth0();
  console.log(user)

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
          <Typography variant="h4" component="div" align= "center" noWrap="true" sx={{fontFamily: 'Dongle, sans-serif', marginLeft: '15px'}}>
            PALADAR COCHALO
          </Typography>
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
        <DrawerHeader className="drawName">
          {isAuthenticated? <span>Hola {user.given_name.split(" ")[0]}!</span>:  <span>Bienvenido!</span> }
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
          <ListItem className="PersonTypo" button onClick={() => history.push({
        pathname: "/restaurantes",
        state: { response: "" },
      })}>
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
            <List sx={{ color: "white" }}>
            {isAuthenticated? <LogoutButton/>:  <LoginButton/> }
            </List>

      </Drawer>
      <Main open={open}>
        <DrawerHeader />
      </Main>
    </Box>
  );
}
