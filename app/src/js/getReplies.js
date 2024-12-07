import axios from "axios"
import { Reply } from "../react/componentes/reusable/reply"
import React from "react"
import {SERV_DIR,SERV_PORT} from "../utilities";

export async function getReplies(commentId){


    let replies = []


    

const e = await axios.get("http://"+SERV_DIR+":"+SERV_PORT+"/replies/"+commentId,{
    headers:{
        'Authorization':'Bearer '+ JSON.parse(localStorage.getItem('userData')).token,
        'Content-Type': 'application/json'
    }
});

e.data.forEach(e => replies.push(<Reply username={e.username} replyText={e.replyText} replyDate={e.replyDate} />));

    return replies;
  


    


}