import React from "react";
import { TextField } from "@mui/material";
import { CrearPublicacion } from "../componentes/communities/body/crearPublicacion";
import Header from "../componentes/reusable/header/header";
// import "../../assets/styles/Create.css"

import { LateralMenu } from "../componentes/reusable/lateralmenu/LateralMenu";

import { useParams } from "react-router-dom";
export const Create = (props) => {

    let community= useParams();
        return (

  

        <div className="" id='create'>
            <Header/>
            <LateralMenu/>
            <CrearPublicacion communityId={community}/>

      
         </div>
    )
}