import React from "react";
import axios from "axios";
import { SERV_DIR,SERV_PORT } from "../utilities";

 export function CommunityInfoRequest(communityId){
    let userName = JSON.parse(sessionStorage.getItem('user')).username;
    
 
    return axios.get('http://'+SERV_DIR+':'+SERV_PORT+'/communities/'+userName+'/'+communityId);


}