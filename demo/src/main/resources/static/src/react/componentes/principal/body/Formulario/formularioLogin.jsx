import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Login from '../../../../../js/Login';
import { red } from '@mui/material/colors';

import { InputLabel, Stack, ThemeProvider, Typography } from '@mui/material';
import ToggleForm from '../toggleForm';
// import { createMuiTheme } from '@material-ui/core/styles';

import Container from '@mui/material';
import theme from '../../../../../assets/material-ui-themes/DefaultTheme';

const Formulario = (props) => {

const navigate = useNavigate();

 function callLogin(){

  Login().then(response => {
    if(response.status >=200 && response.status <=299){
        alert(response.data+" "+response.status);
        navigate("/feed");
    }
  }).catch(error => {
    alert(error.response.status+" "+error.response.data);
  })

}
 


let inputStyles = {
  style:{
   color:'white',
   
  }
}
















    return (

      
      <ThemeProvider theme={theme} >
      
        <div id='form'>
        <h1>Bienvenido de vuelta!</h1>
          <ToggleForm fn={props.fn} hasAccount = {props.hasAccount}/>
          <TextField color="secondary"  id="Lusername" label="Nombre de usuario" variant="filled"></TextField>
          <TextField color="secondary" id="Lpassword" label="Contraseña" variant="filled"></TextField>
          <Button onClick={callLogin} style={{height:'50%'}}>Iniciar Sesión</Button>
          
          </div>
         
        </ThemeProvider>
   
      
    )
}

export default Formulario;