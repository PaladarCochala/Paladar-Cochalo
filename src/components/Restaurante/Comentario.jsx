import "../../Styles/Comentario.css"
import Dining from '@mui/icons-material/Dining';
import DiningOutlined from '@mui/icons-material/DiningOutlined';
import { Box, Rating } from '@mui/material';
import { useAuth0 } from "@auth0/auth0-react";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import { deleteComentario } from '../../services/comentario';
import { useHistory } from "react-router-dom";

export default function Comentario(props) {
  const { user, isAuthenticated } = useAuth0();
  const history = useHistory(); 
  
  function deleteComentarioById(id) {
      deleteComentario(id)
      .then((response) => {
        history.go(0)
        return response.data;
      })

}
  return (
    <Box sx={{ display: "flex", margin: "15px", borderTop: "1px solid #ebe8e8", font:"Helvetica" }}>
      <img styles={{padding: "5px"}}
      className="image" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"></img>
      <Box sx={{ display: "block" }}>
        <Box sx={{ marginTop: "10px" }}>
          <Rating style={{ fontSize: 20, paddingLeft:"16px" }}
            name="customized-5"
            defaultValue={props.comentario.valoracionServicio}
            readOnly />
          <Rating style={{ color: '#ff6d75', fontSize: 20 ,paddingLeft:"16px"}}
            name="customized-restaurant"
            readOnly
            defaultValue={props.comentario.valoracionSabor}
            precision={0.5}
            icon={<Dining fontSize="inherit" />}
            emptyIcon={<DiningOutlined fontSize="inherit" />}
          />
        </Box>
        <Box sx={{ display: "block" }}>
          <Box sx={{ m: 1, p: 2, borderRadius: "20px", textAlign: "left", background: "rgb(192, 50,40,0.1)" }}>
            <b > {props.comentario.usuario.nombre}</b>
            <div >{props.comentario.descripcion}</div>
          </Box>
          <Box sx={{display: "flex", alignContent: "flex"}} >
            <Box sx={{ color: "#65676b", marginLeft: "20px", marginRight: "20px", marginTop: "9px"}} >{props.comentario.fechaDePublicacion} </Box>
            {isAuthenticated && user.email===props.comentario.usuario.email? <IconButton color="error" onClick={() => { deleteComentarioById(props.comentario.id) }}>
              <DeleteIcon />
            </IconButton>: " "}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}