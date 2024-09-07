import React from "react";
// import theme from "../../../../assets/material-ui-themes/DefaultTheme";
import Imagen from '../img.jsx';
import Logo from '../../../../assets/img/LogoDebateo.png';
import IconoMenuMovil from "../../../../assets/img/menuIcons/menuMovil.png"
import { SearchBar } from "../SearchBar";
import burger from "../../../../assets/img/burger.png"
import {Menu} from "./menu";
import $ from 'jquery'; 
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { update } from "../../../../redux-store/slices/LateralMenuVisibility.js";
const Header = () => {

    const lateralMenuVisibility = useSelector(state => state.lateralMenuVisibilty.value);
    const dispatch = useDispatch();
    const $ = require("jquery");
  
    return (<>
        
        <div className=" p-2   items-center bg-moradoOscuro  m-0 sticky top-0 justify-center  z-30 flex w-full  border-b-solid border-b-2 border-b-moradoLight " id='header-feed'>
            <Imagen clase={"hover:cursor-pointer hover:bg-moradoLight mr-auto "} onclick={()=> lateralMenuVisibility == 'block' ? dispatch(update("none")) : dispatch(update("block"))  } id='burger-menu' style={{width:'5%'}} ruta={burger}/>
            <Imagen id='logoDebateo' ruta = {Logo} style={{width:'5%',marginLeft:'0%'}} clase='    '/>
            <SearchBar/>
    
        </div>
        </>
    );
}

export default Header;