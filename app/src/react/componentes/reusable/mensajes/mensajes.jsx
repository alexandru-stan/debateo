import React, { useEffect } from "react";
// import "../../../../assets/styles/Reusable.css";
import { Chat } from "./chat";
import {NuevoChat} from "./nuevoChat";
const $ = require('jquery');
export const Mensajes = (props) => {


    useEffect(()=>{

      $('#mensajes').hide();
        

    })

    return( 
     <div style={{height:'30rem', fontSize:'1rem', position:'fixed', top:'50%', left:'50%' }} className="bg-emerald-950 flex w-2/4" id='mensajes'>

        <div style={{direction:"rtl"}} className="bg-zinc-950 overflow-auto p-3 w-2/6" id='chatList'>
        <NuevoChat/>  
           <Chat/>
           <Chat/>
           <Chat/>
           <Chat/>
           <Chat/>
           <Chat/>
           <Chat/>
           <Chat/>
           <Chat/>
           <Chat/>
           <Chat/>
           <Chat/>
           <Chat/>
           <Chat/>
           <Chat/>
           <Chat/>
           <Chat/>
           <div className="bg-emerald-300">aaa</div>
        
           

    
          
           
        </div>
        <div id='chatActual' className=" bg-red-950 w-4/6 p-3">
            <div>CHAT ACTUAL</div>
        </div>


     </div>
    );


}