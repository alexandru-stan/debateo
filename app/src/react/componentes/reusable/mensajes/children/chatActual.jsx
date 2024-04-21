import React from "react";
import Logo from "../../img";
import enviarMensaje from "../../../../../assets/img/enviarMensaje.png";
import selectedChatPng from "../../../../../assets/img/selectedChat.png";
import {useSelector, useDispatch} from "react-redux";
import { change } from "../../../../../redux-store/slices/SelectedChatSlice";
import { RetrieveMessages } from "../../../../../js/RetrieveMessages";
import { useEffect } from "react";
import { useState } from "react";
import { MessageBubble } from "./IncomingMessageBubble";
import { update } from "../../../../../redux-store/slices/IncomingMessage";
import jQuery from "jquery";
import { stompClient } from "../../../../../webSocketTesting/webSocket";


export const ChatActual = (props) => {
    const $ = require('jquery');
    const selectedChat = useSelector(state => state.selectedChat.value);
    const incomingMessage = useSelector(state => state.incomingMessage.value);
    const dispatch = useDispatch();
    const [messages,setMessages] = useState();
    const username = JSON.parse(sessionStorage.getItem("user")).username
   
  

    useEffect(()=> {
       
       incomingMessage!=null ? 
   
       selectedChat==incomingMessage.messageSender  ? 
      
       (function() {
       
        setMessages([<MessageBubble loggedUser = {username} sender = {incomingMessage.messageSender} body = {incomingMessage.messageBody} />,...messages]);

        // props.cambiarUltimoMensajeDelChat(incomingMessage.messageBody,selectedChat);
        
        })()

        

       : null

       :

       null


  

    }, [incomingMessage]);


    useEffect(()=>{
        
        selectedChat!=null ? RetrieveMessages(username,selectedChat).then(r => {
            
           let temp=[];
            
            r.data.forEach(element => {
                temp.push(<MessageBubble loggedUser = {username} sender = {element.messageSender}  body={element.messageBody}/>)
                
            });

            setMessages(temp);
            
        
        
        }
        
        )
        
        
        
        
        
        
        
        
        
        :null;
         
    
        },[selectedChat]);
    

        function sendMessage(element){
            
            let message = {
                messageId:null,
                messageBody:element,
                messageSender:username,
                messageReceiver:selectedChat,
                messageDate: new Date().toISOString()
            }

            setMessages([<MessageBubble loggedUser={username} sender={username} body={element} />,...messages]);
          
             props.cambiarUltimoMensajeDelChat(message);
        
            

                stompClient.publish({
                destination: "/app/send",
                body: JSON.stringify(message)
                
            });
            

        }
    

    return (
        

selectedChat==null ? 


<div className="flex h-full bg-moradoOscuro flex justify-center items-center">
<Logo ruta={selectedChatPng} clase="w-1/6 h-1/6"/>
</div>


: 
<>
        <div id='conversacion' style={{height:'90%'}} className=" flex bg-moradoOscuro ">
           {messages}
        </div>

        <div className="flex bg-moradoOscuro items-center  " style={{height:'10%'}} id='bandejaMensajes'>
            <input id='chatBox' placeholder="Escribe un mensaje" className="bg-moradoOscuro w-5/6"></input>
            <img onClick={() => sendMessage($("#chatBox").val())} style={{marginLeft:'5%', height:'2rem' }} className="hover:cursor-pointer" src={enviarMensaje}/>
        </div>
    </>
  
        
 
    
    )

}