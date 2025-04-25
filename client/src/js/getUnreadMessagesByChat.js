import axios from "axios";
import { SERV_DIR,SERV_PORT } from "../utilities";

export function  getUnreadMessagesByChat(username){
    
      return  axios.get("http://"+SERV_DIR+":"+SERV_PORT+"/messages/unreadByChat/"+username,{
            headers:{
                'Authorization':'Bearer '+ JSON.parse(localStorage.getItem('userData')).token,
                'Content-Type': 'application/json'
            }
        });
}