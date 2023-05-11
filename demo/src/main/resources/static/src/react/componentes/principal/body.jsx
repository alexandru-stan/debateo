import React from 'react';
import imagen from '../../../assets/img/LogoDebateo.PNG'
import '../../../assets/styles/Principal.css';
import Carusel from './carusel';
import Formulario from './formularioRegistro';
import RespuestaServidor from './respuestasServidor';


const Body = () => {

    return (
        
        <div id="body">
       
        <div id="carusel">
        <Carusel/>
         </div>  
        
        <div  id="formularioRegistro">
        <Formulario/>
        </div>

        </div>
    );

}

export default Body;