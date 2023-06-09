import React from 'react';
import Post from './body/post';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { PostsRequest } from '../../../js/PostsRequest'
import { useRef } from 'react';
const Body = () => {
    const [postsArr,setPostsArr] = useState([]);
    const [page,setPage] = useState(0);
    const myRef = useRef();

 
 
    const observer = new IntersectionObserver(entry => {
     if(entry[0].isIntersecting){
      setPage(page+1);  
      PostsRequest(page,null,myRef).then(response=> {
        setPostsArr(postsArr.concat(response));
      })
      observer.unobserve(myRef.current);
     } else {

     }
    })

    




   
useEffect(  ()=> {
  PostsRequest(page,null,myRef).then(response => {
   
    setPostsArr(response);
    setPage(page+1);
 

 
  })
 
  
},[])


useEffect(()=> {


console.log(myRef.current);
if(myRef.current!=null){
  observer.observe(myRef.current);
  
}
},[postsArr]);




    return(
    <div style={{color:'white'}} id='body-feed'>
 
        {postsArr}
       
<div id='tupu'>a</div>
    </div>
    );
}

export default Body;