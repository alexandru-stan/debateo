import React from "react";
import { Mods } from "./mods";
import { UsuariosVetados } from "./usuariosvetados";
import { CommunityOptions } from "./communityOptions";
export const  Body = (props) => {

  

  return (
    <div style={{marginTop:'0%'}} id="adminpanel-body" className=" h-full  flex flex-col    w-3/6 ">
    <div className="  p-2 flex flex-col border-r border-moradoLight  h-full  w-1/4">
    <p className=" p-2 Kanit text-naranjaMolon  text-bold" style={{marginBottom:'2%', fontSize:'1rem'}}>Vista de administrador</p>
    <p  className="p-2 hover:bg-moradoLight   hover:cursor-pointer Kanit">Gestión de usuarios</p>
    <p className="p-2 hover:bg-moradoLight  hover:cursor-pointer Kanit">Opciones</p>
    </div>
    <div id='adminpanel-sections' className="w-full flex justify-evenly ">
    {/* <Mods id={props.id}/>
    <UsuariosVetados/>
    <CommunityOptions/> */}
    </div>
    </div>
  )

}