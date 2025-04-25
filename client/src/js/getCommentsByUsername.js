import axios from "axios";
import {SERV_DIR,SERV_PORT} from "../utilities";

export function getCommentsByUsername(username){

    return axios.get("http://"+SERV_DIR+":"+SERV_PORT+"/comments/byUser/"+username,{
        headers:{
            'Authorization':'Bearer '+ JSON.parse(localStorage.getItem('userData')).token,
            'Content-Type': 'application/json'
        }
    });
   

}