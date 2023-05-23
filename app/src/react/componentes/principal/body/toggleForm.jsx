import React from 'react';

const ToggleForm = (props) => {

    function tumadre(){
        console.log("Ok");
    }
let mensaje;
    if(props.hasAccount){
        mensaje = <h5 onClick={props.fn} >No tienes una cuenta? Haz click aquí para registrarte!</h5>
       
    } else {
        mensaje = <h5 onClick={props.fn} >Ya tienes una cuenta? Haz click aquí para iniciar sesión</h5>
    }

    return (

       mensaje

    );
}


export default ToggleForm;