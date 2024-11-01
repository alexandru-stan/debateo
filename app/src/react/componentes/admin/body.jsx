import React from "react";
import { Mods } from "./mods";
import { UsuariosVetados } from "./usuariosvetados";
import { CommunityOptions } from "./communityOptions";
import { useState } from "react";
// import { UsuariosVetados } from "./usuariosvetados";
export const  Body = (props) => {

  const [selected,setSelected] = useState("USERS_MANAGEMENT")

  function render(){
    switch(selected){
      case "USERS_MANAGEMENT":
      return (<>
        <UsuariosVetados id={props.id} type={'banned'} /> 
        <UsuariosVetados id={props.id} type={'mods'} /> 
        </>)
        break;
      case "SETTINGS":
        return <CommunityOptions id={props.id}/>
        break;
      case "REPORTS":
       return  <p>jejee</p>
       break;
    
   
    }
  }


  console.log(props.info);

  return (
    <div style={{marginLeft:'10%'}} id="adminpanel-body" className=" h-full  flex flex-row    w-4/6 ">
    <div id="adminPanelLeft" style={{}} className=" bg-moradoFondo  p-2 flex flex-col  h-full  w-2/6">
    <p className=" p-2 Kanit  text-bold border-b border-moradoLight text-center" style={{marginBottom:'2%', fontSize:'1rem'}}>Vista de administrador</p>
    <p onClick={() => setSelected("SETTINGS")} className={"p-2 hover:bg-moradoLight  hover:cursor-pointer Kanit " + (selected=="SETTINGS" ?  " text-naranjaMolon" : null)}>Opciones</p>
    <p onClick={() => setSelected("USERS_MANAGEMENT")} className={"p-2 hover:bg-moradoLight  hover:cursor-pointer Kanit " + (selected=="USERS_MANAGEMENT" ?  " text-naranjaMolon" : null)}>Gestión de usuarios</p>
    <p onClick={() => setSelected("REPORTS")} className={"p-2 hover:bg-moradoLight  hover:cursor-pointer Kanit " + (selected=="REPORTS" ?  " text-naranjaMolon" : null)}>Denuncias</p>

    </div>
    <div style={{marginLeft:'0%'}} id='adminpanel-sections' className="w-full flex flex-col  items-center  p-3  ">



{render()}



    </div>
    </div>
  )

}