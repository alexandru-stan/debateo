import React from "react";
import axios from "axios";
import { SERV_DIR,SERV_PORT } from "../utilities";

export function ReadMessages(sender,receiver){

    axios.post("http://"+SERV_DIR+":"+SERV_PORT+"/messages/read/"+sender+"/"+receiver,null,{
        headers:{
            'Authorization':'Bearer '+ JSON.parse(localStorage.getItem('userData')).token,
            'Content-Type': 'application/json'
        }
    });

}