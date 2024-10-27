import axios from "axios";
import { SERV_DIR,SERV_PORT } from "../utilities";

export function unban(users,id){
    axios.put("http://"+SERV_DIR+":"+SERV_PORT+"/subscriptions/unban/"+id,users);
}