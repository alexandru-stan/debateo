import axios from "axios";
import { SERV_DIR } from "../utilities";
import { SERV_PORT } from "../utilities";

export function sendReply(reply){

    axios.post("http://"+SERV_DIR+":"+SERV_PORT+"/replies/send",reply,{
        headers:{
            'Authorization':'Bearer '+ JSON.parse(localStorage.getItem('userData')).token,
            'Content-Type': 'application/json'
        }
    });

}