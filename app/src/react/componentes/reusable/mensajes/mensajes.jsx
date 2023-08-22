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
     <div  id='mensajes'>

        <div id='chatList'>
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
        
           

    
          
           
        </div>
        <div id='chatActual'>
            <div>A</div>
        </div>


     </div>
    );


}