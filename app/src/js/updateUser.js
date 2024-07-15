import axios from "axios";
import { SERV_DIR,SERV_PORT } from "../utilities";
export function updateUser(user,originalUsername){

    console.log(user);

    axios.put("http://"+SERV_DIR+":"+SERV_PORT+"/users/update/"+originalUsername,user);

}