import React from 'react'

import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import FacebookIcon from '@mui/icons-material/Facebook';


export default function Footer() {
    return (

        <>
            <AppBar position="static" style={{ background: '#000000' , marginTop: "100px"}}>
                <Container>
                        <Typography  style={{ marginTop: '4em',textAlign: 'center', padding: '1em' }} variant="body1" color="inherit"  >
                            <div style={{ padding: '0.5em'}}>
                            Copyright © 2021 PALADAR COCHALO. Todos los derechos reservados
                            </div>
                            <Divider style={{ backgroundColor: 'white' }} variant='fullWidth' />
                            <div style={{ padding: '0.5em' }}>
                                contáctanos
                            </div>
                            <div>
                                <FacebookIcon />
                            </div>
                            <div>
                                paladarcochalo@gmail.com (+591) 555 555 555
                            </div>
                            <div style={{ display: 'flex', marginTop: '0.5em'  }}>
                                <div style={{ width: '25%' }}>
                                    Términos de Uso
                                </div>
                                <div style={{ width: '25%' }}>
                                    Privacidad
                                </div>
                                <div style={{ width: '25%' }}>
                                    Cookies
                                </div>
                                <div style={{ width: '25%' }}>
                                    soporte técnico
                                </div>
                            </div>
                        </Typography>
                 
                </Container>
            </AppBar> 
        </>


    )
}
