import React from "react";
// import theme from "../../../../assets/material-ui-themes/DefaultTheme";
import Imagen from '../img.jsx';
import Logo from '../../../../assets/img/LogoDebateo.PNG';
import IconoMenuMovil from "../../../../assets/img/menuIcons/menuMovil.png"
import { SearchBar } from "../SearchBar";
import {Menu} from "./menu";

const Header = () => {
    
    return (<>
        
        <div className=" pt-2 pb-2  items-center bg-moradoOscuro  m-0 sticky top-0 justify-center  z-30 flex w-full  border-b-solid border-b-2 border-b-naranjaMolon " id='header-feed'>
            <div id="header-logo" className="    w-2/6 items-center  flex justify-center">
            <Imagen  ruta = {Logo} clase=' w-2/6    '/>
            <Imagen style={{height:'3rem'}} id='menuMovil' clase='hidden ml-auto' ruta={IconoMenuMovil} /></div>
            <SearchBar/>
            <Menu/>
            
        </div>
        </>
    );
}

export default Header;