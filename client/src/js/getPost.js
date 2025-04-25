import axios from "axios";
import {SERV_DIR,SERV_PORT} from "../utilities";
export function getPost(username,post){


    return axios.get("http://"+SERV_DIR+":"+SERV_PORT+"/posts/getPost/"+username+"/"+post,{
        headers:{
            'Authorization':'Bearer '+ JSON.parse(localStorage.getItem('userData')).token,
            'Content-Type': 'application/json'
        }
    });


}