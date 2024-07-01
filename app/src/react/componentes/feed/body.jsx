import React from 'react';
import Post from './body/post';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { PostsRequest } from '../../../js/PostsRequest'
import { useRef } from 'react';
import { Mensajes } from '../reusable/mensajes/mensajes';
import Recommendations from './body/recommendations/recommendations';
import SpinnerLoader from '../reusable/SpinnerLoader';


const $ = require('jquery');

// import { requestFeed } from '../../../js/PostRequestParameter';
const Body = () => {
  
   
  if(JSON.parse(sessionStorage.getItem("user"))?.subsCount>0){
    
    const [postsArr,setPostsArr] = useState([]);
    const [page,setPage] = useState(0);
    const [isLast,setIslast] = useState(false);
    const myRef = useRef();
    let request = {
      page:page,
      myRef:myRef,
      setIslast:setIslast,
      loggedUser: JSON.parse(sessionStorage.getItem('user')).username,
     
    }


 
 
    const handleIntersection = (entries) => {
      if (entries[0].isIntersecting && !isLast) {
        observer.disconnect();
        setPage((prevPage) => prevPage + 1);
        PostsRequest(request,setPostsArr)
          .then((response) => {
            setPostsArr((prevPosts) => prevPosts.concat(response));
            $("#feedSpinner").css("display","none");

          })  
          
      } 
    };
  
    const observer = new IntersectionObserver(handleIntersection);

    




   
useEffect(  ()=> {

  PostsRequest(request,setPostsArr).then(response => {
   
    $("#feedSpinner").css("display","none");
    setPostsArr(response);
    setPage(page+1);
 

 
  })
 
 
  
},[])


useEffect(()=> {



if(myRef.current!=null){
  observer.observe(myRef.current);
  
}
},[postsArr]);





    return(
    <div  className=' flex flex-col      height:100%                  items-center    '  id='body-feed'>
        

     
        
    
   
        {postsArr}
        <SpinnerLoader id="feedSpinner"/>
        

        <Mensajes/>
       

    </div>
    );


    } else {
      
      return (
        <Recommendations/>
        

    
      )
    }



}

export default Body;