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
import { timestampToDate } from '../../../../../js/timestampToDate';
let codigoRespuesta;
let mensajeRespuesta;

const $ = require('jquery');

const Formulario = (props) => {
  const status = useSelector((state) => state.status.value);
  const dispatch = useDispatch();
const navigate = useNavigate();

 function callLogin(){

  Login().then(response => {
    
    response.data.birth_date = timestampToDate(response.data.birth_date);
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

      
     
      
        <div  className='  backdrop-brightness-125 border-naranjaMolon border-2 rounded-lg p-3 text-white flex flex-col' id='form'>
        <p style={{fontSize:'1.5em'}} className='text-center bienvenida'>Bienvenido</p>
          <ToggleForm fn={props.fn} hasAccount = {props.hasAccount}/>
          {/* <TextField color="secondary"  id="Lusername" label="Nombre de usuario" variant="filled"></TextField>
          <TextField className='text-neutral-50' color="secondary" id="Lpassword" label="Contraseña" variant="filled"></TextField> */}
          <div className='m-3 campoFormularioPrincipal flex justify-around'>
        <input className=" rounded-md py-2 px-4 text-gray-700 border-b-2 text-white backdrop-brightness-125 placeholder-gray-400 bg-moradoOscuro placeholder-gray-400 focus:outline-none  w-full focus:border-naranjaMolon" id='Lusername' placeholder="Nombre de usuario" for="Lusername"/>
        <input type="password" className=" rounded-md py-2 px-4 text-gray-700 border-b-2 text-white backdrop-brightness-125 placeholder-gray-400 bg-moradoOscuro placeholder-gray-400 focus:outline-none  w-full focus:border-naranjaMolon" id='Lpassword'  placeholder="Contraseña" for="Lpassword" />
        </div>
        <div >
        <label className='w-full' htmlFor='Rsubmit'>
          <button className='w-full bg-moradoLight hover:bg-naranjaMolon text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-300' onClick={callLogin}>Enviar</button>
        </label>
        </div>
          
        
          <RespuestaServidor  codigo={codigoRespuesta} texto={mensajeRespuesta}/>
          </div>
         
      
   
      
    )
}

export default Formulario;