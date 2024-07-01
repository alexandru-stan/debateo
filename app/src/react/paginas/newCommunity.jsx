import React from "react";
import Header from "../../react/componentes/reusable/header/header";
import { useRef } from "react";
import { createCommunity } from "../../js/createCommunity";
import { useNavigate } from "react-router-dom";
import {Mensajes} from "../componentes/reusable/mensajes/mensajes";

export const NewCommunity = () => {
    const nav = useNavigate();    
    let form = useRef(null);


    return ( 
    
      
    
    <div id='new' className="w-full flex flex-col items-center">
      <Mensajes/>
            <Header/>

          
            <div className="w-full  flex justify-center " style={{marginTop:"10%"}} id="createForm">
  
        <form className=" w-3/6   flex items-center justify-center flex-col" ref={form} id="formCrearComunidad" onSubmit={ (event) => {event.preventDefault(); createCommunity(form).then((response)=> {localStorage.setItem('cid',response); nav("/feed")}); }}>
       
    <input
        placeholder="Nombre de la comunidad"
        className=" w-full m-2 bg-moradoLight text-white px-4 py-2 rounded-lg placeholder-white focus:outline-none focus:ring-2 focus:ring-naranjaMolon"
        type="text"
        required
        name='name'
        id='titulo'
    />


    <textarea
        placeholder="Descripción de la comunidad"
        className="m-2 w-full bg-moradoLight text-white px-4 py-2 rounded-lg placeholder-white focus:outline-none focus:ring-2 focus:ring-naranjaMolon"
        required
        name='description'
        id='cuerpo'
        rows={4} // Aquí puedes ajustar la altura cambiando el número de filas
    ></textarea>

        
<label for="imagen" class="block text-naranjaMolon text-sm font-bold mb-2">
  Selecciona una imagen:
  <input required name="image" type="file" id="imagen" accept="image/png, image/gif, image/jpeg" class="hover:cursor-pointer appearance-none  text-naranjaMolon text-sm font-bold  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
</label>





           <button className=" w-2/4 hover:bg-moradoLight  rounded-md p-2  border-2 border-naranjaMolon bg-moradoFondo placeholder-gray-400  placeholder-gray-400 ">Crear</button>
      
          
        </form>
        </div>
        </div>
            
    )
}