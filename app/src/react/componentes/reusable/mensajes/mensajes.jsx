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
import newMessage from "../../../../assets/audio/newMessage.mp3";
import { ReadMessages } from "../../../../js/ReadMessages";
import backIcon from "../../../../assets/img/backIcon.png";
import Imagen from "../img";
import { leerMensaje } from "../../../../js/leerMensaje";
const $ = require('jquery');
export const Mensajes = (props) => {
const [unreadMessages, setUnreadMessages] = useState([]);
const username = JSON.parse(sessionStorage.getItem('user')).username;
const selectedChat = useSelector(state => state.selectedChat.value);
const incomingMessage = useSelector(state => state.incomingMessage.value);
const dispatch = useDispatch();
const [arrChats,setArrChats] = useState([]);
const chatsRef = useRef(null);
let audio = new Audio(newMessage);



stompClient.onConnect = (frame) => {
  
  stompClient.subscribe('/'+username,(message) => {
      let mensaje = JSON.parse(message.body);
      
      audio.play();
     
      cambiarUltimoMensajeDelChat(mensaje);
  });

  console.log("subscribed to "+username)

};


useEffect(() => {
  incomingMessage!=null  && incomingMessage.messageSender!= selectedChat? (function(){
    let chatToBeUpdated =  $("#"+incomingMessage.messageSender+" #chatLevelNotification");
    chatToBeUpdated.text(Number.isInteger(parseInt(chatToBeUpdated.text()))? parseInt(chatToBeUpdated.text())+1 : 1); 
  
    console.log(incomingMessage);

  })()
  
   : incomingMessage!=null && incomingMessage.messageSender == selectedChat ? leerMensaje(incomingMessage.messageId) : null ;
  
  },[incomingMessage]);


    useEffect(()=>{
    
    $("#mensajes").hide();
    stompClient.activate();
    RetrieveChats().then( r => {
      
    let tempArr = [];
      r.data.forEach(e=>{
        
    
        
    
        tempArr.push(<Chat unreadMessages={e[4]}   onClick={() => {

          

          if($("#chatActual").css("display")=="none"){
            $("#chatList").css("display","none");
            $("#chatActual").css("display","block");
          }


          dispatch(change(e[0]))
          $("#"+e[0]+" #chatLevelNotification").text("");
          ReadMessages(e[0],username);
          }} interactuer={e[0]} lastInteraction={e[1]}  lastMessage={e[3]}/>);
    
    
    });
    
    
    setArrChats(tempArr);
    });
     

    },[]);



    function cambiarUltimoMensajeDelChat(mensaje){
      
      let chatAActualizar =(mensaje.messageSender)==(username) ? mensaje.messageReceiver:(mensaje.messageSender);
      
      dispatch(update(mensaje));  
      if(($("#"+chatAActualizar).html()!=undefined)){
      $("#"+chatAActualizar+" #lastMessage").html(() => mensaje.messageBody.length > 25 ? mensaje.messageBody.substring(0,25) +"...": mensaje.messageBody);
      $("#"+chatAActualizar+" #lastInteraction").text(formatearFecha(new Date(mensaje.messageDate)));
      $("#"+chatAActualizar).css("order", parseInt($('#chats :first-child').css("order"))-1);
    
      

      } else {
        
        

        setArrChats(actualState => [



          <Chat
            unreadMessages={null}
            onClick={() => {

              if($("#chatActual").css("display")=="none"){
              $("#chatList").css("display","none");
              $("#chatActual").css("display","block");
          }

               dispatch(change(mensaje.messageSender == username ? mensaje.messageReceiver : mensaje.messageSender))
               
               
               
               
               }}
            interactuer={mensaje.messageSender == username ? mensaje.messageReceiver : mensaje.messageSender}
            lastInteraction={mensaje.messageDate}
            lastMessage={mensaje.messageBody}
          />,
          ...actualState
        ]);
        
        


      }

    }

 

    return( 
  
      <div 
      style={{ border: '1px solid #ff8c00', height: '30rem', fontSize: '1rem', position:'fixed', bottom:'0', right:'0' }} 
      className=" flex w-2/4 bg-moradoOscuro rounded-lg" 
      id='mensajes'
    >
      <div 
        style={{ direction: "rtl", borderRight: '1px solid #ff8c00' }} 
        className="flex flex-col items-center overflow-auto p-3 w-2/6" 
        id='chatList'
      >
        <div className="flex flex-row items-center justify-center w-full">
          <NuevoChat chatsRef={chatsRef} />  
          <Imagen 
            onclick={() => {
              $("#mensajes").css("display", "none");
            }} 
            style={{ width: '10%', height: '2rem', display: 'none' }} 
            clase="backIcon" 
            ruta={backIcon}
          />
        </div>
        <div key="tupu" id="chats" className="flex w-full flex-col">
          {arrChats}  
        </div>   
      </div>
      <div id="chatActual" className="p-2 bg-moradoOscuro w-4/6">
        <ChatActual 
          stompClient={stompClient}  
          cambiarUltimoMensajeDelChat={cambiarUltimoMensajeDelChat}
        />
      </div>
    </div>
    
     
    );


}