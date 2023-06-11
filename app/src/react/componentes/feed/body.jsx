import React from 'react';
import Post from './body/post';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { PostsRequest } from '../../../js/PostsRequest'
import { useRef } from 'react';
import { Mensajes } from '../reusable/mensajes/mensajes';
const Body = () => {
    const [postsArr,setPostsArr] = useState([]);
    const [page,setPage] = useState(0);
    const [isLast,setIslast] = useState(false);
    const myRef = useRef();

 
 
    const handleIntersection = (entries) => {
      if (entries[0].isIntersecting && !isLast) {
        observer.disconnect();
        setPage((prevPage) => prevPage + 1);
        PostsRequest(page, null, myRef,setIslast,null)
          .then((response) => {
            setPostsArr((prevPosts) => prevPosts.concat(response));

          })  
          
      } 
    };
  
    const observer = new IntersectionObserver(handleIntersection);

    




   
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
        <Mensajes/>
       
<div id='tupu'>a</div>
    </div>
    );
}

export default Body;