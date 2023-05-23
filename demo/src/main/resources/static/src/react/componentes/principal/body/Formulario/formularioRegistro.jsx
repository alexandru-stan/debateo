import React from 'react';
// import { Stack } from '@mui/material';
// import { TextField } from '@mui/material';
import theme from '../../../../../assets/material-ui-themes/DefaultTheme';
import {ThemeProvider} from '@mui/material';
import {Button,Stack, TextField }from '@mui/material';
import Register from '../../../../../js/Register';
import RespuestaServidor from '../respuestasServidor';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import ToggleForm from '../toggleForm';

const $ = require('jquery');


const Formulario = (props) => {
const [codigo,setCodigo] = useState(null);
const [texto,setTexto] = useState(null);
const [forzarRenderizado,setForzar] = useState(true);



     function callRegister(){

    // let respuesta = await Register();
    // setCodigo(respuesta.status);
    // setTexto(respuesta.data);

    Register().then(response => {
      
      setCodigo(response.status);
      setTexto(response.data);
      setForzar(!forzarRenderizado);
    }

      ).catch(error => {
        setCodigo(error.response.status);
        setTexto(error.response.data);
        setForzar(!forzarRenderizado);
        
      });

    

  }

 

  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
       isInitialMount.current = false;
    } else {
    
      $('#registerResponse').animate({ left: '30%' }, 'slow').delay(3000).animate({left:'130%'});
      
    }
  },[forzarRenderizado]);






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
        <TextField type='date' color="secondary"  id="Rbirth_date" label="" variant="standard"></TextField>
        </label>
        <Button onClick={callRegister}   >Registarse</Button>
        
        <RespuestaServidor codigo={codigo} texto={texto}/>
     

      
      </ThemeProvider>
     
    );
  
    }

  export default Formulario;