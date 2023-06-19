import React from "react";
import axios from "axios";

 export function CommunityInfoRequest(communityId){
    let userName = JSON.parse(sessionStorage.getItem('user')).username;
    console.log(userName);
 
    return axios.get('http://localhost:8080/communities/'+userName+'/'+communityId);


}