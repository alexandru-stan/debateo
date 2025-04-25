import axios from "axios";
import { SERV_DIR,SERV_PORT } from "../utilities";

export function updateCommunityOptions(options){

    axios.post("http://"+SERV_DIR+":"+SERV_PORT+"/communities/options/update",options,{
        headers:{
            'Authorization':'Bearer '+ JSON.parse(localStorage.getItem('userData')).token,
            'Content-Type': 'application/json'
        }
    }

)

}