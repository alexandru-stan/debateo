import React from 'react';

const ToggleForm = (props) => {

    function tumadre(){
        console.log("Ok");
    }
let mensaje;
    if(props.hasAccount){
        mensaje = <h5 className=' p-2 text-naranjaMolon cursor-pointer hover:text-naranjaSeleccionado  ' onClick={props.fn} >No tienes una cuenta? Haz click aquí para registrarte!</h5>
       
    } else {
        // mensaje = <h5 onClick={props.fn} >Ya tienes una cuenta? Haz click aquí para iniciar sesión</h5>
        mensaje = <h5  className='p-2  text-naranjaMolon cursor-pointer hover:text-naranjaSeleccionado  ' onClick={props.fn} >Ya tienes una cuenta? Haz clic aquí para iniciar sesión!</h5>
    }

    return (
        
      <span className='border-b-4'>{mensaje}</span> 

    );
}


export default ToggleForm;