import axios from "axios";
import { SERV_DIR,SERV_PORT } from "../utilities";
export function getUsers(communityId, type){

    return axios.get('http://'+SERV_DIR+":"+SERV_PORT+"/subscriptions/users/"+communityId+"/"+type,{
        headers:{
            'Authorization':'Bearer '+ JSON.parse(localStorage.getItem('userData')).token,
            'Content-Type': 'application/json'
        }
    })

}