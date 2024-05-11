import axios from "axios";
import { SERV_DIR,SERV_PORT } from '../utilities';
export function searchUsers(string){

    return axios.get('http://'+SERV_DIR+':'+SERV_PORT+'/users/search/'+string);

}