import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
export const AddComment = ({writable}) => {


  const textareaRef = useRef(null)

  useEffect(()=>{

    textareaRef.current ? textareaRef.current.focus() : null

  },[writable])

    return (
        
        
           writable ? 
           
           <textarea id='uploadComment' className="flex w-full   justify-center items-center p-2"
           ref = {textareaRef}
           style={{
            background: 'none',
            color: 'white',
            font: 'none',
            lineHeight: 'inherit',
            padding: 0,
            margin: 0,
            border:'',
           
            
            
        }}></textarea>

           
           
           :  <p>Añade un comentario...</p> 
          

      
       
    )


}