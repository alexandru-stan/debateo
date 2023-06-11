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
        <ThemeProvider  theme={theme}>
        <div id='userData'>
        
        
        <h4>Bienvenido a tu perfil, {user.name}.</h4>
       <div>
           <TextField {...disabled} className="input" color='secondary' label="Nombre de usuario" value={user.username}/>
           <TextField  className="input"  color='secondary' label="Nombre" variant='standard'   value={user.username}/>
           </div>

           <div>
            <TextField className="input"   label="Correo" color="secondary" variant="outlined" value={user.mail}/>
           <TextField  className="input"  label="Fecha de nacimiento" color="secondary" variant="outlined" value={user.birth_date}/>
           </div>
          {/* <Button onClick={ModifyUserData}>Realizar modificaciones</Button> */}
      
        </div>
        </ThemeProvider>
    )


}