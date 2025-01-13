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
import { validarRegister } from '../../../../../js/validarRegister';



const $ = require('jquery');
let codigoRespuesta;
let mensajeRespuesta;

const Formulario = (props) => {
const formRef = useRef();
const status = useSelector((state) => state.status.value);
const dispatch = useDispatch();

     function callRegister(formRef){
      $(".mensajeError").html("");
      let user = {
        name: $('#Rname').val(),
        username: $('#Rusername').val(),
        password: $('#Rpassword').val(),
        mail: $('#Rmail').val(),
        birth_date: $('#Rbirth_date').val()
    }

    let resultado = validarRegister(user);
    // let resultado = true;

   
      
    console.log(formRef)

    resultado ? 

      

      Register(formRef).then(response => {
      codigoRespuesta = response.status;
      mensajeRespuesta = response.data;
      dispatch(changeStatus(!status))
    }) 
  
    
    
    .catch(error => {
      codigoRespuesta = error.response.status;
      mensajeRespuesta = error.response.data;
       dispatch(changeStatus(!status))
      
    })

    : 

    null



  }

 

  const isInitialMount = useRef(true);




  useEffect(() => {
   
    if (isInitialMount.current) {
       isInitialMount.current = false;
       $('#registerResponse').hide();
    } else {

    
      status ? $('#formRegister button').fadeOut(()=>$('#registerResponse').fadeIn().delay(2000).fadeOut(() => $('#formRegister button').fadeIn())) : $('#formRegister button').fadeOut(()=>$('#registerResponse').fadeIn(()=>{props.fn()}));
    

    }
  },[status]);




    return (
  <div  className='  backdrop-brightness-125 w-2/6 border-moradoLight border-2 rounded-lg p-3 text-white flex flex-col' id="formRegister">
      
    <form ref={formRef} onSubmit={event => event.preventDefault()} >
      <p  style={{fontSize:'1.5em'}} className='Kanit text-center bienvenida'>Bienvenido!</p>
        <ToggleForm fn={props.fn}  hasAccount = {props.hasAccount}/>
    
        <div className=' flex flex-col  items-center '>

        <div style={{marginTop:'10px'}}  className=' w-3/4 flex flex-col items-center'>
        
        <input name='Rusername' id='Rusername' className=" rounded-md py-2 px-4 text-gray-700 border-b-2 border-moradoLight text-white backdrop-brightness-125 placeholder-gray-400 bg-moradoOscuro placeholder-gray-400 focus:outline-none  w-full focus:border-naranjaMolon"  placeholder="Nombre de usuario" for="Rusername"/>
       {/* <span>a</span> */}
        <p className="mensajeError Kanit text-red-400 font-bold"></p>
        </div>

        <div style={{marginTop:'10px'}} className='w-3/4'>
        <input name='Rpassword' type="password" id='Rpassword' className=" rounded-md py-2 px-4 text-gray-700 border-b-2 border-moradoLight text-white backdrop-brightness-125 placeholder-gray-400 bg-moradoOscuro placeholder-gray-400 focus:outline-none  w-full focus:border-naranjaMolon"  placeholder="Contraseña" for="Rpassword" />
        <p  className="mensajeError Kanit text-red-400 font-bold"></p>
        </div>
        

        <div style={{marginTop:'10px'}} className='w-3/4'>
        <input  name='Rname' id="Rname" className=" rounded-md py-2 px-4 text-gray-700 border-b-2 border-moradoLight text-white backdrop-brightness-125 placeholder-gray-400 bg-moradoOscuro placeholder-gray-400 focus:outline-none  w-full focus:border-naranjaMolon" placeholder="Nombre" for="Rname"/>
        <p className="mensajeError Kanit text-red-400 font-bold"></p>
        </div>
        <div style={{marginTop:'10px'}} className='w-3/4'>
        <input  name='Rmail' id="Rmail" className=" rounded-md py-2 px-4 text-gray-700 border-b-2 border-moradoLight text-white backdrop-brightness-125 placeholder-gray-400 bg-moradoOscuro placeholder-gray-400 focus:outline-none  w-full focus:border-naranjaMolon" placeholder="Correo electrónico" for="Rmail" />
        <p className="mensajeError Kanit text-red-400 font-bold"></p>
        </div>

        <div style={{marginTop:'10px'}} className='w-3/4'>
        <input name='Rbirth_date' id="Rbirth_date" onFocus={(e)=> e.target.type="date" } style={{colorScheme:"dark"}} placeholder='Fecha de nacimiento' type="text" className=" rounded-md py-2 px-4 text-gray-700 border-b-2 text-white border-moradoLight backdrop-brightness-125 placeholder-gray-400 bg-moradoOscuro placeholder-gray-400 focus:outline-none  w-full focus:border-naranjaMolon"/>
        <p className="mensajeError Kanit text-red-400 font-bold"></p>
        </div>
        
        <div style={{marginTop:'10px'}} className='w-3/4'>
        <input required name='Rprofileimg' type="file" id='Rprofileimg' accept="image/*" className=" rounded-md py-2 px-4 text-gray-700 border-b-2 border-moradoLight text-white backdrop-brightness-125 placeholder-gray-400 bg-moradoOscuro placeholder-gray-400 focus:outline-none  w-full focus:border-naranjaMolon"  placeholder="Contraseña" for="Rpassword" />
        <p  className="mensajeError Kanit text-red-400 font-bold"></p>
        </div>
        
        <div style={{marginTop:'10px'}} className='w-3/4' >
          <button className='w-full bg-moradoLight hover:bg-naranjaMolon text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-300' onClick={() => callRegister(formRef)}>Enviar</button>
          <RespuestaServidor  codigo={codigoRespuesta} texto={mensajeRespuesta}/>  
        </div>
</div>
     
        
     </form>
     

      
     
      </div>
    );
  
    }

  export default Formulario;