import axios from "axios";
import { SERV_DIR, SERV_PORT } from "../utilities";
export const getCommunityOptions = (id) => {
    
    return axios.get("http://"+SERV_DIR+":"+SERV_PORT+"/communities/options/"+id,{
        headers:{
            'Authorization':'Bearer '+ JSON.parse(localStorage.getItem('userData')).token,
            'Content-Type': 'application/json'
        }
    });
    
}