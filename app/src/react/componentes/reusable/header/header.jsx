import React from "react";
// import theme from "../../../../assets/material-ui-themes/DefaultTheme";
import Imagen from '../img.jsx';
import Logo from '../../../../assets/img/LogoDebateo.PNG';
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
        
        <div className=" pb-2   items-center bg-moradoOscuro  m-0 sticky top-0 justify-center  z-30 flex w-full  border-b-solid border-b-2 border-b-moradoLight " id='header-feed'>
            <Imagen onclick={()=> lateralMenuVisibility ? dispatch(update(false)) : dispatch(update(true))  } id='burger-menu' style={{width:'5%'}} ruta={burger}/>
            <Imagen id='logoDebateo' ruta = {Logo} style={{width:'5%',marginLeft:'0%'}} clase='    '/>
            {/* <Imagen onclick={() => {$("#menu").css("display","flex")}} style={{height:'3rem'}} id='menuMovil' clase='hidden ml-auto' ruta={IconoMenuMovil} /> */}
            <SearchBar/>
            {/* </div> */}
            
            {/* <Menu/> */}
            
        </div>
        </>
    );
}

export default Header;