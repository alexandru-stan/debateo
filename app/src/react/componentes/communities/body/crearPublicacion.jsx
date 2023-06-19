import React, { useEffect } from "react";
import { TextField } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import theme from '../../../../assets/material-ui-themes/DefaultTheme'
import Button from 'react-bootstrap/Button';
import { subirPublicacion } from "../../../../js/subirPublicacion";
import { useState } from "react";
import { useRef } from "react";
export const CrearPublicacion = (props) => {
    const [image,setImage ] = useState(null);
let form = useRef();    
const $ = require('jquery');

let user = JSON.parse(sessionStorage.getItem('user')).username;







    return(
        
        <div id="createForm">
        <ThemeProvider theme= {theme}>
        <form ref={form} id="form" onSubmit={ (event) => {event.preventDefault();  subirPublicacion(form,props.communityId,user)}}>
           <div> <TextField name='titulo' style={{}}  color="secondary" id='titulo' multiline label="Titulo" variant='filled'></TextField></div>
           <div><TextField  name='cuerpo' rows={5} color="secondary" id='cuerpo' multiline label="Cuerpo" variant="filled"></TextField></div>
           <input name='image' type="file" id='imagen' accept="image/png, image/gif, image/jpeg" />
    {/* <img src={image} alt="aaa"></img> */}
      
           <Button type="submit">Enviar</Button>
        </form>
           </ThemeProvider>
        </div>


    )


}