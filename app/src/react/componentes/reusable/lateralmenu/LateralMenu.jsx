import React from "react";
import { Menu } from "../header/menu";
import collapse from "../../../../assets/img/collapse.png"
import Image from "../img"
import profileImage from "../../../../assets/img/stockProfileImage.jpg"
import { useWindowSize } from "@uidotdev/usehooks";
// import useWindowSize
export const LateralMenu = (props) => {
    // const size = useWindowSize();    
    const user = JSON.parse(sessionStorage.getItem('user'))
    return (

    

        <div id="lateralMenu" className=" bg-moradoOscuro p-2 border-r-2 border-moradoLight" style={{position:'fixed', height:'100vh',  left:'0%', top:'7%', width:'15%'}}>
       <div id="user-info" style={{marginTop:'2rem'}} className="  flex items-center  p-2 ">
        <Image style={{borderRadius:'100% ', width:'4rem', height:'4rem'}} clase={" p-1"} ruta={profileImage}/>
        <div className="p-1">
            <div className="max-text-2xl text-bold text-naranjaMolon Kanit">{user.username}</div>
            <div className="text-gray-300 text-sm">{user.name}</div>
        </div>
        </div>
       <Menu/>

       <div className="p-2 flex items-center hover:cursor-pointer hover:brightness-125 bg-moradoOscuro w-full justify-between ">
        <p className="Kanit p-1 text-bold text-naranjaMolon">Comunidades más activas</p>
        <Image style={{width:'15%'}} clase={"p-1 rotate-180"} ruta={collapse}/>
       </div>

       <div className="p-2 flex items-center hover:cursor-pointer hover:brightness-125 bg-moradoOscuro justify-between w-full ">
        <p className="Kanit p-1 text-bold text-naranjaMolon">Reciente</p>
        <Image style={{width:'15%'}} clase={"p-1 rotate-180"} ruta={collapse}/>
       </div>

       <div className="p-2 hover:cursor-pointer hover:cursor-pointer hover:brightness-125 bg-moradoOscuro flex items-center w-full justify-between ">
        <p className="Kanit p-1 text-bold text-naranjaMolon">Suscripciones</p>
        <Image style={{width:'15%'}} clase={"p-1 rotate-180"} ruta={collapse}/>
       </div>


        </div>

    )

}