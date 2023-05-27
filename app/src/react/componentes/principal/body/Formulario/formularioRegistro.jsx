import React from 'react';
// import { Stack } from '@mui/material';
// import { TextField } from '@mui/material';
import theme from '../../../../../assets/material-ui-themes/DefaultTheme';
import {ThemeProvider} from '@mui/material';
import {Button,Stack, TextField }from '@mui/material';
import Register from '../../../../../js/Register';
import RespuestaServidor from '../respuestasServidor';  
import { useEffect } from 'react';
import { useRef } from 'react';
import ToggleForm from '../toggleForm';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { change, changeStatus } from '../../../../../redux-store/slices/StatusSlice';

const $ = require('jquery');
let codigoRespuesta;
let mensajeRespuesta;

const Formulario = (props) => {

const status = useSelector((state) => state.status.value);
const dispatch = useDispatch();

     function callRegister(){

    Register().then(response => {
      codigoRespuesta = response.status;
      mensajeRespuesta = response.data;
      dispatch(changeStatus(!status))
    })
  
    
    
    .catch(error => {
      codigoRespuesta = error.response.status;
      mensajeRespuesta = error.response.data;
       dispatch(changeStatus(!status))
      
    });

    

  }

 

  const isInitialMount = useRef(true);




  useEffect(() => {
    if (isInitialMount.current) {
       isInitialMount.current = false;
       $('#registerResponse').hide();
    } else {
    //  if((parseInt($('#registerResponse').css('left'))) === 426) {
    //   animateFunc();

    //   if($('#registerResponse').is(':animated')){
    //     $('#registerResponse').promise().done(animateFunc)
    //   }

    //  }
    
      $('#form button').fadeOut(()=>$('#registerResponse').fadeIn().delay(3000).fadeOut(() => $('#form button').fadeIn()));
      

    }
  },[status]);




    return (
  
      <ThemeProvider theme={theme}>
    
      <h1>Bienvenido!</h1>
        <ToggleForm fn={props.fn}  hasAccount = {props.hasAccount}/>
        <TextField  color="secondary"  id="Rusername" label="Nombre de usuario" variant="standard"></TextField>
        <TextField type='password' color="secondary" id="Rpassword" label="Contraseña" variant="standard"></TextField>
        <TextField color="secondary"  id="Rname" label="Nombre" variant="standard"></TextField>
        <TextField color="secondary"  id="Rmail" label="Mail" variant="standard"></TextField>
        <label>
        Fecha de nacimiento
        <TextField type='date' color="secondary"  id="Rbirth_date" label="" variant="filled"></TextField>
        </label>
        <Button onClick={callRegister}   >Registarse</Button>
        
        <RespuestaServidor  codigo={codigoRespuesta} texto={mensajeRespuesta}/>
     

      
      </ThemeProvider>
     
    );
  
    }

  export default Formulario;