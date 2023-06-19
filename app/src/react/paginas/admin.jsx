import React from "react";
import { useParams } from "react-router-dom";
import Header from "../componentes/reusable/header/header";
import "../../assets/styles/AdminPanel.css"
export const Admin = () => {

let params = useParams();
console.log();
return(
    <div id='adminpanel'>
    <Header/>
  


    </div>
)

}