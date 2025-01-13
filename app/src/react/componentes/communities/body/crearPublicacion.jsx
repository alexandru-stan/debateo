import React, { useEffect } from "react";
import { TextField } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import theme from '../../../../assets/material-ui-themes/DefaultTheme'
import { assign } from "../../../../redux-store/slices/PopUp";
import { useDispatch } from "react-redux";
import { subirPublicacion } from "../../../../js/subirPublicacion";
import { useState } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Info } from "../../reusable/popup/Info";
export const CrearPublicacion = (props) => {
    const [image,setImage ] = useState(null);
let form = useRef();    
const $ = require('jquery');
const nav = useNavigate();
const titleRef = useRef();
const bodyRef = useRef();
let user = JSON.parse(localStorage.getItem('userData')).username;

const dispatch = useDispatch();

   function showInfo(){
        dispatch(assign({
            block:false,
            value:<Info message={"La imagen que intentas subir es demasiado pesada. El tamaño máximo permitido es de 25 MB"} success={false} />
        }))
     
        setTimeout(()=>{dispatch(assign(null))},3000);

    }

    const[value,setValue] = useState(0);
    const handleChange = (e) => {
       
        setValue(e.target.value.length);
    }



    return(
        
        <div className="w-full justify-center flex"> 
        <div className=" w-3/6 mt-postMT flex justify-center  " id="createForm">
       
        <form onSubmit={event => event.preventDefault()} className="flex w-full   flex-col items-center  m-2 text-white" ref={form} id="form">
        <p className=" text-left  w-full mb-5 text-3xl text-naranjaMolon Kanit ">Crear publicación</p>
           <input required ref={titleRef} onChange={handleChange} maxLength={60}  name="titulo" placeholder="Título de la publicación"  className="w-full m-2 bg-moradoLight text-white px-4 py-2 rounded-lg placeholder-white "   ></input>
           <div className="w-full"><sub style={{textAlign:'left', color:value==60?"red":"white"}}>{value}/60</sub></div>
           <textarea ref={bodyRef} required placeholder="Cuerpo de la publicación"
        className="m-2 w-full bg-moradoLight text-white px-4 py-2 rounded-lg placeholder-white focus:outline-none focus:ring-2 focus:ring-naranjaMolon" name='cuerpo' rows={5} id='cuerpo'></textarea>
           <label htmlFor="imagen" className="block text-naranjaMolon text-sm font-bold mb-2">
           Selecciona una imagen
           <input name='image' type="file" id='imagen' accept="image/png, image/gif, image/jpeg" className="hover:cursor-pointer appearance-none  text-naranjaMolon text-sm font-bold  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
           </label>
    {/* <img src={image} alt="aaa"></img> */}
      
    <button onClick={(()=>
        {
            console.log(bodyRef.current.value.length)
            console.log(titleRef.current.value.length)
        
        if(!bodyRef.current.value.length == 0 && !titleRef.current.value.length == 0){

            let response = subirPublicacion(form,props.communityId,user);
            response != null ? response.then(r => nav("/"+r.data+"/comments"))  : showInfo();
        
        }
        
    
      
        }
        
    
        
        )}className=" w-2/4 hover:bg-moradoLight  rounded-md p-2  border-2 border-naranjaMolon bg-moradoFondo placeholder-gray-400  placeholder-gray-400 ">Crear</button>
        
        
        </form>
          
        </div>
</div>

    )


}