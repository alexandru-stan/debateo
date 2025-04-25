import axios from "axios";
import {SERV_DIR,SERV_PORT} from "../utilities";

export async function getUnreadMessages(messageReceiver) {


   return await axios.get("http://"+SERV_DIR+":"+SERV_PORT+"/messages/unread/"+messageReceiver,{
      headers:{
          'Authorization':'Bearer '+ JSON.parse(localStorage.getItem('userData')).token,
          'Content-Type': 'application/json'
      }
  });

}