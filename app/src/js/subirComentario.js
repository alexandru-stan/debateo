import axios from "axios";

export function subirComentario(comentario,post){
    let currentDate = new Date();
  
  

    let comment = {
        postId:post,
        username:JSON.parse(sessionStorage.getItem('user')).username,
        commentDate:currentDate,
        commentText:comentario

    }

    axios.post("http://localhost:8080/comments",comment)

    return comment;

}