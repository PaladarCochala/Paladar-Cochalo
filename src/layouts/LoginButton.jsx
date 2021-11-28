import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (

    <ListItem className="PersonTypo" button onClick={() => loginWithRedirect()}>
      <LoginRoundedIcon  sx={{ marginRight: "15px" }}/>
      <ListItemText disableTypography primary={"Iniciar Sesion"} />
    </ListItem>
  );
};

export default LoginButton;