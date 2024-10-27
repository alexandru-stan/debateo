import axios from "axios";

import {SERV_DIR,SERV_PORT } from "../utilities";

export function BanUsers(items,id){


    axios.put("http://"+SERV_DIR+":"+SERV_PORT+"/subscriptions/banUsers/"+id,items);

}