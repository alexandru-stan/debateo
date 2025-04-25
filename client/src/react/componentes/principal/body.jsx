import React from 'react';
import imagen from '../../../assets/img/LogoDebateo.png'
// import '../../../assets/styles/Principal.css';
import Carusel from './body/carusel';
// import RegisterForm from './body/formularioRegistro';
import RespuestaServidor from './body/respuestasServidor';
import { useState } from 'react';
import Formulario from './body/Formulario';


const Body = () => {

   

    return (
        
        <div className=' mt-5  w-full flex h-max justify-around items-center' id="body">
       
       
        <Carusel/>
        <Formulario/>
       

        </div>
    );

}

export default Body;