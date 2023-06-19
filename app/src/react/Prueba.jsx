import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { formatImage } from "../js/imageFormatting";

export const Prueba = () => {
  
  const [imagen,setImagen] = useState(null);


  function get(){
 
    axios.get("http://localhost:8080/posts/2238").then(response => {
       
    setImagen(formatImage(response.data));

    })

  }



  
  
  
  
    return (
        <>
       <div onClick={get} > <h1 style={{backgroundColor:'red'}}>A</h1></div>
   <img src={imagen} alt='hola'></img> {imagen}
        </>
    )
}