import React from "react";
// import theme from "../../../../assets/material-ui-themes/DefaultTheme";
import Imagen from '../img.jsx';
import Logo from '../../../../assets/img/LogoDebateo.PNG';
import { SearchBar } from "../SearchBar";
import {Menu} from "./menu";

const Header = () => {
    
    return (
        <div className="   bg-moradoOscuro  sticky top-0  z-30 flex w-full h-cabecera border-b-solid border-b-2 border-b-naranjaMolon " id='header-feed'>
            <div className="  w-2/6 h-full flex justify-center"><Imagen ruta = {Logo} clase=' w-3/6    '/></div>
            <SearchBar/>
            <Menu/>
            
        </div>
    );
}

export default Header;