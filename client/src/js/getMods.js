import axios from "axios";
import { SERV_DIR,SERV_PORT } from "../utilities";
export function getMods(communityId){


    return axios.get("http://"+SERV_DIR+":"+SERV_PORT+"/subscriptions/mods/"+communityId,{
        headers:{
            'Authorization':'Bearer '+ JSON.parse(localStorage.getItem('userData')).token,
            'Content-Type': 'application/json'
        }
    });

}