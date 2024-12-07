import React from "react";
import Header from "../../react/componentes/reusable/header/header";
import { useRef } from "react";
import { createCommunity } from "../../js/createCommunity";
import { useNavigate } from "react-router-dom";
import {Mensajes} from "../componentes/reusable/mensajes/mensajes";
import { LateralMenu } from "../componentes/reusable/lateralmenu/LateralMenu";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
export const NewCommunity = () => {
    const nav = useNavigate();    
    const [options,setOptions] = useState([]);
    let form = useRef(null);
    const messagesRender = useSelector(state => state.messagesRender.value);
    useEffect(()=> {
      
        localStorage.getItem('userData') == undefined ? nav("/") : null;
        
    })
    
    return ( 
    
      
        localStorage.getItem('userData') != undefined ?  
    <div id='new' className="w-full flex flex-col items-center">
     {/*messagesRender ? <Mensajes/>:null*/}
      {/* <LateralMenu/> */}
            <Header/>

          
            <div className="w-full  flex flex-col items-center " style={{marginTop:"10%"}} id="createForm">
            <p className=" w-3/6 mb-5 text-3xl text-naranjaMolon Kanit ">Crear comunidad</p>
        <form className=" w-3/6   flex items-center justify-center flex-col" ref={form} id="formCrearComunidad" onSubmit={ (event) => {event.preventDefault(); createCommunity(form).then((response)=> { localStorage.setItem('cid',response.data); nav("/community/"+response.data)}); }}>
       
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
<div className=" flex flex-col mt-2 mb-5 w-full " >
<label className="custom-checkbox p-2" >
<input id='privateCommunity' name='privateCommunity' onChange={() => setOptions(prevOptions => ({
    ...prevOptions,
    privateCommunity:!prevOptions.privateCommunity
}))} checked={options.privateCommunity?true:null} type='checkbox'/>
<span class="checkmark"></span>
Comunidad privada
</label>







<label className="custom-checkbox p-2" >
<input id='sensitiveContent' name='sensitiveContent' onChange={() => setOptions(prevOptions => ({
    ...prevOptions,
    sensitiveContent:!prevOptions.sensitiveContent
}))} checked={options.sensitiveContent?'checked':null} type='checkbox'/>
<span class="checkmark"></span>
Contenido sensible
</label>









{/* <label className="custom-checkbox p-2" >
<input id='blockNewSubscriptions' name='blockNewSubscriptions' onChange={() => setOptions(prevOptions => ({
    ...prevOptions,
    blockNewSubscriptions:!prevOptions.blockNewSubscriptions
}))} checked={options.blockNewSubscriptions?'checked':null} type='checkbox'/>
<span  class="checkmark"></span>
Suscripciones bloqueadas
</label>




<label className="custom-checkbox p-2" >
<input id='adminMode' name='adminMode' onChange={() => setOptions(prevOptions => ({
    ...prevOptions,
    adminMode:!prevOptions.adminMode
}))} checked={options.adminMode?'adminMode':null} type='checkbox'/>
<span class="checkmark"></span>
Modo administrador
</label> */}

</div> 



           <button className=" w-2/4 hover:bg-moradoLight  rounded-md p-2  border-2 border-naranjaMolon bg-moradoFondo placeholder-gray-400  placeholder-gray-400 ">Crear</button>
      
          
        </form>

        </div>
        </div>
     
     :null
     
    )
}