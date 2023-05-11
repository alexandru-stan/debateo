import React from 'react';
// import { Stack } from '@mui/material';
// import { TextField } from '@mui/material';
import theme from '../../../assets/material-ui-themes/DefaultTheme';
import {ThemeProvider} from '@mui/material';
import {Button,Stack, TextField }from '@mui/material';
import Register from '../../../js/Register';
function Formulario() {

  function callSignin(){

    Register();


  }

    return (
    
      <ThemeProvider theme={theme}>
       
       
      <h1>No tienes una cuenta? Regístrate!</h1>
        <TextField  color="secondary"  id="Rusername" label="Nombre de usuario" variant="standard"></TextField>
        <TextField color="secondary" id="Rpassword" label="Contraseña" variant="standard"></TextField>
        <TextField color="secondary"  id="Rname" label="Nombre" variant="standard"></TextField>
        <TextField color="secondary"  id="Rmail" label="mail" variant="standard"></TextField>
        <label>
        Fecha de nacimiento
        <TextField type='date' color="secondary"  id="Rbirth_date" label="" variant="standard"></TextField>
        </label>
        <Button style={{}} onClick={callSignin}>Registarse</Button>
        
       
     

      
      </ThemeProvider>
     
    );
  }


  export default Formulario;