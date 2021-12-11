import React from "react";
import { Button, Dialog, DialogContent, DialogTitle, Divider, Grid, Slide, TextField, Typography} from '@mui/material';
import { crearEtiquetas } from "../../../services/etiquetas";

const myStyle= {
  color: "#212121",
  backgroundColor: "white",
  padding: "5px",
  fontFamily: "inherit",
  fontSize: 35,
  fontWeight: 'bold',
  textAlign:"center"
}

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ModalCrearEtiqueta() {

    //MODAL
      const [validacionNombre, setValidacionNombre] = React.useState(false);
      const [habilitado, setHabilitado] = React.useState(false);

      const [open, setOpen] = React.useState(false);
      const handleClickOpen = () => {
        setOpen(true);
      };
      const handleClose = () => {
        setOpen(false);
      };

    //ETIQUETA
        const [nombre, setNombre] = React.useState("");  
        
        const handleInputChange = (e) => {
            setNombre(e.target.value);
            if (e.target.value !== 0) 
            {setValidacionNombre(true);}
            if (validacionNombre) {
              setHabilitado(true);
            }
        };

        console.log(nombre);

      function crearNuevaEtiqueta() {
        crearEtiquetas({
          nombreEtiqueta: nombre,
        })
        .then((x) => {
          return x.data;
        })
      }

      return (
        <div>
          <Grid align="right"  style={{ marginLeft: 75 }}>
            <Button variant="contained" color="primary" size="small"
              onClick={() => {
                handleClickOpen();
              }}
            >
              Crear Etiqueta
            </Button>
          </Grid>
          <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
            fullWidth="true"
            maxWidth="xs"
          >
            <DialogTitle align="center">
              <Typography style={myStyle} variante='h2'>
                  Nueva Etiqueta
              </Typography>
            </DialogTitle>
            <Divider></Divider>
    
            <DialogContent>
              <form>
                <Grid container justifyContent="center" alignItems="center" sx={{p: 1,m: 1,}}>     
                    <TextField
                    label="Nombre"
                    placeholder="Ingrese el nombre de la nueva etiqueta"
                    variant="outlined"
                    fullWidth
                    required
                    InputLabelProps={{style: { fontFamily: "Arial", color: "black", }, }}
                    inputProps={{ style: { fontFamily: "Arial", color: "black", }, }}
                    value={nombre}
                    onChange={(e) => {
                         handleInputChange(e);
                    }}
                    />
                </Grid>

                <Grid container justifyContent="center" alignItems="center" sx={{p: 1,m: 1,}}>    
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    disabled={!habilitado}
                    onClick={() => {
                      crearNuevaEtiqueta();
                    }}
                  >
                    Registrar
                  </Button>
                </Grid>
              </form>
            </DialogContent>
    
          </Dialog>
        </div>
      );

}
