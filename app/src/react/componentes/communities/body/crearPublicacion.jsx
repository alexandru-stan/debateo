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
        
        <div className="w-full justify-center flex"> 
        <div className=" w-3/6 mt-postMT flex justify-center  " id="createForm">
        
        <form className="flex w-full  flex-col items-center  m-2 text-white" ref={form} id="form">
           <input name="titulo" placeholder="Título de la publicación"  className="w-full m-2 bg-moradoLight text-white px-4 py-2 rounded-lg placeholder-white focus:outline-none focus:ring-2 focus:ring-naranjaMolon"   ></input>
           <textarea  placeholder="Cuerpo de la publicación"
        className="m-2 w-full bg-moradoLight text-white px-4 py-2 rounded-lg placeholder-white focus:outline-none focus:ring-2 focus:ring-naranjaMolon" name='cuerpo' rows={5} id='cuerpo'></textarea>
           <label for="imagen" class="block text-naranjaMolon text-sm font-bold mb-2">
           Selecciona una imagen
           <input name='image' type="file" id='imagen' accept="image/png, image/gif, image/jpeg" className="hover:cursor-pointer appearance-none  text-naranjaMolon text-sm font-bold  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
           </label>
    {/* <img src={image} alt="aaa"></img> */}
      
    <button onClick={(()=>subirPublicacion(form,props.communityId,user) ) }className=" w-2/4 hover:bg-moradoLight  rounded-md p-2  border-2 border-naranjaMolon bg-moradoFondo placeholder-gray-400  placeholder-gray-400 ">Crear</button>
        </form>
          
        </div>
</div>

    )


}