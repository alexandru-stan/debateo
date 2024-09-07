import axios from "axios";
import { SERV_DIR,SERV_PORT } from "../utilities";
import { formatImage } from "./imageFormatting";
export function  refreshProfileImage(username){


return axios.get("http://"+SERV_DIR+":"+SERV_PORT+"/users/refreshProfileImage/"+username)



    

}