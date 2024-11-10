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
import { useSelector } from 'react-redux';
import { LateralMenuRight } from '../reusable/LateralMenuRight/rightLateralMenu';
import { useSelectorr } from 'react-redux';

const $ = require('jquery');

// import { requestFeed } from '../../../js/PostRequestParameter';
const Body = (props) => {

    const messagesRender = useSelector(state => state.messagesRender.value);
    let noSubscriptionsElement;
    const [postsArr,setPostsArr] = useState([]);
    const [page,setPage] = useState(0);
    const [isLast,setIslast] = useState(false);
    const [fyp,setFyp] = useState(true);
    const myRef = useRef();
    const [loading,setLoading] = useState();
    const userData = JSON.parse(localStorage.getItem('userData'))

    

    let request = {
      page:page,
      myRef:myRef,
      setIslast:setIslast,
      loggedUser: userData?.username,
     
    }



 
 
    const handleIntersection = (entries) => {
      if (entries[0].isIntersecting && !isLast) {
        observer.disconnect();
        setPage((prevPage) => prevPage + 1);
        console.log("YOU'RE REQUESTING PAGE" + page);
        PostsRequest(request,setPostsArr,fyp)
          .then((response) => {
            setPostsArr((prevPosts) => prevPosts.concat(response));
            $("#feedSpinner").css("display","none");

          })  
          
      } 
    };
  
    const observer = new IntersectionObserver(handleIntersection);

    



   
useEffect(  ()=> {
  setLoading(true);
 PostsRequest(request,setPostsArr,fyp).then(response => {
   
    setLoading(false);
    response.length ? setPostsArr(response) : setPostsArr( noSubscriptionsElement = <div id="noSubscriptions" className='w-full   flex flex-col items-center text-naranjaMolon font-bold mt-5 text-center '>
      <p>Vaya... parece ser que no estás suscrito a ninguna comunidad...</p>
      <div><Image ruta={noSubscriptions}/></div>
      </div>)
    setPage(page+1);
    }

 
)
  
 
 
  
},[fyp])



useEffect(()=> {



if(myRef.current!=null){
  observer.observe(myRef.current);
  
}
},[postsArr]);





    return(
      <>
 
    <div  className=' flex flex-col                   items-center    '  id='body-feed'>
   
   
     {messagesRender ? <Mensajes/>:null}
     
    
      <div id="fyp" className='mt-4 flex flex-row bg-moradoFondo  rounded-lg w-2/6 justify-center' >
      
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
     { loading ? <SpinnerLoader clase='w-1/4 ' id='feedLoader'/> : null} 
     
             { postsArr}
       
        

      
       


    </div>
   
    </>
    );


  
        
       
    



}

export default Body;