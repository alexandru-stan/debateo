import React, { useState,useEffect,useRef } from "react";
import formatearFecha from "../../../../../js/formatearFecha";
import { useSelector } from "react-redux";
import { formatImage } from "../../../../../js/imageFormatting";



export const Chat = (props) => {

  const unreadMessages = useSelector( state => state.unreadMessages.value);
  const hola = useRef();
  const $ = require('jquery');
  const fechaMensaje = new Date(props.lastInteraction);
  const fechaMostrada = formatearFecha(fechaMensaje);
  const incomingMessage = useSelector(state => state.incomingMessage.value);
  const selectedChat = useSelector( state => state.selectedChat.value)
  const [unread,setUnread] = useState(0);



  

  useEffect(()=>{



    incomingMessage!=null ? 
    
    incomingMessage.messageSender==props.interactuer && incomingMessage.messageSender != selectedChat ?
    
        setUnread(unread+1)
        
      :null
    :null
  
    

  },[incomingMessage])

  useEffect(()=> {

    selectedChat==props.interactuer ? 
    setUnread(0) : 
    null


  },[selectedChat])


  useEffect(() =>  {

    unreadMessages!=null ?
      unreadMessages[props.interactuer]!=undefined ? setUnread(unreadMessages[props.interactuer]) : null
    :null

  },[unreadMessages]);

   

  useEffect(() => {
  hola.current.parentElement.parentElement.style.order=1;// Now, it should log the DOM element when the component mounts
 

  }, []); 

    return(
    <div key={props.interactuer} id={props.interactuer} style={{height:'5rem', direction:'ltr' }} onClick={props.onClick} className='chat  bg-moradoFondo hover:cursor-pointer  flex-col flex m-2 justify-between rounded-lg  hover:bg-moradoLight hover:cursor '>
        <div id='chatInfo' className='flex justify-between ' >
        <div className="flex items-center">
        <img style={{width:'2rem', height:'2rem', borderRadius:'100%'}} src={ props.profileImage }></img>
          <div style={{fontSize:'0.8rem',whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis'  }} className='nombreUsuario p-2 text-naranjaMolon '>
  
  {props.interactuer}</div>
  </div>
          <div ref={hola} id="lastInteraction" style={{fontSize:'0.6rem'}} className='p-2  text-naranjaMolon'>{fechaMostrada}</div>
        </div>
        <div className="flex flex-row items-center">
        <div id="lastMessage" style={{textOverflow:'ellipsis',whiteSpace:'nowrap',overflow:'hidden'}} className=' w-5/6 text-left p-2'> {props.lastMessage}</div>
        {/* <div style= {{width:'10%'}} className="m-auto bg-moradoLight rounded-full text-center " id="chatLevelNotification">{props.unreadMessages>0?props.unreadMessages:null}</div> */}
        <div style= {{width:'10%'}} className="m-auto bg-moradoLight rounded-full text-center " id="">{unread>0?unread:null}</div> 
        </div>
    </div>
    );
}