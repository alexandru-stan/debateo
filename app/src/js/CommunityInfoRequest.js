import React from "react";
import axios from "axios";
import { SERV_DIR,SERV_PORT } from "../utilities";

 export function CommunityInfoRequest(communityId){
    let userName = JSON.parse(localStorage.getItem('userData')).username;
    
 
    return axios.get('http://'+SERV_DIR+':'+SERV_PORT+'/communities/'+userName+'/'+communityId,{
        headers:{
            'Authorization':'Bearer '+ JSON.parse(localStorage.getItem('userData')).token,
            'Content-Type': 'application/json'
        }
    });


}