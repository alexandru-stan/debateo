import React from 'react';

const ToggleForm = (props) => {

    function tumadre(){
        
    }
let mensaje;
    if(props.hasAccount){
        mensaje = <p style={{fontSize:'1.5em'}} className='text-center  Kanit mensajePrincipal text-naranjaMolon cursor-pointer hover:text-naranjaSeleccionado  ' onClick={props.fn} >No tienes una cuenta?<br></br> Haz click aquí para registrarte!</p>
       
    } else {
        // mensaje = <h5 onClick={props.fn} >Ya tienes una cuenta? Haz click aquí para iniciar sesión</h5>
        mensaje = <p style={{fontSize:'1.5em'}} className='w-full text-center mensajePrincipal Kanit   text-naranjaMolon cursor-pointer hover:text-naranjaSeleccionado  ' onClick={props.fn} >Ya tienes una cuenta?<br/> Haz click aquí para iniciar sesión!</p>
    }

    return (
        
      <span className='border-b-4 border-moradoLight'>{mensaje}</span> 

    );
}


export default ToggleForm;