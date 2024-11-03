import axios from "axios";
import {SERV_DIR,SERV_PORT} from "../utilities";
export function createCommunity(form){

let formData = new FormData(form.current);

formData.append('creator',JSON.parse(sessionStorage.getItem('user')).username);
console.log(formData);  

return axios.post("http://"+SERV_DIR+":"+SERV_PORT+"/communities/add",formData)

}