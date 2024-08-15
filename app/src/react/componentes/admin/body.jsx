import React from "react";
import { Mods } from "./mods";
import { UsuariosVetados } from "./usuariosvetados";
import { CommunityOptions } from "./communityOptions";
export const  Body = (props) => {

  

  return (
    <div style={{marginTop:'2%'}} id="adminpanel-body" className="  flex flex-col items-center w-4/6 ">
    <div className=" w-full">
    <p className="Kanit text-naranjaMolon  text-bold" style={{marginBottom:'2%', fontSize:'2rem'}}>Vista de administrador</p>
    </div>
    <div className="flex p-2">
    <p className="p-2 hover:cursor-pointer Kanit">Gestión de usuarios</p>
    <p className="p-2 hover:cursor-pointer Kanit">Opciones</p>
    </div>
    <div id='adminpanel-sections' className="w-full flex justify-evenly p-5 ">
    {/* <Mods id={props.id}/>
    <UsuariosVetados/>
    <CommunityOptions/> */}
    </div>
    </div>
  )

}