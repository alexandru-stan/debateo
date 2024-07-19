import axios from "axios";
import {SERV_DIR,SERV_PORT} from "../utilities";

export async function getUnreadMessages(messageReceiver) {


   return await axios.get("http://"+SERV_DIR+":"+SERV_PORT+"/messages/unread/"+messageReceiver);

}