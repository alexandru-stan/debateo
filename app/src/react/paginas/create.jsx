import React from "react";
import { TextField } from "@mui/material";
import { CrearPublicacion } from "../componentes/communities/body/crearPublicacion";
import Header from "../componentes/reusable/header/header";
import { useSelector } from "react-redux";
import { Mensajes } from "../componentes/reusable/mensajes/mensajes";
// import "../../assets/styles/Create.css"
import { useEffect } from "react";
import { LateralMenu } from "../componentes/reusable/lateralmenu/LateralMenu";

import { useNavigate, useParams } from "react-router-dom";
export const Create = (props) => {
    const messagesRender = useSelector(state => state.messagesRender.value);
    let community= useParams();
    const nav = useNavigate();

    useEffect(()=> {
      
        localStorage.getItem('userData') == undefined ? nav("/") : null;
        
    })


        return (

  
            localStorage.getItem('userData') != undefined ?  
        <div className="" id='create'>
            <Header/>
            {messagesRender ? <Mensajes/>:null}
            {/* <LateralMenu/> */}
            <CrearPublicacion communityId={community}/>

      
         </div>

         : null
    )
}