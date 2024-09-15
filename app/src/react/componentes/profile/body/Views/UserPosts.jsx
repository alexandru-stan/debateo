import React from "react";
import { useState,useEffect } from "react";
import { PostsRequest } from "../../../../../js/PostsRequestByCreator";
import { useRef } from "react";
import noSubscriptions from "../../../../../assets/img/noSubscriptions.png";
import Image from "../../../reusable/img";
import SpinnerLoader from "../../../reusable/SpinnerLoader";
import { Spinner } from "react-bootstrap";
export const UserPosts = (props) => {

    const $  = require('jquery');
    let noSubscriptionsElement;
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
          response.length ? setPostsArr(response) : setPostsArr( noSubscriptionsElement = <div id="noSubscriptions" className='w-full   flex flex-col items-center text-naranjaMolon font-bold mt-5 text-center '>
            <p>Vaya... parece ser que no estás suscrito a ninguna comunidad...</p>
            <div><Image ruta={noSubscriptions}/></div>
            </div>)
          setPage(page+1);
         
      
       
        })
       
       
        
      },[])



useEffect(()=> {



if(myRef.current!=null){
  observer.observe(myRef.current);
  
}
},[postsArr]);




    return  (<>
       
        <div  className= {props.visibility ? "w-full  flex flex-col  items-center " : " hidden "}>
      
       { postsArr.length == 0 ? <SpinnerLoader id='spinnerUserPosts'/> : postsArr }
        
        </div>
        </>
    )

    




}