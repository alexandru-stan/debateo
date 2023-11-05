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
        
        <div className="mt-postMT flex justify-center " id="createForm">
        <ThemeProvider theme= {theme}>
        <form className="flex flex-col items-center w-full m-2 text-white" ref={form} id="form" onSubmit={ (event) => {event.preventDefault();  subirPublicacion(form,props.communityId,user)}}>
           <input  className=" font-bold m-2 bg-naranjaMolon w-1/4 h-2/6" placeholder="Título" type="text" name='titulo' id='titulo'></input>
           <textarea className=" font-bold m-2 bg-naranjaMolon w-1/4 h-2/6" placeholder="Cuerpo" name='cuerpo' rows={5} id='cuerpo'></textarea>
           <input name='image' type="file" id='imagen' accept="image/png, image/gif, image/jpeg" />
    {/* <img src={image} alt="aaa"></img> */}
      
           <Button type="submit">Enviar</Button>
        </form>
           </ThemeProvider>
        </div>


    )


}