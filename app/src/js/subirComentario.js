import axios from "axios";
import {SERV_DIR,SERV_PORT} from "../utilities";
export function subirComentario(comentario,post){
   
  
    console.log(comentario);    
  

    let comment = {
        postId:post,
        username:JSON.parse(localStorage.getItem('userData')).username,
        commentDate:null,
        commentText:comentario

    }

    axios.post("http://"+SERV_DIR+":"+SERV_PORT+"/comments",comment,{
        headers:{
            'Authorization':'Bearer '+ JSON.parse(localStorage.getItem('userData')).token,
            'Content-Type': 'application/json'
        }
    })

    return comment;

}