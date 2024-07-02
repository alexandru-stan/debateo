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
import { Input } from './inputComponent';

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

    
      $('#formRegister button').fadeOut(()=>$('#registerResponse').fadeIn().delay(3000).fadeOut(() => $('#formRegister button').fadeIn()));
    

    }
  },[status]);




    return (
  <div  className='  backdrop-brightness-125 border-naranjaMolon border-2 rounded-lg p-3 text-white flex flex-col' id="formRegister">
      
    
      <p  style={{fontSize:'1.5em'}} className='text-center bienvenida'>Bienvenido!</p>
        <ToggleForm fn={props.fn}  hasAccount = {props.hasAccount}/>
    
        <div className='campoFormularioPrincipal m-3 flex  justify-around'>
        <input id='Rusername' className=" rounded-md py-2 px-4 text-gray-700 border-b-2 text-white backdrop-brightness-125 placeholder-gray-400 bg-moradoOscuro placeholder-gray-400 focus:outline-none  w-full focus:border-naranjaMolon"  placeholder="Nombre de usuario" for="Rusername"/>
        <input id='Rpassword' className=" rounded-md py-2 px-4 text-gray-700 border-b-2 text-white backdrop-brightness-125 placeholder-gray-400 bg-moradoOscuro placeholder-gray-400 focus:outline-none  w-full focus:border-naranjaMolon"  placeholder="Contraseña" for="Rpassword" />
        </div>

        <div className='campoFormularioPrincipal m-3 flex justify-around'>
        <input id="Rname" className=" rounded-md py-2 px-4 text-gray-700 border-b-2 text-white backdrop-brightness-125 placeholder-gray-400 bg-moradoOscuro placeholder-gray-400 focus:outline-none  w-full focus:border-naranjaMolon" placeholder="Nombre" for="Rname"/>
        <input id="Rmail" className=" rounded-md py-2 px-4 text-gray-700 border-b-2 text-white backdrop-brightness-125 placeholder-gray-400 bg-moradoOscuro placeholder-gray-400 focus:outline-none  w-full focus:border-naranjaMolon" placeholder="Correo electrónico" for="Rmail" />
        </div>

        <div className='campoFormularioPrincipal m-3 flex justify-around'>
        <label htmlFor="Rbirth_date">
        <input id="Rbirth_date" onFocus={(e)=> e.target.type="date" } style={{colorScheme:"dark"}} placeholder='Fecha de nacimiento' type="text" className=" rounded-md py-2 px-4 text-gray-700 border-b-2 text-white backdrop-brightness-125 placeholder-gray-400 bg-moradoOscuro placeholder-gray-400 focus:outline-none  w-full focus:border-naranjaMolon"/>
        </label>
        </div>
        
        <div >
        <label className='w-full ' htmlFor='Rsubmit'>
          <button className='w-full bg-moradoLight hover:bg-naranjaMolon text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-300' onClick={callRegister}>Enviar</button>
          <RespuestaServidor  codigo={codigoRespuesta} texto={mensajeRespuesta}/>
        </label>
        </div>

     
        
        
     

      
     
      </div>
    );
  
    }

  export default Formulario;