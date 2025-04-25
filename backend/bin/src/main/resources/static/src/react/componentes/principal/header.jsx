import React from 'react';
import imagen from '../../../assets/img/LogoDebateo.PNG'
import Logo from '../atomos/img';
import '../../../assets/styles/Principal.css';
import '../../../assets/img/LogoDebateo.PNG'
import axios from 'axios';
import Formulario from "./formularioLogin";




const Header = () => {


    

    return (
        <div id="header">
         <Logo ruta={imagen}/>
         <Formulario/>
         
         
        </div>
    );

}

export default Header;