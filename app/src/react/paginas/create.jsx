import React from "react";
import { TextField } from "@mui/material";
import { CrearPublicacion } from "../componentes/communities/body/crearPublicacion";
import Header from "../componentes/reusable/header/header";
// import "../../assets/styles/Create.css"
import { Body } from "../componentes/create/body";
import { useParams } from "react-router-dom";
export const Create = (props) => {

    let community= useParams();
        return (

  

        <div className="" id='create'>
            <Header/>
            <CrearPublicacion communityId={community}/>

            {/* <Body/> */}
         </div>
    )
}