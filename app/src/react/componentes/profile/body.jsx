import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import { PostsRequest } from '../../../js/PostsRequest';
import { UserData } from "./body/UserData";
import { Mensajes } from '../reusable/mensajes/mensajes';
export const Body = () => {
    


    // const [postsArr,setPostsArr] = useState([]);
    // const [page,setPage] = useState(0);
    // const [isLast,setIslast] = useState(false);
    // const myRef = useRef();

  
    // const handleIntersection = (entries) => {
    //   if (entries[0].isIntersecting && !isLast) {
    //     observer.disconnect();
    //     setPage((prevPage) => prevPage + 1);
    //     PostsRequest(page, null, myRef,setIslast)
    //       .then((response) => {
    //         setPostsArr((prevPosts) => prevPosts.concat(response));

    //       })  
          
    //   } 
    // };
  
    // const observer = new IntersectionObserver(handleIntersection);

    
 



   
// useEffect(  ()=> {

    


//   PostsRequest(page,null,myRef).then(response => {
   
//     setPostsArr(response);
//     setPage(page+1);
 

 
//   })
 
  
// },[])





// useEffect(()=> {



// if(myRef.current!=null){
//   observer.observe(myRef.current);
  
// }
// },[postsArr]);











    return (
        <div className="text-white flex justify-center w-2/4  mt-postMT bg-emerald-950" id='profile-body'>
       <UserData/>
       <Mensajes/>
        </div>
    )
}