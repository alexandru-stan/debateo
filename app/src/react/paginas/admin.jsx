import React from "react";
import { useParams } from "react-router-dom";
import Header from "../componentes/reusable/header/header";
// import "../../assets/styles/AdminPanel.css"
import { Mods } from "../componentes/admin/mods";
export const Admin = () => {

let params = useParams();
console.log();
return(
    <div  id='adminpanel'>
    <Header/>
    <Mods id={params.id}/>


    </div>
)

}