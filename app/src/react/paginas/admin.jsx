import React from "react";
import { useParams } from "react-router-dom";
import Header from "../componentes/reusable/header/header";
import { Body } from "../componentes/admin/body";

export const Admin = () => {

let params = useParams();

return(
    <div  id='adminpanel'>
    <Header/>
    <Body id={params.id}/>
 
    


    </div>
)

}