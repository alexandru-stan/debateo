import React, { useEffect, useState } from "react";
// import "../../../../assets/styles/Reusable.css";
import { Chat } from "./children/chat";
import {NuevoChat} from "./children/nuevoChat";
import RetrieveChats from "../../../../js/RetrieveChats";
import { ChatActual } from "./children/chatActual";
import {useSelector, useDispatch} from "react-redux";
import { change } from "../../../../redux-store/slices/SelectedChatSlice";
import { stompClient } from "../../../../webSocketTesting/webSocket";
import { update } from "../../../../redux-store/slices/IncomingMessage";
stompClient.activate();
const $ = require('jquery');
export const Mensajes = (props) => {
  const [unreadMessages, setUnreadMessages] = useState([]);
const username = JSON.parse(sessionStorage.getItem('user')).username;
const selectedChat = useSelector(state => state.selectedChat.value);

const dispatch = useDispatch();
const [arrChats,setArrChats] = useState([]);


stompClient.onConnect = (frame) => {
  console.log('Connected: ' + frame);
  stompClient.subscribe('/'+username,(message) => {
      console.log(message);
      dispatch(update(JSON.parse(message.body)));

      




      arrChats.forEach(e=>console.log(e));
      let temp = arrChats.filter(chat => chat.props.interactuer !== selectedChat);
      setArrChats([<Chat onClick={() => dispatch(change(selectedChat))} lastInteraction = {new Date().getTime()} lastMessage = {message} interactuer={selectedChat}/>,...temp]);
    








  });
  console.log("subscribed");
};

  $('#menu-3').on("click",() => $('#mensajes').is(':hidden') ?
  
RetrieveChats().then( r => {
let tempArr = [];
  r.data.forEach(e=>{

    tempArr.push(<Chat unreadMessages={0}   onClick={() => dispatch(change(e[0]))} interactuer={e[0]} lastInteraction={e[1]} lastMessage={e[3]}/>);


})


setArrChats(tempArr);
}



)

  : null);

    useEffect(()=>{
    
    $("#mensajes").hide();
    
   
     

    },[]);


    function cambiarUltimoMensajeDelChat(message){
      
      arrChats.forEach(e=>console.log(e));
      let temp = arrChats.filter(chat => chat.props.interactuer !== selectedChat);
      setArrChats([<Chat onClick={() => dispatch(change(selectedChat))} lastInteraction = {new Date().getTime()} lastMessage = {message} interactuer={selectedChat}/>,...temp]);
    

    }


    return( 
  
     <div style={{border:'1px solid #ff8c00',height:'30rem', fontSize:'1rem', position:'fixed', top:'30%', left:'50%' }} className="flex w-2/4 bg-moradoOscuro rounded-lg " id='mensajes'>
     
        <div style={{direction:"rtl"}} className=" overflow-auto p-3 w-2/6" id='chatList'>
        <NuevoChat/>  
        {arrChats}    
        </div>
        <div  className=" bg-moradoFondo w-4/6">
           <ChatActual stompClient={stompClient}  cambiarUltimoMensajeDelChat={cambiarUltimoMensajeDelChat}/>
        </div>


     </div>
     
    );


}