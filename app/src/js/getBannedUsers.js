import axios from "axios";
import { SERV_DIR,SERV_PORT } from "../utilities";
export function getBannedUsers(communityId){

    return axios.get('http://'+SERV_DIR+":"+SERV_PORT+"/subscriptions/bannedUsers/"+communityId)

}