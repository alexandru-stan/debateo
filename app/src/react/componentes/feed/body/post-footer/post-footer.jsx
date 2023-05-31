import React from "react";
import Imagen from '../../../reusable/img';
import IconoComentar from '../../../../../assets/img/postFooterIcons/comentar.png';
import IconoGuardar from '../../../../../assets/img/postFooterIcons/guardar.png';
import IconoVotar from '../../../../../assets/img/postFooterIcons/votar.png';
import IconoReportar from '../../../../../assets/img/postFooterIcons/reportar.png';

export const PostFooter = (props) => {
    return (
        <div className='post-footer'>
            
               <span title='Me gusta'> <Imagen ruta={IconoVotar}/></span>
               <span title='Comentar'><Imagen ruta = {IconoComentar}/></span> 
                <span title='Guardar publicación'><Imagen ruta = {IconoGuardar}/></span>
                {/* <span title='Denunciar publicación'> <Imagen ruta = {IconoReportar}/></span> */}
           

        </div>
    )
}