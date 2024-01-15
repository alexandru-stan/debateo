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
import { Input } from './inputComponent';
let codigoRespuesta;
let mensajeRespuesta;

const $ = require('jquery');

const Formulario = (props) => {
  const status = useSelector((state) => state.status.value);
  const dispatch = useDispatch();
const navigate = useNavigate();

 function callLogin(){

  Login().then(response => {
    console.log(response);

    sessionStorage.setItem('user',JSON.stringify(response.data));

      navigate("/feed");
    }).catch(
      () => alert("TUPU")
    );

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
      
        <div  className=' backdrop-brightness-125 border-naranjaMolon border-2 rounded-lg p-3 text-white flex flex-col' id='form'>
        <h1 className='text-center'>Bienvenido de vuelta!</h1>
          <ToggleForm fn={props.fn} hasAccount = {props.hasAccount}/>
          {/* <TextField color="secondary"  id="Lusername" label="Nombre de usuario" variant="filled"></TextField>
          <TextField className='text-neutral-50' color="secondary" id="Lpassword" label="Contraseña" variant="filled"></TextField> */}
          <div className='m-5 flex justify-around'>
        <Input id='Lusername' placeholder="Nombre de usuario" for="Lusername"/>
        <Input id='Lpassword'  placeholder="Contraseña" for="Lpassword" />
        </div>
        <div >
        <label className='w-full' htmlFor='Rsubmit'>
          <button className='w-full bg-moradoLight hover:bg-naranjaMolon text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-300' onClick={callLogin}>Enviar</button>
        </label>
        </div>
          
          {/* <label htmlFor='Lusername'>
          Nombre de usuario:
          <input className='text-black bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 text-gray-700 py-2 pl-2 pr-8 transition-all duration-300' id="Lusername" type='text'></input>
          </label>
          <label htmlFor='Lpassword'>
          Contraseña
          <input  className='text-black' id="Lpassword" type='password'></input>
          </label>
          <label htmlFor='Rsubmit'>
          <button className='border-4 border-emerald-500 hover:border-naranjaMolon' onClick={callLogin}>Enviar</button>
        </label> */}
          <RespuestaServidor  codigo={codigoRespuesta} texto={mensajeRespuesta}/>
          </div>
         
        </ThemeProvider>
   
      
    )
}

export default Formulario;