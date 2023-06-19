import React from "react";
import axios from "axios";

 export function CommunityInfoRequest(communityId){

    return axios.get(`http://localhost:8080/communities/    ${communityId}`);


}