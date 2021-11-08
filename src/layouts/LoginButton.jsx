import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from "@mui/material/Button";
import { styled, useTheme, alpha } from "@mui/material/styles";
const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  const theme = useTheme();
  return (
    <Button sx={{ display: "flex", color: "White",variant:'outlined',padding: "0px 5px 0px 5px", 
    fontFamily: 'Mochiy Pop P One', marginLeft: "15px", "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.25)}}} onClick={() => loginWithRedirect()}>
      Iniciar Sesion
  </Button> );
};

export default LoginButton;