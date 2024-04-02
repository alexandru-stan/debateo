import axios from "axios";
import {SERV_DIR,SERV_PORT} from "../utilities";
export default function RetrieveChats() {
    
    let endpoint =  "http://"+SERV_DIR+":"+SERV_PORT+"/messages/RetrieveChats/"+JSON.parse(sessionStorage.getItem('user')).username;
    return axios.get(endpoint);

}


