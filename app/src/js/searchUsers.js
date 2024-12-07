import axios from "axios";
import { SERV_DIR,SERV_PORT } from '../utilities';
export function searchUsers(string,requestUser){

    return axios.get('http://'+SERV_DIR+':'+SERV_PORT+'/users/search/'+string+"/"+requestUser,{
        headers:{
            'Authorization':'Bearer '+ JSON.parse(localStorage.getItem('userData')).token,
            'Content-Type': 'application/json'
        }
    });

}