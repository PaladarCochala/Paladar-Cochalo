import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useTheme } from "@mui/material/styles";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  const theme = useTheme();
  return (

    <ListItem className="PersonTypo" button onClick={() => loginWithRedirect()}>
      <LoginRoundedIcon  sx={{ marginRight: "15px" }}/>
      <ListItemText disableTypography primary={"Iniciar Sesion"} />
    </ListItem>

  //   <Button sx={{ display: "flex", color: "White",variant:'outlined',padding: "0px 5px 0px 5px", 
  //   fontFamily: 'Dongle, sans-serif', marginLeft: "15px", "&:hover": {
  //   backgroundColor: alpha(theme.palette.common.black, 0.25)}}} onClick={() => loginWithRedirect()}>
  //     Iniciar Sesion
  // </Button> 
  
  );
};

export default LoginButton;