import React from "react";
import Imagen from '../../../reusable/img';
import IconoComentar from '../../../../../assets/img/postFooterIcons/comentar.png';
import IconoGuardar from '../../../../../assets/img/postFooterIcons/guardar.png';
import IconoVotar from '../../../../../assets/img/postFooterIcons/votar.png';
import IconoReportar from '../../../../../assets/img/postFooterIcons/reportar.png';
import IconoVotado from '../../../../../assets/img/postFooterIcons/IconoVotado.png';
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
export const PostFooter = (props) => {
    console.log(props.like);
    const [like,setLike] = useState(props.liked==1?true:false);
    console.log(like);
let loggedUser = JSON.parse(sessionStorage.getItem('user')).username
    function changeLikeStatus(){
        
        if(!like) axios.post("http://localhost:8080/likes/"+loggedUser+"/"+props.publicationId);
        else axios.delete("http://localhost:8080/likes/"+loggedUser+"/"+props.publicationId);
        setLike(!like);

    }

  

    


    return (
        <div className='post-footer'>
            
               <span onClick={() => {
                
                changeLikeStatus();
                }} title='Me gusta'> <Imagen ruta={like?IconoVotado:IconoVotar}/></span>
               <span title='Comentar'><Imagen ruta = {IconoComentar}/></span> 
                {/* <span title='Guardar publicación'><Imagen ruta = {IconoGuardar}/></span> */}
               {props.delete}
                {/* <span title='Denunciar publicación'> <Imagen ruta = {IconoReportar}/></span> */}
           

        </div>
    )
}