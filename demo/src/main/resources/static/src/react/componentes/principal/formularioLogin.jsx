import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';

import Login from '../../../js/Login';
import { red } from '@mui/material/colors';
import styles from '../../../assets/styles/Principal.css';
import { InputLabel, Stack, ThemeProvider, Typography } from '@mui/material';
// import { createMuiTheme } from '@material-ui/core/styles';

import Container from '@mui/material';
import theme from '../../../assets/material-ui-themes/DefaultTheme';

const Formulario = () => {

const navigate = useNavigate();

async function callLogin(){
  
  let response = await Login();
  
  if(response.data){
    navigate("/feed")
  } else {
    alert("NOP");
  }
}
 


let inputStyles = {
  style:{
   color:'white',
   
  }
}
















    return (

      
      <ThemeProvider theme={theme} >
      
        <div id='formularioLogin'>
          <TextField color="secondary"  id="Lusername" label="Nombre de usuario" variant="outlined"></TextField>
          <TextField color="secondary" id="Lpassword" label="Contraseña" variant="outlined"></TextField>
          <Button style={{height:'50%'}}>Iniciar Sesión</Button>
          </div>
        </ThemeProvider>
   
      
    )
}

export default Formulario;