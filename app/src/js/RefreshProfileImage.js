import axios from "axios";
import { SERV_DIR,SERV_PORT } from "../utilities";
import { formatImage } from "./imageFormatting";
export function  refreshProfileImage(username){

let image
axios.get("http://"+SERV_DIR+":"+SERV_PORT+"/users/refreshProfileImage/"+username).then(r =>  {
    console.log("b")
    console.log(formatImage(btoa(r.data)))
});



    

}