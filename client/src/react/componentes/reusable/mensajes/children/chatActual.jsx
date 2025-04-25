import React from "react";
import Logo from "../../img";
import enviarMensaje from "../../../../../assets/img/enviar.png";
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
import Image from "../../img";
import backIcon from "../../../../../assets/img/backIcon.png";
import cerrar from "../../../../../assets/img/close.png";
import { update as updateMessagesRender } from "../../../../../redux-store/slices/MessagesRender";


export const ChatActual = (props) => {
    const $ = require('jquery');
    const selectedChat = useSelector(state => state.selectedChat.value);
    const incomingMessage = useSelector(state => state.incomingMessage.value);
    const messagesRender = useSelector(state => state.messagesRender.value);
    const dispatch = useDispatch();
    const [messages,setMessages] = useState([]);
    const username = JSON.parse(localStorage.getItem("userData")).username    
    // const messagesRender = useState(state => state.messagesRender.value)
  

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
           let flag=false;
            r.data.forEach(element => {

                    
                temp.push(<MessageBubble key={element.messageId} loggedUser = {username} sender = {element.messageSender}  body={element.messageBody}/>)
            
            });

            setMessages(temp);
            
        
        
        }
        
        )
        
        
        
        
        
        
        
        
        
        :null;
         
    
        },[selectedChat]);
    

        function sendMessage(element){

           
            if(!element.length == 0){

            let message = {
                messageId:null,
                messageBody:element,
                messageSender:username,
                messageReceiver:selectedChat,
                messageDate: new Date().toISOString()
            }

            setMessages([<MessageBubble key={message.messageDate} loggedUser={username} sender={username} body={element} />,...messages]);
          
             props.cambiarUltimoMensajeDelChat(message);
        
            

                stompClient.publish({
                destination: "/app/send",
                body: JSON.stringify(message)
                
            });
            

        } 




        }
    

    return (
        

<>

<img onClick={()=>{ dispatch(updateMessagesRender(!messagesRender)) }} src={cerrar} id='cerrarMensajes' className="absolute hover:cursor-pointer  " style={{right:'1%', width:'2rem'}} ></img>

{
selectedChat==null ? 


<div className="h-full ">
{/* <img onClick={()=>{ dispatch(updateMessagesRender(!messagesRender)) }} src={cerrar} className="hover:cursor-pointer " style={{marginLeft:'auto', width:'5%'}} ></img> */}
<div  className="flex h-full   flex justify-center items-center">
<Logo ruta={selectedChatPng} clase="w-1/6  h-1/6"/>
</div>
</div>


: 
        <>
        
        <div style={{height:'15%',fontSize:'1rem',  borderBottom:'1px solid #ff8c00'}} className="p-1 flex items-center flex-row  "> 
        <Image clase="mr-5 backIcon" onclick={()=> {
            
        $("#chatActual").css("display","none")
        $("#chatList").css("display","block")}
        } style={{width:'10%',display:'none'}} ruta = {backIcon}/>
        <div  style={{ height:'3rem', marginLeft:'2rem'}} className=" flex  flex-col">
        <div style={{}} className="text-naranjaMolon   h-3/4 pl-2 text-extrabold">{selectedChat}</div>
        <sub className="">Conectado por última vez: Unknown</sub>
        </div>
       {/* <img onClick={()=>{ dispatch(updateMessagesRender(!messagesRender)) }} src={cerrar} className="hover:cursor-pointer " style={{marginLeft:'auto', width:'5%'}} ></img> */}
        </div>
        <div id='conversacion' style={{height:'70%'}} className=" p-1 flex bg-moradoOscuro ">
           {messages}
        </div>

        <div className="flex bg-moradoOscuro items-center p-1 " style={{height:'15%'}} id='bandejaMensajes'>
            <input 
            
            onKeyDown={(event) => { 
            
                if(event.key == 'Enter'){
            
                sendMessage($("#chatBox").val())
                $("#chatBox").val(null);
                $("#chatBox").attr("rows");
            }
            
            
            }
                }

            
            id='chatBox' placeholder="Escribe un mensaje" className="bg-moradoOscuro w-5/6"/>
            <img 
            
            
            
            onClick={() => { 

                sendMessage($("#chatBox").val()) 
                $("#chatBox").val(null);
            }} style={{marginLeft:'5%', height:'2rem' }} className="hover:cursor-pointer bg-moradoOscuro" src={enviarMensaje}/>
        </div>
    </>
  }
    </>
 
    
    )

}