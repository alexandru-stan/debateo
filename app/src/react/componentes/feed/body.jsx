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
    const [newPosts, setNewPosts] = useState([]);
    const [newRequest, setNewRequest] = useState(false);
    const[alreadyRequestedPosts,setARP] = useState(null);
    const myRef = useRef();

 
 
    const observer = new IntersectionObserver(entry => {
     if(entry[0].isIntersecting){
      PostsRequest(page,null,myRef).then(response=> {
        setNewPosts(postsArr.concat(response));
      })
      observer.unobserve(myRef.current);
     } else {
      console.log(entry);
     }
    })

    


  window.addEventListener('DOM',()=>{console.log(e.scrollHeight);})

   
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
  console.log(myRef.current);
}



},[postsArr]);


useEffect(() => {
  setPostsArr((prevPosts) => [...prevPosts,...newPosts])
},[newPosts])


    return(
    <div style={{color:'white'}} id='body-feed'>
 
        {postsArr}
       
<div id='tupu'>a</div>
    </div>
    );
}

export default Body;