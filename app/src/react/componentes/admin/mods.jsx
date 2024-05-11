import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { TextField } from "@mui/material";
import { Button } from "react-bootstrap";
import {SERV_DIR,SERV_PORT} from "../../../utilities";
const $ = require('jquery');
export const Mods = (props) => {

    const [mods,setMods] = useState([]);
    const[a,setA] = useState(true);
let timerId;


function deleteMod(event){
    let mod = event.target.id;
    

   axios.put("http://"+SERV_DIR+":"+SERV_PORT+"/subscriptions/mods/downgrade/"+ mod+"/"+props.id);
   setA(!a);
}


function addMod(){

    axios.post("http://"+SERV_DIR+":"+SERV_PORT+"/subscriptions/mods/add/"+ $('#user').val()+"/"+props.id).then(response => {
   
        setMods((mods) => mods.concat(
        <div className='mod'>
        <p>{response.data.username}</p>
        <p onClick={deleteMod}  id={response.data.username}>X</p>
        
        </div>
        
        
        ));
});
        

}

    function searchUser(event){
        $("#submit").prop("disabled",true)
        if(event.target.value.length!=0){
            clearTimeout(timerId);
            timerId = setTimeout(()=>{
            axios.get("http://"+SERV_DIR+":"+SERV_PORT+"/users/exists/"+$('#user').val()).then(response=>{
         
                if(response.data)   $("#submit").prop("disabled",false)
            })
            
            },300)
            
        }
    }

;
useEffect(()=> {
    $("#submit").prop("disabled",true)
axios.get("http://"+SERV_DIR+":"+SERV_PORT+"/subscriptions/mods/"+props.id).then((response)=>{
    

    if(response.data.length==0){
    
    } else {
        let arr=[];

        response.data.forEach(element => {
            arr.push(<div className='mod'>
            <p>{element}</p>
            <p onClick={deleteMod} id={element}>X</p>
            
            </div>);
        })
       

        setMods(arr);
        

    }


});
    
},[a])

    return (
        <div id='mods'>
        <div id='mods-list'>
       <h1>Tus moderadores:</h1>
    
       {mods}
       </div>

        <div id='add-mods'>
            <p>Asigna a un moderador!</p>
            <TextField id='user' onChange={searchUser} label="Usuario" variant="filled"/>
           <Button onClick={addMod}  id='submit'>Añadir</Button>
      
        </div>

        </div>
    )


}