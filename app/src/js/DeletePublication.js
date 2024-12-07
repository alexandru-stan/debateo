import axios from "axios";
import {SERV_DIR,SERV_PORT} from "../utilities";
export function deleteFunction(id){

    return axios.delete("http://"+SERV_DIR+":"+SERV_PORT+"/posts/"+id,{
        headers:{
            'Authorization':'Bearer '+ JSON.parse(localStorage.getItem('userData')).token,
            'Content-Type': 'application/json'
        }
    });

}