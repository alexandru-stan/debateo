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
        
        <div className=" mt-postMT flex justify-center " id="createForm">
        
        <form className="flex w-4/6  flex-col items-center  m-2 text-white" ref={form} id="form" onSubmit={ (event) => {event.preventDefault();  subirPublicacion(form,props.communityId,user)}}>
           <input name="titulo" placeholder="Título de la publicación"  className="w-3/6 m-2 bg-moradoLight text-white px-4 py-2 rounded-lg placeholder-white focus:outline-none focus:ring-2 focus:ring-naranjaMolon"   ></input>
           <textarea  placeholder="Descripción de la comunidad"
        className="m-2 w-3/6 bg-moradoLight text-white px-4 py-2 rounded-lg placeholder-white focus:outline-none focus:ring-2 focus:ring-naranjaMolon" name='cuerpo' rows={5} id='cuerpo'></textarea>
           <input name='image' type="file" id='imagen' accept="image/png, image/gif, image/jpeg" />
    {/* <img src={image} alt="aaa"></img> */}
      
          <input type='submit'></input>
        </form>
          
        </div>


    )


}