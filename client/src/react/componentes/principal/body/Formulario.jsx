import React from 'react';
import FormularioLogin from './Formulario/formularioLogin';
import FormularioRegistro from './Formulario/formularioRegistro';
import { useState } from 'react';

const Formulario = () => {
    const [hasAccount, toggleForm] = useState(false);
    
    


    function cambiarFormulario() {
        
        toggleForm(!hasAccount);
    }


    if(hasAccount){
        return <FormularioLogin fn={cambiarFormulario} hasAccount = {hasAccount}  />
    } else {
        return <FormularioRegistro  fn={cambiarFormulario}  hasAccount = {hasAccount}/>
    }

    



}


export default Formulario;