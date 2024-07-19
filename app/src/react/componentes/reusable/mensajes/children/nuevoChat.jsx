import React, { useEffect } from "react";
import { useState } from "react";
import { searchUsers } from "../../../../../js/searchUsers";
import { useDispatch,useSelector } from "react-redux";
import { change } from "../../../../../redux-store/slices/SelectedChatSlice";

export const NuevoChat = (props) => {
    const [resultados,setResultados] = useState([]);
    const user = JSON.parse(sessionStorage.getItem('user')).username;
    const selectedChat = useSelector(state => state.selectedChat.value);
    const dispatch = useDispatch();
    let timerId;
    const $ = require('jquery');

    function search(event) {
 
        if(event.target.value.length!=0){
            clearTimeout(timerId);
            timerId = setTimeout(()=>{
            searchUsers(event.target.value,user).then(response => {
               
                setResultados(response.data)});
            
            },300)
            
        } else {
            setResultados([]);
        }

    }

    return(
   
    <div className=" w-4/5  m-2 relative" style={{height:'3rem', padding:'3px', direction:'ltr'}} id='nuevoChat'>
   
        <input onChange={search} placeholder="Buscar usuario" className=" bg-moradoLight  rounded-md py-2 px-4 text-gray-700  text-white backdrop-brightness-125 placeholder-gray-400 bg-moradoFondo placeholder-gray-400 focus:outline-none  w-full focus:border-naranjaMolon"></input>
        {resultados.length>0 ? 
        <div style={{  }} className="  w-full bg-moradoFondo  absolute bg-moradoLight  rounded-md  " id='chatSearchResult'>
       
        {resultados.map((resultado) => (
          <div 
            className="cursor-pointer w-full p-2   hover:bg-naranjaMolon bg-moradoFondo text-white " 
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