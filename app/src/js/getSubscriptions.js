import axios from "axios";
import {SERV_DIR, SERV_PORT} from "../utilities";

export function getSubscriptions(username){

    return axios.get("http://"+SERV_DIR+":"+SERV_PORT+"/communities/"+username,{
        headers:{
            'Authorization':'Bearer '+ JSON.parse(localStorage.getItem('userData')).token,
            'Content-Type': 'application/json'
        }
    });



}