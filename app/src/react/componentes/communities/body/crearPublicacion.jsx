import React from "react";
import { TextField } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import theme from '../../../../assets/material-ui-themes/DefaultTheme'
import Button from 'react-bootstrap/Button';
import { subirPublicacion } from "../../../paginas/subirPublicacion";
export const CrearPublicacion = () => {
const $ = require('jquery');
let comunidad = localStorage.getItem('cid');
let user = JSON.parse(sessionStorage.getItem('user')).username;
    return(
        
        <div id="createForm">
        <ThemeProvider theme= {theme}>
           <div> <TextField style={{}}  color="secondary" id='titulo' multiline label="Titulo"></TextField></div>
           <div><TextField rows={5} color="secondary" id='cuerpo' multiline label="Cuerpo" variant="outlined"></TextField></div>
           <input type="file" id='imagen' accept="image/png, image/gif, image/jpeg" />
           <Button onClick={()=> subirPublicacion($('#titulo').val(),$('#cuerpo').val(),null,user,comunidad)}>Enviar</Button>
           </ThemeProvider>
        </div>


    )


}