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
export const ChatActual = () => {
    const selectedChat = useSelector(state => state.selectedChat.value);
    const dispatch = useDispatch();
    const [messages,setMessages] = useState("ALA BALA PORTOCALA");
    const username = JSON.parse(sessionStorage.getItem("user")).username
    useEffect(()=>{

        selectedChat!=null ? RetrieveMessages(username,selectedChat).then(r => {
            
           let temp=[];
            
            r.data.forEach(element => {
                temp.push(<MessageBubble loggedUser = {username} sender = {element.messageSender}  body={element.messageBody}/>)
                console.log(element.messageBody);
            });

            setMessages(temp);
            
        
        
        }
        
        )
        
        
        
        
        
        
        
        
        
        :null;
         
    
        },[selectedChat]);
    
    
    return (
        <>
        <div id='conversacion' style={{height:'90%'}} className=" flex bg-moradoOscuro ">

           {/* {selectedChat==null?<Logo ruta={selectedChatPng} clase="w-1/6"/>:
           
            selectedChat
           
           } */}
           
           {messages}
           {/* <IncomingMessageBubble body={"hola co"}/> */}

        </div>

        <div className="flex bg-moradoOscuro  " style={{height:'10%'}} id='bandejaMensajes'>
            <input id='chatBox' placeholder="Escribe un mensaje" className="bg-moradoOscuro w-5/6"></input>
            <Logo style={{marginLeft:'5%'}} clase="hover:cursor-pointer" ruta={enviarMensaje}/>
        </div>
        </>


    )

}