import axios from "axios";
import { SERV_DIR,SERV_PORT } from "../utilities";
export function updateUser(user,originalUsername){

    

    axios.put("http://"+SERV_DIR+":"+SERV_PORT+"/users/update/"+originalUsername,user,{
        headers:{
            'Authorization':'Bearer '+ JSON.parse(localStorage.getItem('userData')).token,
            'Content-Type': 'application/json'
        }
    });

}