import React, { useEffect } from "react";
import Header from "../componentes/reusable/header/header";
import Body from "../componentes/feed/body";
// import "../../assets/styles/Feed.css";
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Feed = () => {
let user = JSON.parse(sessionStorage.getItem('user'));
const nav = useNavigate();

    useEffect(()=> {
        
        if(user==null){
            nav("/");
        } else {
            // console.log(user.name);
        }
    })

    return (
       
        <div className=" pt-1 moradoOscuro" id='feed'>
       <Header/>
        <Body/>
         </div>
        
    
    
    )
    
    
    ;


}


export default Feed;