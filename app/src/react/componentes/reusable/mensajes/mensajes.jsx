import React, { useEffect, useState } from "react";
import { Chat } from "./children/chat";
import {NuevoChat} from "./children/nuevoChat";
import RetrieveChats from "../../../../js/RetrieveChats";
import { ChatActual } from "./children/chatActual";
import {useSelector, useDispatch} from "react-redux";
import { change } from "../../../../redux-store/slices/SelectedChatSlice";
import { stompClient } from "../../../../webSocketTesting/webSocket";
import { update } from "../../../../redux-store/slices/IncomingMessage";
import formatearFecha from "../../../../js/formatearFecha";
import { useCallback } from "react";
import { useRef } from "react";
const $ = require('jquery');
export const Mensajes = (props) => {
const [unreadMessages, setUnreadMessages] = useState([]);
const username = JSON.parse(sessionStorage.getItem('user')).username;
const selectedChat = useSelector(state => state.selectedChat.value);
const incomingMessage = useSelector(state => state.incomingMessage.value);
const dispatch = useDispatch();
const [arrChats,setArrChats] = useState([]);
const chatsRef = useRef(null);




stompClient.onConnect = (frame) => {
  console.log('Connected: ' + frame);
  stompClient.subscribe('/'+username,(message) => {
      let mensaje = JSON.parse(message.body);
      console.log(mensaje);
      cambiarUltimoMensajeDelChat(mensaje);
  });

  console.log("subscribed to "+username)

};


useEffect(() => {
  incomingMessage!=null ? (function(){
  let chatToBeUpdated =  $("#"+incomingMessage.messageSender+" #chatLevelNotification");
    chatToBeUpdated.text(Number.isInteger(parseInt(chatToBeUpdated.text()))? parseInt(chatToBeUpdated.text())+1 : 1); 
  
  })()
 : null;
  
  },[incomingMessage]);


    useEffect(()=>{
    
    $("#mensajes").hide();
    stompClient.activate();
    RetrieveChats().then( r => {
      console.log("A");
    let tempArr = [];
      r.data.forEach(e=>{
        
    
    
        tempArr.push(<Chat unreadMessages={0}   onClick={() => dispatch(change(e[0]))} interactuer={e[0]} lastInteraction={e[1]} lastMessage={e[3]}/>);
    
    
    });
    
    
    setArrChats(tempArr);
    });
     

    },[]);



    function cambiarUltimoMensajeDelChat(mensaje){
      let chatAActualizar =(mensaje.messageSender)==(username) ? mensaje.messageReceiver:(mensaje.messageSender);
      console.log(arrChats);
      dispatch(update(mensaje));  
      if(($("#"+chatAActualizar).html()!=undefined)){
      $("#"+chatAActualizar+" #lastMessage").html(() => mensaje.messageBody.length > 25 ? mensaje.messageBody.substring(0,25) +"...": mensaje.messageBody);
      $("#"+chatAActualizar+" #lastInteraction").text(formatearFecha(new Date(mensaje.messageDate)));
      $("#"+chatAActualizar).css("order", parseInt($('#chats :first-child').css("order"))-1);
    
      console.log("holaaa");

      } else {
        console.log(arrChats);
        

        setArrChats(actualState => [
          <Chat
            unreadMessages={0}
            onClick={() => dispatch(change(mensaje.messageSender == username ? mensaje.messageReceiver : mensaje.messageSender))}
            interactuer={mensaje.messageSender == username ? mensaje.messageReceiver : mensaje.messageSender}
            lastInteraction={mensaje.messageDate}
            lastMessage={mensaje.messageBody}
          />,
          ...actualState
        ]);
        
        


      }

    }

 

    return( 
  
     <div style={{border:'1px solid #ff8c00',height:'30rem', fontSize:'1rem', position:'fixed', top:'45%', left:'50%' }} className="flex w-2/4 bg-moradoOscuro rounded-lg " id='mensajes'>
     
        <div style={{direction:"rtl"}} className=" flex flex-col  overflow-auto p-3 w-2/6" id='chatList'>
        <NuevoChat chatsRef={chatsRef} />  
        <div  key="tupu" id="chats" className="flex flex-col">
        {arrChats}  
        
        </div>   
        </div>
        <div  className=" bg-moradoFondo w-4/6">
           <ChatActual stompClient={stompClient}  cambiarUltimoMensajeDelChat={cambiarUltimoMensajeDelChat}/>
        </div>


     </div>
     
    );


}