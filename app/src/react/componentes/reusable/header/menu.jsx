import React from "react";
import IconoParaTi from "../../../../assets/img/menuIcons/parati.png";
import IconoPerfil from "../../../../assets/img/menuIcons/perfil.png";
import IconoMensajes from "../../../../assets/img/menuIcons/mensajes.png";
import IconoComunidades from "../../../../assets/img/menuIcons/comunidad.png";
import Imagen from "../img";
import { useNavigate } from "react-router-dom";
export const Menu = () => {
    
    const navigate = useNavigate();

    return (
        <div id='menu' >
            <div onClick={() => navigate("/feed")} id='menu-1' >
            <Imagen ruta={IconoParaTi}></Imagen>
            <h6>Para ti</h6>
            </div>
            <div onClick={() => navigate("/profile")} id='menu-2'>
            <Imagen ruta={IconoPerfil}></Imagen>
            <h6>Perfil</h6>
            </div> 
            <div onClick={() => alert("PUTO")} id='menu-3'>
            <Imagen ruta={IconoMensajes}></Imagen>
            <h6>Mensajes</h6>
            </div> 

            <div onClick={() => navigate("/communities")} id='menu-4'>
            <Imagen ruta={IconoComunidades}></Imagen>
            <h6>Comunidades</h6>
            </div> 


                    </div>
    )
}