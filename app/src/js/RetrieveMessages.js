import axios from "axios";
import {SERV_DIR,SERV_PORT} from "../utilities";
function RetrieveMessages() {
    let endpoint =  "http://"+SERV_DIR+":"+SERV_PORT+"/messages/mistborn";
    return axios.get();

}


export default RetrieveMessages();