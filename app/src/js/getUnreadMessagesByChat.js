import axios from "axios";
import { SERV_DIR,SERV_PORT } from "../utilities";

export function  getUnreadMessagesByChat(username){
    
      return  axios.get("http://"+SERV_DIR+":"+SERV_PORT+"/messages/unreadByChat/"+username);
}