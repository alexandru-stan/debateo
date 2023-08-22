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
import { useNavigate } from "react-router-dom";
export const PostFooter = (props) => {
    const nav = useNavigate();
    console.log(props.like);
    const [like,setLike] = useState(props.liked==1?true:false);
    const [likesCount,setLikesCount] = useState(props.likes);
    console.log("LIKES"+likesCount);
let loggedUser = JSON.parse(sessionStorage.getItem('user')).username
    function changeLikeStatus(){
        
        if(!like) axios.post("http://localhost:8080/likes/"+loggedUser+"/"+props.publicationId).then(()=>setLikesCount(likesCount+1));
        else axios.delete("http://localhost:8080/likes/"+loggedUser+"/"+props.publicationId).then(()=>setLikesCount(likesCount-1));
        setLike(!like);

    }

  

    


    return (
        <div className='post-footer  mt-2 flex h-postFooterHeight text-white '>
            
               <span className="  w-1/6 " onClick={() => {
                
                changeLikeStatus();
                }} title='Me gusta'> <Imagen clase={"w-1/4"} ruta={like?IconoVotado:IconoVotar}/> <span style={{fontSize:'smaller'}}>{likesCount}</span></span>
               
               <span  className=" w-1/6 " onClick={()=>{
                nav("/"+props.publicationId+"/comments");
               }} title='Comentar'><Imagen  clase={" w-1/4"}  ruta = {IconoComentar}/> <span style={{fontSize:'smaller'}}>{props.comments}</span></span> 
                
               {props.delete}
                
        </div>

           

    )
}