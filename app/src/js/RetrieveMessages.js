import React from "react";
import axios from "axios";
import {SERV_DIR,SERV_PORT} from "../utilities";
export function RetrieveMessages(user,interactuer){

    return axios.get("http://"+SERV_DIR+":"+SERV_PORT+"/messages/getMessages/"+user+"/"+interactuer);
    
}