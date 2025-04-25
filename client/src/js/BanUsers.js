import axios from "axios";

import {SERV_DIR,SERV_PORT } from "../utilities";

export function BanUsers(items,id,type){


    axios.put("http://"+SERV_DIR+":"+SERV_PORT+"/subscriptions/banUsers/"+id+"/"+type,items,{
        headers:{
            'Authorization':'Bearer '+ JSON.parse(localStorage.getItem('userData')).token,
            'Content-Type': 'application/json'
        }
    });

}