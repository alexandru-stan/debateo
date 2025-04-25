import axios from "axios";
import { SERV_DIR,SERV_PORT } from "../utilities";
export function leerMensaje(id){
    
    axios.put("http://"+SERV_DIR+":"+SERV_PORT+"/messages/read/"+id,null,{
        headers:{
            'Authorization':'Bearer '+ JSON.parse(localStorage.getItem('userData')).token,
            'Content-Type': 'application/json'
        }
    });


}