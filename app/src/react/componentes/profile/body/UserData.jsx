import React from "react";
import { TextField } from "@mui/material";
import theme from "../../../../assets/material-ui-themes/DefaultTheme";
import {ThemeProvider} from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import Button from 'react-bootstrap/Button';
import { ModifyUserData } from "../../../../js/ModifyUserData";
export const UserData = () => {
let disabled='disabled';
    const $ = require('jquery');
    const [modify,setModify] = useState(false);
    let valorBoton;

   

   

 

    let user = JSON.parse(sessionStorage.getItem('user'));
console.log(user);
    return (
        <div id='userData'>
  <div className="input flex">
    <p className="">Nombre de usuario: </p>
    <p>{user.username}</p>
  </div>
  
  <div className="input flex">
    <p>Nombre:</p>
    <p className="">{user.username}</p>
  </div>

  <div className="input flex">
    <p>Correo:</p>
    <p className="">{user.mail}</p>
  </div>

  <div className="input flex">
    <p>Fecha de nacimiento:</p>
    <p className="">{user.birth_date}</p>
  </div>
  
  {/* <Button onClick={ModifyUserData}>Realizar modificaciones</Button> */}
</div>
    )


}