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
    //  if((parseInt($('#registerResponse').css('left'))) === 426) {
    //   animateFunc();

    //   if($('#registerResponse').is(':animated')){
    //     $('#registerResponse').promise().done(animateFunc)
    //   }

    //  }
    
      $('#formRegister button').fadeOut(()=>$('#registerResponse').fadeIn().delay(3000).fadeOut(() => $('#formRegister button').fadeIn()));
      

    }
  },[status]);




    return (
  <div className='backdrop-brightness-125 border-naranjaMolon border-2 rounded-lg p-3 text-white flex flex-col' id="formRegister">
      <ThemeProvider theme={theme}>
    
      <h1 className='text-center'>Bienvenido!</h1>
        <ToggleForm fn={props.fn}  hasAccount = {props.hasAccount}/>
        {/* <TextField  color="secondary"  id="Rusername" label="Nombre de usuario" variant="standard"></TextField>
        <TextField type='password' color="secondary" id="Rpassword" label="Contraseña" variant="standard"></TextField>
        <TextField color="secondary"  id="Rname" label="Nombre" variant="standard"></TextField>
        <TextField color="secondary"  id="Rmail" label="Mail" variant="standard"></TextField>
       
        <label>
        Fecha de nacimiento
        <TextField type='date' color="secondary"  id="Rbirth_date" label="" variant="filled"></TextField>
        </label>
        <Button onClick={callRegister}   >Registarse</Button> */}
        <div className='campoFormularioPrincipal m-3 flex  justify-around'>
        <Input id='Rusername' placeholder="Nombre de usuario" for="Rusername"/>
        <Input id='Rpassword'  placeholder="Contraseña" for="Rpassword" />
        </div>

        <div className='campoFormularioPrincipal m-3 flex justify-around'>
        <Input id="Rname" placeholder="Nombre" for="Rname"/>
        <Input id="Rmail" placeholder="Correo electrónico" for="Rmail" />
        </div>

        <div className='campoFormularioPrincipal m-3 flex justify-around'>
        <label htmlFor="Rbirth_date">
        <input id="Rbirth_date" onFocus={(e)=> e.target.type="date" } style={{colorScheme:"dark"}} placeholder='Fecha de nacimiento' type="text" className=" rounded-md py-2 px-4 text-gray-700 border-b-2 text-white backdrop-brightness-125 placeholder-gray-400 bg-moradoOscuro placeholder-gray-400 focus:outline-none  w-full focus:border-naranjaMolon"/>
        </label>
        </div>
        
        <div >
        <label className='w-full' htmlFor='Rsubmit'>
          <button className='w-full bg-moradoLight hover:bg-naranjaMolon text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-300' onClick={callRegister}>Enviar</button>
        </label>
        </div>

        {/* <label  htmlFor='Rusername'>
          Nombre de usuario: 
          <input className='text-black bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-naranjaMolon text-gray-700 py-2 pl-2 pr-8 transition-all duration-300' type='text' id='Rusername' ></input>
        </label>
        <label htmlFor='Rpassword'>
          Contraseña
          <input className='text-black' type='password' id='Rpassword'></input>
        </label>
        <label htmlFor='Rname'>
        Nombre:
          <input className='text-black' type="text" id="Rname"></input>
        </label>
        <label htmlFor='Rmail'>
          Correo electrónico
            <input className='text-black' type="text" id="Rmail"/>
        </label>
        <label htmlFor='Rbirth_date'>
        Fecha de nacimiento
            <input className='text-black' type="date" id="Rbirth_date"/>
        </label>
        <label htmlFor='Rsubmit'>
          <button className='border-4 border-emerald-500 hover:border-naranjaMolon' onClick={callRegister}>Enviar</button>
        </label> */}
        
        <RespuestaServidor  codigo={codigoRespuesta} texto={mensajeRespuesta}/>
     

      
      </ThemeProvider>
      </div>
    );
  
    }

  export default Formulario;