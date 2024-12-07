import axios from "axios";
import {SERV_DIR,SERV_PORT} from "../utilities";
export function getComments(post){

return axios.get('http://'+SERV_DIR+':'+SERV_PORT+'/comments/'+post,{
    headers:{
        'Authorization':'Bearer '+ JSON.parse(localStorage.getItem('userData')).token,
        'Content-Type': 'application/json'
    }
});


}