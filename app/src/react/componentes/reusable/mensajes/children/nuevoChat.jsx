import React, { useEffect } from "react";
import { useState } from "react";
import { searchUsers } from "../../../../../js/searchUsers";
import { useDispatch,useSelector } from "react-redux";
import { change } from "../../../../../redux-store/slices/SelectedChatSlice";

export const NuevoChat = (props) => {
    const [resultados,setResultados] = useState([]);
    const selectedChat = useSelector(state => state.selectedChat.value);
    const dispatch = useDispatch();
    let timerId;
    const $ = require('jquery');

    function search(event) {
 
        if(event.target.value.length!=0){
            clearTimeout(timerId);
            timerId = setTimeout(()=>{
            searchUsers(event.target.value).then(response => {
               
                setResultados(response.data)});
            
            },300)
            
        } else {
            setResultados([]);
        }

    }

    return(
   
    <div className=" w-4/5  m-2 relative" style={{height:'3rem', padding:'3px', direction:'ltr'}} id='nuevoChat'>
   
        <input onChange={search} placeholder="Buscar usuario" className="  rounded-md py-2 px-4 text-gray-700  text-white backdrop-brightness-125 placeholder-gray-400 bg-moradoFondo placeholder-gray-400 focus:outline-none  w-full focus:border-naranjaMolon"></input>
        {resultados.length>0 ? 
        <div style={{border:'1px solid #ff8c00' }} className="   bg-moradoFondo  absolute  rounded-md  " id='chatSearchResult'>
       
        {resultados.map((resultado) => (
          <div 
            className="cursor-pointer   hover:bg-naranjaMolon text-2xl bg-moradoFondo text-white p-2" 
            onClick={() => {

            
            $("#chatList").css("display","none");
            $("#chatActual").css("display","block");
           
            dispatch(change(resultado));
            setResultados([]);
            
            }} key={resultado}>{resultado}</div>
        ))}

        
        </div>
        :null}
    </div>
   

    )

}