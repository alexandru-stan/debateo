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
        <div id='userData' className='bg-zinc-950 p-2  w-full'>
    <div className='flex bg-red-950 justify-center '>
  <div className="input border w-2/4 flex justify-center">
    <p className="text-naranjaMolon">Nombre de usuario: </p>
    <p>{user.username}</p>
  </div>
  
  <div className="input w-2/4 border w-2/4 flex justify-center">
    <p  className="text-naranjaMolon">Nombre:</p>
    <p className="">{user.name}</p>
  </div>
</div>
<div className='flex justify-around'>
  <div className="input flex border w-2/4 flex justify-center">
    <p  className="text-naranjaMolon">Correo:</p>
    <p className="">{user.mail}</p>
  </div>

  <div className="input flex border w-2/4 flex justify-center">
    <p  className="text-naranjaMolon">Fecha de nacimiento:</p>
    <p className="">{user.birth_date}</p>
  </div>
  </div>
  {/* <Button onClick={ModifyUserData}>Realizar modificaciones</Button> */}
</div>
    )


}