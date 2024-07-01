import React, { useState,useEffect,useRef } from "react";
import formatearFecha from "../../../../../js/formatearFecha";
import { useSelector } from "react-redux";

export const Chat = (props) => {

  const hola = useRef();
  const $ = require('jquery');
  const fechaMensaje = new Date(props.lastInteraction);
  const fechaMostrada = formatearFecha(fechaMensaje);
  const incomingMessage = useSelector(state => state.incomingMessage);
  



 
   

  useEffect(() => {
  hola.current.parentElement.parentElement.style.order=1;// Now, it should log the DOM element when the component mounts
 

  }, []); 

    return(
    <div key={props.interactuer} id={props.interactuer} style={{height:'5rem', direction:'ltr' }} onClick={props.onClick} className='chat  bg-moradoFondo hover:cursor-pointer  flex-col flex m-2 justify-between rounded-lg  hover:bg-moradoLight hover:cursor '>
        <div id='chatInfo' className='flex justify-between ' >
          <div className='nombreUsuario p-2 text-naranjaMolon '>{props.interactuer}</div>
          <div ref={hola} id="lastInteraction" className='p-2 text-naranjaMolon'>{fechaMostrada}</div>
        </div>
        <div className="flex flex-row items-center">
        <div id="lastMessage" style={{textOverflow:'ellipsis',whiteSpace:'nowrap',overflow:'hidden'}} className=' w-5/6 text-left p-2'> {props.lastMessage}</div>
        <div style= {{width:'10%'}} className="m-auto bg-moradoLight rounded-full text-center " id="chatLevelNotification">{props.unreadMessages>0?props.unreadMessages:null}</div>
        </div>
    </div>
    );
}