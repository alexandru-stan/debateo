import React from "react";
import IconoParaTi from "../../../../assets/img/menuIcons/parati.png";
import IconoPerfil from "../../../../assets/img/menuIcons/perfil.png";
import IconoMensajes from "../../../../assets/img/menuIcons/mensajes.png";
import IconoComunidades from "../../../../assets/img/menuIcons/crear.png";
import Imagen from "../img";
import { useNavigate } from "react-router-dom";
export const Menu = () => {
   const  $ = require('jquery');
    const navigate = useNavigate();
    let name="Programacion";
    return (
        <div id='menu' className=" text-white flex justify-around w-2/6" >
            <div className="cursor-pointer hover:bg-moradoLight w-1/6  flex flex-col justify-center items-center" onClick={() => navigate("/feed")} id='menu-1' >
            <Imagen clase=" w-4/6" ruta={IconoParaTi}></Imagen>
            <h6>Para ti</h6>
            </div>
            <div className=" cursor-pointer hover:bg-moradoLight w-1/6  flex flex-col justify-center items-center" onClick={() => navigate("/profile")} id='menu-2'>
            <Imagen clase="w-4/6" ruta={IconoPerfil}></Imagen>
            <h6>Perfil</h6>
            </div> 
            <div className="cursor-pointer hover:bg-moradoLight  w-1/6  flex flex-col justify-center items-center" onClick={() => 
    
    $("#mensajes").animate({height: 'toggle',width:'toggle'}, 100)
    } id='menu-3'>
            <Imagen clase="w-4/6" ruta={IconoMensajes}></Imagen>
            <h6>Mensajes</h6>
            </div> 

            <div className=" cursor-pointer hover:bg-moradoLight w-1/6  flex flex-col justify-center items-center" onClick={()=> navigate("/new/community")} id='menu-4'>
            <Imagen clase="w-4/6" ruta={IconoComunidades}></Imagen>
            <h6 className="text-center">Comunidad</h6>
            </div> 


                    </div>
    )
}