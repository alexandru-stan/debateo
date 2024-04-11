import React, { useEffect, useState } from "react";
// import "../../../../assets/styles/Reusable.css";
import { Chat } from "./children/chat";
import {NuevoChat} from "./children/nuevoChat";
import RetrieveChats from "../../../../js/RetrieveChats";
import { ChatActual } from "./children/chatActual";
import {useSelector, useDispatch} from "react-redux";
import { change } from "../../../../redux-store/slices/SelectedChatSlice";



const $ = require('jquery');
export const Mensajes = (props) => {
const [prueba,setPrueba] = useState();
const selectedChat = useSelector(state => state.selectedChat.value);
const dispatch = useDispatch();
const [arrChats,setArrChats] = useState([]);
console.log(selectedChat)
  $('#menu-3').on("click",() => $('#mensajes').is(':hidden') ?
  
RetrieveChats().then( r => {
let tempArr = [];
  r.data.forEach(e=>{

    tempArr.push(<Chat onClick={() => dispatch(change(e[0]))} interactuer={e[0]} lastInteraction={e[1]} lastMessage={e[3]}/>);


})


setArrChats(tempArr);
}



)

  : null);

    useEffect(()=>{

    $("#mensajes").hide();
     

    },[]);

    return( 
     <div style={{border:'1px solid #ff8c00',height:'30rem', fontSize:'1rem', position:'fixed', top:'50%', left:'50%' }} className="flex w-2/4 bg-moradoOscuro rounded-lg " id='mensajes'>

        <div style={{direction:"rtl"}} className=" overflow-auto p-3 w-2/6" id='chatList'>
        <NuevoChat/>  
        {arrChats}    
        </div>
        <div  className=" bg-moradoFondo w-4/6">
           <ChatActual/>
        </div>


     </div>
    );


}