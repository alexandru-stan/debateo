import React from "react";
import { Mods } from "./mods";
import { UsuariosVetados } from "./usuariosvetados";
import { CommunityOptions } from "./communityOptions";
export const  Body = (props) => {

  

  return (
    <div style={{marginTop:'2%'}} id="adminpanel-body" className="  flex flex-col items-center w-full ">
    <p className="Kanit text-naranjaMolon text-bold" style={{marginBottom:'2%', fontSize:'2rem'}}>PANEL DE ADMINISTRADOR</p>
    <div id='adminpanel-sections' className="w-full flex justify-evenly p-5 ">
    <Mods id={props.id}/>
    <UsuariosVetados/>
    <CommunityOptions/>
    </div>
    </div>
  )

}