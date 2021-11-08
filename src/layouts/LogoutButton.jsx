import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from "@mui/material/Button";
import { styled, useTheme, alpha } from "@mui/material/styles";

const LogoutButton = () => {
  const { logout } = useAuth0();
//Sidebar Styles
  const theme = useTheme();
  return (
    <Button sx={{ display: "flex", color: "White",variant:'outlined',padding: "0px 5px 0px 5px", 
      fontFamily: 'Mochiy Pop P One', marginLeft: "15px", "&:hover": {
      backgroundColor: alpha(theme.palette.common.black, 0.25)}}} onClick={() => logout({ returnTo: window.location.origin })}>
        Cerrar Sesion
    </Button>
  );
};

export default LogoutButton;