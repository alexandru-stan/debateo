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
import Image from '../reusable/img';
import noSubscriptions from "../../../assets/img/noSubscriptions.png"



const $ = require('jquery');

// import { requestFeed } from '../../../js/PostRequestParameter';
const Body = () => {
  
   
 
    let noSubscriptionsElement =   <div id="noSubscriptions" className='w-full  flex flex-col items-center text-naranjaMolon font-bold mt-5 text-center '>
     <p>Vaya... parece ser que no estás suscrito a ninguna comunidad...</p>
     <div><Image ruta={noSubscriptions}/></div>
     </div>
    const [postsArr,setPostsArr] = useState([]);
    const [page,setPage] = useState(0);
    const [isLast,setIslast] = useState(false);
    const [fyp,setFyp] = useState(true);
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
        PostsRequest(request,setPostsArr,fyp)
          .then((response) => {
            setPostsArr((prevPosts) => prevPosts.concat(response));
            $("#feedSpinner").css("display","none");

          })  
          
      } 
    };
  
    const observer = new IntersectionObserver(handleIntersection);

    



   
useEffect(  ()=> {

  PostsRequest(request,setPostsArr,fyp).then(response => {
   
    $("#feedSpinner").css("display","none");
    setPostsArr(response);
    setPage(page+1);
 

 
  })
 
 
  
},[fyp])


useEffect(()=> {



if(myRef.current!=null){
  observer.observe(myRef.current);
  
}
},[postsArr]);





    return(
    <div  className=' flex flex-col      height:100%                  items-center    '  id='body-feed'>
        

     
        
    
      <div id="fyp" className='mt-4 flex flex-row bg-moradoFondo rounded-lg w-2/6 justify-center' >
        <div onClick={(()=>{ 
        fyp? 
        null:
        (function(){
          setPostsArr([]);
          setFyp(true);
          setPage(0);
          setIslast(false)
        })()
        
        }
        )} className={ fyp? ' rounded-lg  selectedPage  pageSelector': ' rounded-lg pageSelector' }>Para tí</div>



        <div onClick={(()=> {
          fyp?(function(){
            setPostsArr([]);
          setFyp(false);
          setPage(0);
          setIslast(false)
          
        })() : 
          null
          
        } )} className={  fyp? 'rounded-lg pageSelector':' rounded-lg selectedPage pageSelector'}>Siguiendo</div>
      </div>
        {postsArr}
        <SpinnerLoader id="feedSpinner"/>
        

        <Mensajes/>
       
       {!fyp && postsArr.length==0 ? noSubscriptionsElement : null }

    </div>
    );


  
        
       
    



}

export default Body;