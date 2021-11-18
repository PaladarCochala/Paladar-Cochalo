import Box from '@mui/material/Box';
import "../../Styles/Comentario.css"



export default function Comentario(props) {


  return (
    <Box sx={{ display: "flex" , margin: "15px", borderTop:"1px solid #ebe8e8"}}>
      <img className="image"  src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"></img>
      <Box sx ={{display: "block"}}>
        <Box sx={{ m: 1, p: 2, borderRadius: "20px",textAlign: "left", background: "rgb(192, 50,40,0.1)" }}>
          <b > {props.comentario.usuario.nombre}</b>
          <div >{props.comentario.descripcion}</div>
        </Box>
        <Box sx={{color:"#65676b" , marginLeft:"20px"}} >{props.comentario.fechaDePublicacion} </Box>
      </Box>
    </Box>
  );
}