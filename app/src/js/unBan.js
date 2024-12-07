import axios from "axios";
import { SERV_DIR,SERV_PORT } from "../utilities";

export function unban(users,id,type){
    axios.put("http://"+SERV_DIR+":"+SERV_PORT+"/subscriptions/unban/"+id+"/"+type,users,{
        headers:{
            'Authorization':'Bearer '+ JSON.parse(localStorage.getItem('userData')).token,
            'Content-Type': 'application/json'
        }
    });
}