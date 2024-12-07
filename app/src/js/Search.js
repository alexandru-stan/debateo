import axios from "axios";
import { SERV_DIR,SERV_PORT } from '../utilities';
export function searchRequest(string){

    return axios.get('http://'+SERV_DIR+':'+SERV_PORT+'/communities/search/'+string,{
        headers:{
            'Authorization':'Bearer '+ JSON.parse(localStorage.getItem('userData')).token,
            'Content-Type': 'application/json'
        }
    });

}