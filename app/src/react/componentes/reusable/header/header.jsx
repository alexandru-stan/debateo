import React from "react";
// import theme from "../../../../assets/material-ui-themes/DefaultTheme";
import Imagen from '../img.jsx';
import Logo from '../../../../assets/img/LogoDebateo.PNG';
import IconoMenuMovil from "../../../../assets/img/menuIcons/menuMovil.png"
import { SearchBar } from "../SearchBar";
import {Menu} from "./menu";
import $ from 'jquery'; 
const Header = () => {
    
    const $ = require("jquery");

    return (<>
        
        <div className=" pb-2   items-center bg-moradoOscuro  m-0 sticky top-0 justify-center  z-30 flex w-full  border-b-solid border-b-2 border-b-naranjaMolon " id='header-feed'>
            {/* <div id="header-logo" className=" bg-zinc-950   w-4/6 items-center  flex justify-around"> */}
            <Imagen  ruta = {Logo} style={{width:'10%',marginRight:'auto',marginLeft:'10%'}} clase='    '/>
            {/* <Imagen onclick={() => {$("#menu").css("display","flex")}} style={{height:'3rem'}} id='menuMovil' clase='hidden ml-auto' ruta={IconoMenuMovil} /> */}
            <SearchBar/>
            {/* </div> */}
            
            <Menu/>
            
        </div>
        </>
    );
}

export default Header;