
import { CommunityInfo } from './body/communityInfo';
import React, { useState,useEffect } from 'react';
import { CommunityInfoRequest } from '../../../js/CommunityInfoRequest';
import { formatImage } from '../../../js/imageFormatting';


export const Body = (props) => {
  const [state,setState] = useState(localStorage.getItem('cid'));
const [info,setInfo] = useState({});
   
   useEffect(() => {
  setState(localStorage.getItem('cid'));
   },[localStorage.getItem('cid')])


   useEffect(()=> {
    CommunityInfoRequest(state).then(response => {
        console.log(response.data);
        let data = response.data;
        
        setInfo({
            communityName: data.communityName,
            communityDescription: data.communityDescription,
            communityImage: formatImage(data.communityImage),
            communityBackgroundImage: formatImage(data.communityBackgroundImage),
            communityCreator: data.communityCreator,
            communityMembers: data.communityMembers,
            sensitiveContent: data.sensitiveContent,
            communityId:data.communityId,
            categoria: data.categoria
        })
    })
   },[state])


    return (<div class='community-body'>
        <CommunityInfo
            info={info}
        />
        <h1></h1>
        </div>
    )
}