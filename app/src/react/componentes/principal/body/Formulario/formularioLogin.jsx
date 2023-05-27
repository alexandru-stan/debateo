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
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import RespuestaServidor from '../respuestasServidor';
import { useRef } from 'react';
import { useEffect } from 'react';
let codigoRespuesta;
let mensajeRespuesta;

const $ = require('jquery');

const Formulario = (props) => {
  const status = useSelector((state) => state.status.value);
  const dispatch = useDispatch();
const navigate = useNavigate();

 function callLogin(){

  Login().then(response => {
      navigate("/feed");
    })

}


 


let inputStyles = {
  style:{
   color:'white',
   
  }
}



const isInitialMount = useRef(true);




  useEffect(() => {
    if (isInitialMount.current) {
       isInitialMount.current = false;
       $('#registerResponse').hide();
    } else {
   
      if($('#registerResponse').data('events')){
       
      } else {
      $('#form button').fadeOut(()=>$('#registerResponse').fadeIn().delay(3000).fadeOut(() => $('#form button').fadeIn()));
      }

    }
  },[status]);












    return (

      
      <ThemeProvider theme={theme} >
      
        <div id='form'>
        <h1>Bienvenido de vuelta!</h1>
          <ToggleForm fn={props.fn} hasAccount = {props.hasAccount}/>
          <TextField color="secondary"  id="Lusername" label="Nombre de usuario" variant="filled"></TextField>
          <TextField color="secondary" id="Lpassword" label="Contraseña" variant="filled"></TextField>
          <Button onClick={callLogin} style={{height:'50%'}}>Iniciar Sesión</Button>
          <RespuestaServidor  codigo={codigoRespuesta} texto={mensajeRespuesta}/>
          </div>
         
        </ThemeProvider>
   
      
    )
}

export default Formulario;