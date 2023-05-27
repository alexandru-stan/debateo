import React from "react";
import Imagen from '../../../reusable/img';
import IconoComentar from '../../../../../assets/img/postFooterIcons/comentar.png';
import IconoGuardar from '../../../../../assets/img/postFooterIcons/guardar.png';
import IconoVotar from '../../../../../assets/img/postFooterIcons/votar.png';
import IconoReportar from '../../../../../assets/img/postFooterIcons/reportar.png';

export const PostFooter = () => {
    return (
        <div class='post-footer'>
                {/* <Imagen ruta={IconoVotar}/> */}
                <Imagen ruta={IconoComentar}/>
                {/* <Imagen ruta={IconoGuardar}/> */}
                <Imagen ruta={IconoReportar}/>

        </div>
    )
}