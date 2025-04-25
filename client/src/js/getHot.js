import axios from "axios";
import {SERV_DIR, SERV_PORT} from "../utilities";

export function getHot(){

    return axios.get("http://"+SERV_DIR+":"+SERV_PORT+"/communities/hot",{
        headers:{
            'Authorization':'Bearer '+ JSON.parse(localStorage.getItem('userData')).token,
            'Content-Type': 'application/json'
        }
    });



}