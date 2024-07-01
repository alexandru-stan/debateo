import axios from "axios";
import {SERV_DIR,SERV_PORT} from "../utilities";
export function subirComentario(comentario,post){
   
  
  

    let comment = {
        postId:post,
        username:JSON.parse(sessionStorage.getItem('user')).username,
        commentDate:null,
        commentText:comentario

    }

    axios.post("http://"+SERV_DIR+":"+SERV_PORT+"/comments",comment)

    return comment;

}