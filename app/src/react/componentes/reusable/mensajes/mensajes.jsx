import React, { useEffect, useState } from "react";
// import "../../../../assets/styles/Reusable.css";
import { Chat } from "./children/chat";
import {NuevoChat} from "./children/nuevoChat";
import RetrieveMessages from "../../../../js/RetrieveMessages";

const $ = require('jquery');
export const Mensajes = (props) => {
const [arrMensajes,setArrMensajes] = useState(null);
  $('#menu-3').on("click",() => $('#mensajes').is(':hidden') ?
  
  RetrieveMessages().then(response => console.log(response.data))
  
  : null);

    useEffect(()=>{

      $('#mensajes').hide();
        

    })

    return( 
     <div style={{height:'30rem', fontSize:'1rem', position:'fixed', top:'50%', left:'50%' }} className="bg-emerald-950 flex w-2/4" id='mensajes'>

        <div style={{direction:"rtl"}} className="bg-zinc-950 overflow-auto p-3 w-2/6" id='chatList'>
        <NuevoChat/>  
    
        
           

    
          
           
        </div>
        <div id='chatActual' className=" bg-red-950 w-4/6 p-3">
            <div>CHAT ACTUAL</div>
        </div>


     </div>
    );


}