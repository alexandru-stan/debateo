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
import { getUnreadMessagesByChat } from "../../../../js/getUnreadMessagesByChat";
import { updateUnreadMessages } from "../../../../redux-store/slices/UnreadMessages";
import { formatImage } from "../../../../js/imageFormatting";
import { update as updateMessagesRender }  from "../../../../redux-store/slices/MessagesRender";
import SpinnerLoader from "../SpinnerLoader";
import { Spinner } from "react-bootstrap";
import { refreshProfileImage } from "../../../../js/RefreshProfileImage";
import test from "../../../../assets/img/admin.png";
const $ = require('jquery');
export const Mensajes = () => {
const username = JSON.parse(localStorage.getItem('userData')).username;
const selectedChat = useSelector(state => state.selectedChat.value);
const unreadMessages = useSelector(state => state.unreadMessages.value);
const dispatch = useDispatch();
const messagesRender = useSelector(state => state.messagesRender.value);
const incomingMessage = useSelector(state => state.incomingMessage.value);
const [spinner,setSpinner] = useState(true);
const [arrChats,setArrChats] = useState([]);
const chatsRef = useRef(null);

useEffect(()=> {
  incomingMessage!=null ? cambiarUltimoMensajeDelChat(incomingMessage) : null

},[incomingMessage])



let audio = new Audio(newMessage);



// stompClient.onConnect = (frame) => {
  
//   stompClient.subscribe('/'+username,(message) => {
//       let mensaje = JSON.parse(message.body);
      
//       audio.play();
//       dispatch(update(mensaje))
//       cambiarUltimoMensajeDelChat(mensaje);

    
//   });



// };


    useEffect(()=>{
      getUnreadMessagesByChat(username).then(response=> {
        let obj = {};
         response.data.forEach(e => obj[e.interactuer] = e.unreadMessages)
         dispatch(updateUnreadMessages(obj));
      
        });
  
      
        
    RetrieveChats().then( r => {
      setSpinner(false);
    let tempArr = [];
      r.data.forEach(e=>{

  
                tempArr.push(<Chat unreadMessages={e.null_isRead_count}   onClick={() => {

          
          
          if($("#chatActual").css("display")=="none"){
            $("#chatList").css("display","none");
            $("#chatActual").css("display","block");
          }


          dispatch(change(e.interactuer))
          ReadMessages(e.interactuer,username);
          }} profileImage = {formatImage(e.profile_image)} isConnected = {e.connected} interactuer={e.interactuer} lastInteraction={e.last_interaction} newChat={"ALUPIGUS"} key={e.message_id}  lastMessage={e.message_body}/>);
    
    
    });
    
    
    setArrChats(() => {
      
      return tempArr});



    });
     


    },[]);




    function cambiarUltimoMensajeDelChat(mensaje){
      
      let chatAActualizar = (mensaje.messageSender)==(username) ? mensaje.messageReceiver:(mensaje.messageSender);
      if(($("#"+chatAActualizar).html()!=undefined)){
      $("#"+chatAActualizar+" #lastMessage").html(() => mensaje.messageBody.length > 25 ? mensaje.messageBody.substring(0,25) +"...": mensaje.messageBody);
      $("#"+chatAActualizar+" #lastInteraction").text(formatearFecha(new Date(mensaje.messageDate)));
      $("#"+chatAActualizar).css("order", parseInt($('#chats :first-child').css("order"))-1);
    
   

      } else {
        
        let notMe = mensaje.messageSender == username ? mensaje.messageReceiver : mensaje.messageSender;
    

        const newChat = (
          <Chat
            onClick={() => {
              if ($("#chatActual").css("display") == "none") {
                $("#chatList").css("display", "none");
                $("#chatActual").css("display", "block");
              }
              dispatch(change(notMe));
            }}
            interactuer={notMe}
            lastInteraction={mensaje.messageDate}
            lastMessage={mensaje.messageBody}
            newChat={mensaje.messageSender !== username}
            key={Math.floor(Math.random() * 100) + 1}
            profileImage={null}
          />
        );
        
        



        setArrChats((actualState) =>{ return [
         
       newChat,...actualState
          
    




        ]});
        
     


      }
      
      // chatAActualizar!=username && chatAActualizar!=selectedChat ? dispatch(updateUnreadMessages({...unreadMessages, [chatAActualizar]: 23})) : null;

    }

 

    return( 
  
      <div 
      style={{width:'800px', border: '1px solid #444073', height: '30rem', fontSize: '1rem', position:'fixed', bottom:'0', right:'0' }} 
      className=" flex  bg-moradoOscuro rounded-lg" 
      id='mensajes'
    >
      <div 
        style={{ direction: "rtl", width:'40%', borderRight: '1px solid #444073' }} 
        className="flex flex-col   items-center overflow-auto p-3 " 
        id='chatList'
      >
        <div className="flex flex-row items-center justify-center w-full">
          <NuevoChat chatsRef={chatsRef} />  
          <Imagen 
            onclick={() => {
             dispatch(updateMessagesRender(!messagesRender))
            }} 
            style={{ width: '10%', height: '2rem', display: 'none' }} 
            clase="backIcon cursor-pointer" 
            ruta={backIcon}
          />
        </div>
        <div key="tupu" id="chats" className=" flex w-full  flex-col">
        {spinner ? <div className="flex justify-center w-full"><SpinnerLoader hijoStyle={{width:'4rem'}} className='w-1/6' id="messagesSpinner" /></div> : null }
          {arrChats}  
          {unreadMessages?.['rand']}
        </div>   
      </div>
      <div id="chatActual" style={{width:'60%'}} className="p-2 bg-moradoOscuro ">
        <ChatActual 
          stompClient={stompClient}  
          cambiarUltimoMensajeDelChat={cambiarUltimoMensajeDelChat}
        />
      </div>
    </div>
    
     
    );


}