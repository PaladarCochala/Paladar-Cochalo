import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from "@mui/material/Button";
import { useTheme, alpha } from "@mui/material/styles";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';


const LogoutButton = () => {
  const { logout } = useAuth0();
//Sidebar Styles
  const theme = useTheme();
  return (

    <ListItem className="PersonTypo" button onClick={() => logout({ returnTo: window.location.origin })}>
      <ExitToAppRoundedIcon  sx={{ marginRight: "15px" }}/>
      <ListItemText disableTypography primary={"Cerrar Sesion"} />
    </ListItem>

    // <Button sx={{ display: "flex", color: "White",variant:'outlined',padding: "0px 5px 0px 5px", 
    //   fontFamily: 'Dongle, sans-serif', marginLeft: "15px", "&:hover": {
    //   backgroundColor: alpha(theme.palette.common.black, 0.25)}}} onClick={() => logout({ returnTo: window.location.origin })}>
    //     Cerrar Sesion
    // </Button>
  );
};

export default LogoutButton;