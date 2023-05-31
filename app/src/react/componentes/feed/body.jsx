import React from 'react';
import Post from './body/post';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { PostsRequest } from '../../../js/PostsRequest';
const Body = () => {
    const [postsArr,setPostsArr] = useState([]);
    const [page,setPage] = useState(0);
  
  
    



   
useEffect(  ()=> {
  PostsRequest(page).then(response => {
    setPostsArr(response);
  })
 
  
},[])


    return(
    <div style={{color:'white'}} id='body-feed'>
   
        {postsArr}

    </div>
    );
}

export default Body;