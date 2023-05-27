import React from "react";
import theme from "../../../assets/material-ui-themes/DefaultTheme";
import Imagen from '../reusable/img.jsx';
import Logo from '../../../assets/img/LogoDebateo.PNG';
import { SearchBar } from "../reusable/SearchBar";
import {Menu} from "./header/menu";

const Header = () => {
    return (
        <div id='header-feed'>
            <Imagen ruta = {Logo}/>
            <SearchBar/>
            <Menu/>
            
        </div>
    );
}

export default Header;