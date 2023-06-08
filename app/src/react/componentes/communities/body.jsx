
import { CommunityInfo } from './body/communityInfo';
import React, { useState,useEffect } from 'react';
import { CommunityInfoRequest } from '../../../js/CommunityInfoRequest';
import { formatImage } from '../../../js/imageFormatting';
import { PostsRequest } from '../../../js/PostsRequest';

export const Body = (props) => {
const [state,setState] = useState(localStorage.getItem('cid'));
const [info,setInfo] = useState({});
const [postsArr,setPostsArr] = useState([]);
const [page,setPage] = useState(0);
   
   useEffect(() => {
  setState(localStorage.getItem('cid'));
   },[localStorage.getItem('cid')])


   useEffect(()=> {
    CommunityInfoRequest(state).then(response => {
        console.log(response.data);
        let data = response.data;
      
      console.log(state)
      PostsRequest(page,state).then(response => {
        setPostsArr(response);
        console.log(postsArr);
      })
        
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
        <CommunityInfo info={info}/>
       {postsArr}
        </div>
    )
}