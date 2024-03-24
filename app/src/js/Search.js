import axios from "axios";
import { SERV_DIR,SERV_PORT } from '../utilities';
export function searchRequest(string){

    return axios.get('http://'+SERV_DIR+':'+SERV_PORT+'/communities/search/'+string);

}