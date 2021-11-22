import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';


const LogoutButton = () => {
  const { logout } = useAuth0();
//Sidebar Styles
  return (

    <ListItem className="PersonTypo" button onClick={() => logout({ returnTo: window.location.origin })}>
      <ExitToAppRoundedIcon  sx={{ marginRight: "15px" }}/>
      <ListItemText disableTypography primary={"Cerrar Sesion"} />
    </ListItem>
  );
};

export default LogoutButton;