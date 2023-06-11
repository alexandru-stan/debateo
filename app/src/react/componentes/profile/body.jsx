import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import { PostsRequest } from '../../../js/PostsRequest';
import { UserData } from "./body/UserData";
export const Body = () => {
    


    const [postsArr,setPostsArr] = useState([]);
    const [page,setPage] = useState(0);
    const [isLast,setIslast] = useState(false);
    const myRef = useRef();

  
    const handleIntersection = (entries) => {
      if (entries[0].isIntersecting && !isLast) {
        observer.disconnect();
        setPage((prevPage) => prevPage + 1);
        PostsRequest(page, null, myRef,setIslast)
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











    return (
        <div id='profile-body'>
       <div id='userInfo'><UserData/></div>
       <div id='userPosts'>{postsArr} </div>
       
        </div>
    )
}