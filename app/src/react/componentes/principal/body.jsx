import React from 'react';
import imagen from '../../../assets/img/LogoDebateo.PNG'
// import '../../../assets/styles/Principal.css';
import Carusel from './body/carusel';
// import RegisterForm from './body/formularioRegistro';
import RespuestaServidor from './body/respuestasServidor';
import { useState } from 'react';
import Formulario from './body/Formulario';


const Body = () => {

   

    return (
        
        <div id="body">
       
        <div id="carusel">
        <Carusel/>
       
         </div>  
        
        <div  id="form">
        <Formulario/>
        </div>

        </div>
    );

}

export default Body;