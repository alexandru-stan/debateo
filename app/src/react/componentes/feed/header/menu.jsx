import React from "react";
import IconoParaTi from "../../../../assets/img/menuIcons/parati.png";
import IconoPerfil from "../../../../assets/img/menuIcons/perfil.png";
import IconoMensajes from "../../../../assets/img/menuIcons/mensajes.png";
import IconoComunidades from "../../../../assets/img/menuIcons/comunidad.png";
import Imagen from "../../reusable/img";
export const Menu = () => {
    return (
        <div id='menu'>
            <div id='menu-1'>
            <Imagen ruta={IconoParaTi}></Imagen>
            <h6>Para ti</h6>
            </div>
            <div id='menu-2'>
            <Imagen ruta={IconoPerfil}></Imagen>
            <h6>Perfil</h6>
            </div> 
            <div id='menu-3'>
            <Imagen ruta={IconoMensajes}></Imagen>
            <h6>Mensajes</h6>
            </div> 

            <div id='menu-4'>
            <Imagen ruta={IconoComunidades}></Imagen>
            <h6>Comunidades</h6>
            </div> 


                    </div>
    )
}