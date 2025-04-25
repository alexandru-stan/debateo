import axios from "axios";
import {SERV_DIR,SERV_PORT} from "../utilities";
export default function RetrieveChats() {
    
    let endpoint =  "http://"+SERV_DIR+":"+SERV_PORT+"/messages/RetrieveChats/"+JSON.parse(localStorage.getItem('userData')).username;
    return axios.get(endpoint,{
        headers:{
            'Authorization':'Bearer '+ JSON.parse(localStorage.getItem('userData')).token,
            'Content-Type': 'application/json'
        }
    });

}


