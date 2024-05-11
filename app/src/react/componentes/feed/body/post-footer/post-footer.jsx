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
import { useDispatch, useSelector } from "react-redux";
import { assign } from "../../../../../redux-store/slices/CommentPost";
import {SERV_DIR,SERV_PORT} from "../../../../../utilities";
export const PostFooter = (props) => {
    const nav = useNavigate();
    let postInfo = props.postInfo;
    
    const [like,setLike] = useState(postInfo.liked==1?true:false);
    const [likesCount,setLikesCount] = useState(postInfo.likes);


let loggedUser = JSON.parse(sessionStorage.getItem('user')).username
    function changeLikeStatus(){
        
        if(!like) axios.post("http://"+SERV_DIR+":"+SERV_PORT+"/likes/"+loggedUser+"/"+postInfo.publicationId).then(()=>{
        
        setLikesCount(likesCount+1)
        // postInfo.liked=1;
    }
        );
        else axios.delete("http://"+SERV_DIR+":"+SERV_PORT+"/likes/"+loggedUser+"/"+postInfo.publicationId).then(()=>{
          
        setLikesCount(likesCount-1)
        // postInfo.liked=0;

}
        );
        setLike(!like);

    }

  

    


    return (
        <div style={{}} className='post-footer   flex p-1 text-white '>
            
               <span  style={{width:'15%'}} className="    flex items-center  m-1 " onClick={() => {
                
                changeLikeStatus();
                }} title='Me gusta'> <Imagen clase={"w-1/4 hover:cursor-pointer "} ruta={like?IconoVotado:IconoVotar}/> <span  style={{ marginLeft:'10%',fontSize:'smaller'}}>{likesCount}</span></span>
               
               <span style={{width:'15%'}} className="  flex items-center  m-1  " onClick={()=>{
              
               
                nav("/"+postInfo.publicationId+"/comments");
               
               
               }} title='Comentar'><Imagen  clase={" hover:cursor-pointer w-1/4"}  ruta = {IconoComentar}/> <span style={{marginLeft:'10%',fontSize:'smaller'}}>{postInfo.comments}</span></span> 
                
             
                
        </div>

           

    )
}