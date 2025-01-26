import React from "react";
// import theme from "../../../../assets/material-ui-themes/DefaultTheme";
import Imagen from '../img.jsx';
import Logo from '../../../../assets/img/LogoDebateo.png';
import IconoMenuMovil from "../../../../assets/img/menuIcons/menuMovil.png"
import { SearchBar } from "../SearchBar";
import burger from "../../../../assets/img/burger.png"
import {Menu} from "./menu";
import $ from 'jquery'; 
import noticias from "../../../../assets/img/news.png";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setLeftVisibility as updateLeft } from "../../../../redux-store/slices/LateralMenuVisibility.js";
import { setRightVisibility as updateRight } from "../../../../redux-store/slices/LateralMenuVisibility.js";
const Header = () => {

    const lateralMenuVisibility = useSelector(state => state.lateralMenuVisibilty.value.left);
    const lateralMenuVisibilityRight = useSelector(state => state.lateralMenuVisibilty.value.right);
    const dispatch = useDispatch();
    const $ = require("jquery");

    return (<>
        
        <div className=" p-2   items-center bg-moradoOscuro   m-0 sticky top-0 justify-center  z-30 flex w-full  border-b border-b-moradoLight " id='header-feed'>
            <Imagen clase={"hover:cursor-pointer hover:bg-moradoLight  "} onclick={()=> lateralMenuVisibility == 'block' ? dispatch(updateLeft("none")) : (function(){ dispatch(updateLeft("block")); dispatch(updateRight("none")); })()  } id='burger-menu' style={{width:'5%'}} ruta={burger}/>
            <Imagen id='logoDebateo' ruta = {Logo} style={{width:'5%',marginLeft:'0%'}} clase='    '/>
            <SearchBar/>
            <Imagen clase={"hover:cursor-pointer hover:bg-moradoLight  "} onclick={()=> lateralMenuVisibilityRight == 'flex' ? dispatch(updateRight("none")) : (function(){ dispatch(updateRight("flex")); dispatch(updateLeft("none")); })() } id='burger-menu' style={{width:'5%'}} ruta={noticias}/>
    
        </div>
        </>
    );
}

export default Header;