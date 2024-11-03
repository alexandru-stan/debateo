import React from "react";
import { useParams } from "react-router-dom";
import Header from "../componentes/reusable/header/header";
import { Body } from "../componentes/admin/body";
import { LateralMenu } from "../componentes/reusable/lateralmenu/LateralMenu";

export const Admin = () => {

let params = useParams();

return(
    <div style={{height:'100%'}} className="flex  bg-emerald-350   flex-col w-full items-center" id='adminpanel'>
    <Header/>
    {/* <LateralMenu/> */}
    <Body id={params.id}/>
 
    


    </div>
)

}