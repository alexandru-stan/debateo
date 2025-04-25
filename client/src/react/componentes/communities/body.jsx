
import { CommunityInfo } from './body/communityInfo';
import React, { useState,useEffect } from 'react';
import { CommunityInfoRequest } from '../../../js/CommunityInfoRequest';
import { formatImage } from '../../../js/imageFormatting';
import { PostsRequestByCommunity } from '../../../js/PostRequestByCommunity';
import { useRef } from 'react';
import SpinnerLoader from '../reusable/SpinnerLoader';
import { useLocation, useNavigate } from 'react-router-dom';
import admin from '../../../assets/img/admin.png';
import crown from '../../../assets/img/crown.png';
import axios from 'axios';
import {SERV_DIR,SERV_PORT} from "../../../utilities";

import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

// export const Body = (props) => {
// const [state,setState] = useState(localStorage.getItem('cid'));
// const [info,setInfo] = useState({});
// const [postsArr,setPostsArr] = useState([]);
// const [page,setPage] = useState(0);
// const [isLast,setIslast] = useState(false);
// const[subscription,setSubscription] = useState(null);
// const [SubButton,setSubButton] = useState(null);
// const [creadorState, setCS] = useState(null);
// const [apiResponse,setApiResponse] = useState();
// const [loading, setLoading] = useState(true);
// const myRef = useRef();
// const navigate = useNavigate();
// let creador;
// let loggedUser = JSON.parse(localStorage.getItem('userData')).username;


// useEffect(()=>{
// localStorage.setItem('cid',loc.pathname.split("community/")[1]);
// setState(loc.pathname.split("community/")[1])
// },[loc])

// let request =  {
//   page:page,
//   state:state,
//   myRef:myRef,
//   setIslast:setIslast,
//   setPostsArr:setPostsArr,


// }
// const handleIntersection = (entries) => {
//   if (entries[0].isIntersecting && !isLast) {
    
//     observer.disconnect();
//     // setPage((prevPage) => prevPage + 1);
//     // request.page = request.page+1;
//     setLoading(true);
//      PostsRequestByCommunity(request,creador)
  
//       .then((response) => {
//         setPostsArr((prevPosts) => prevPosts.concat(response));
//        setLoading(false);
//       })  
  
      
//   } 
//   if(isLast) setIslast(false);


// };
// const observer = new IntersectionObserver(handleIntersection);


// // useEffect(()=>{
// // if(info.communityId!=undefined){


// //   let index = comunidadesRecientes.findIndex(obj => obj == info.communityId) 

// //  index == -1 ?
// //  (function() {comunidadesRecientes.push(info.communityId);
// //   localStorage.setItem("comunidadesRecientes", JSON.stringify(comunidadesRecientes))
// //   dispatch(update(!rctTrigger))})
// //   :

// //   comunidadesRecientes.splice(index,1);
// //   comunidadesRecientes.unshift(info.communityId);
// //   localStorage.setItem("comunidadesRecientes",JSON.stringify(comunidadesRecientes))
// //   dispatch(update(!rctTrigger))

// // }
// // },[info])



// function changeSub(subscription){
// let userData = JSON.parse(localStorage.getItem("userData"))
//   if(subscription==null) {
    
//     axios.post("http://"+SERV_DIR+":"+SERV_PORT+"/subscriptions/sub/"+loggedUser+"/"+state,null,{
//       headers:{
//           'Authorization':'Bearer '+ JSON.parse(localStorage.getItem('userData')).token,
//           'Content-Type': 'application/json'
//       }
//   });
//    userData.subsCount++;
//   // sessionStorage.setItem('user',JSON.stringify(userData))
//     setSubscription("MEMBER");
  
//   }
//   else {
//     axios.delete("http://"+SERV_DIR+":"+SERV_PORT+"/subscriptions/unsub/"+loggedUser+"/"+state,{
//       headers:{
//           'Authorization':'Bearer '+ JSON.parse(localStorage.getItem('userData')).token,
//           'Content-Type': 'application/json'
//       }
//   });
//     userData.subsCount--;
//     // sessionStorage.setItem('user',JSON.stringify(userData));
//     setSubscription(null);

//   }
//   // setApiResponse(null);
// }


// useEffect(() => {
//   setState(localStorage.getItem('cid'));

//   setPostsArr([]);
 
//    },[localStorage.getItem('cid')])
  
//    useEffect(()=> {
   
//     CommunityInfoRequest(state).then(response => {
//     let data = response.data;
     
//         creador = data.communityCreator;
//         setCS(data.communityCreator);
//         setSubscription(data.subscription);
  
//   if(data.subscription != "BANNED") {
//   if(creadorState==loggedUser) setSubButton(<button className=" hover:bg-moradoLight rounded-md p-2 text-gray-700 border-2 border-moradoLight  text-white bg-moradoFondo placeholder-gray-400  placeholder-gray-400 focus:outline-none    focus:border-naranjaMolon"  onClick={()=> navigate("/admin/"+state)}  id='administrar'>Administrar</button>)
//   else if ( data.subscription!=null) setSubButton(<button className=" hover:bg-moradoLight rounded-md p-2 text-gray-700 border-2 border-moradoLight  text-white bg-moradoFondo placeholder-gray-400  placeholder-gray-400 focus:outline-none    focus:border-naranjaMolon" onClick={()=> {    changeSub(subscription)}} id='Unsub'>Desuscribirse</button>)
//   else setSubButton(<button className=" hover:bg-moradoLight rounded-md p-2 text-gray-700 border-2 border-moradoLight  text-white bg-moradoFondo placeholder-gray-400  placeholder-gray-400 focus:outline-none    focus:border-naranjaMolon" onClick={()=> {    changeSub(subscription)}} id='Sub'>Suscribirse</button>)
  
//   } else {

//   }
 
//   setInfo({
//             communityName: data.communityName,
//             communityDescription: data.communityDescription,
//             communityImage: formatImage(data.communityImage),
//             communityBackgroundImage: formatImage(data.communityBackgroundImage),
//             communityCreator: data.communityCreator,
//             communityMembers: data.communityMembers,
//             sensitiveContent: data.sensitiveContent,
//             communityId:data.communityId,
//             categoria: data.categoria,
//             admin: data.communityCreator==loggedUser ? <img src={crown} /> : data.subscription=="MOD"?<img  src={admin} />:null
//         })

        
       
//         PostsRequestByCommunity(request,creador,response.data.subscription).then(response =>{
//          console.log(response);
//           setPostsArr(response);
//           setLoading(false);
//           setApiResponse(200);
//           setPage(page+1)
         
        
         
//         }).catch(response => {
//           // console.log(response);
//           setLoading(false);
//           setApiResponse(response.response.status);
//           setPostsArr(
         
//             <p  className="mt-5 w-2/4 text-2xl Kanit text-center text-naranjaMolon">{response.response.data}</p>

//           )
//         })
        
        

//     })
//    },[state,subscription])


// useEffect(()=> {

// if(subscription !='BANNED'){
//   if(  dorState==loggedUser) setSubButton(<button className=" hover:bg-moradoLight rounded-md p-2 text-gray-700 border-2 border-moradoLight  text-white bg-moradoFondo placeholder-gray-400  placeholder-gray-400 focus:outline-none    focus:border-naranjaMolon" onClick={()=> navigate("/admin/"+state)} id='administrar'>Administrar</button>)
//   else if ( subscription!=null) setSubButton(<button className="hover:bg-moradoLight rounded-md p-2  text-gray-700 border-2 border-moradoLight  text-white bg-moradoFondo placeholder-gray-400  placeholder-gray-400 focus:outline-none   focus:border-naranjaMolon" onClick={()=> {
//     changeSub(subscription)
 
//   }} id='Unsub'>Desuscribirse</button>)
//   else setSubButton(<button className="hover:bg-moradoLight rounded-md p-2 text-gray-700 border-2 border-moradoLight  text-white bg-moradoFondo placeholder-gray-400  placeholder-gray-400 focus:outline-none    focus:border-naranjaMolon" onClick={()=> {changeSub(subscription)}} id='Sub'>Suscribirse</button>)
// } else {
//   setSubButton(null);
// }
// },[subscription,creadorState,state])


 



// useEffect(()=>{


// if(myRef.current!=null && postsArr.length>0){
//     observer.observe(myRef.current);
  
// }


// },[postsArr])







//     return (
//     <div className='mt-5 flex flex-col justify-center items-center community-body'>
//         <CommunityInfo apiResponse={apiResponse} setApiResponse={setApiResponse} subscription ={subscription} subButton ={SubButton} state={state} info={info}/>
//         {postsArr}
//         {loading ? <SpinnerLoader hijoStyle={{width:'4rem'}} clase='mt-5' id='spinnerCommunityPosts'/> : null}
//         {/*messagesRender ? <Mensajes/>:null*/}
//     </div>
//     )
// }


export const Body = (props) => {
 const loc = useLocation();
 const [communityInfo,setCommunityInfo] = useState();
//  const [page,setPage] = useState(0);
 const [postArr,setPostArr] = useState(null);
 const [loading,setLoading] = useState(true);
 const [isLast,setIslast] = useState(false);
//  const [creador,setCreador] =useState(null);
 const myRef = useRef();

 

 function privateCommunityAfterSubscribePostRequest(){
  // setPage(0);

  if(communityInfo.subscription == null) {
    
    setCommunityInfo({
      ...communityInfo,
    subscription:{
          
       
        subscriptionLevel: 'MEMBER'

      
    } 
  
  })

 


axios.post("http://"+SERV_DIR+":"+SERV_PORT+"/subscriptions/sub/"+loc.pathname.split("community/")[1],null,{
      headers:{
          'Authorization':'Bearer '+ JSON.parse(localStorage.getItem('userData')).token,
          'Content-Type': 'application/json'
      }
  }).then(


    e => {

      let request = {
        page:0,
        myRef:myRef,
        setIslast:setIslast,
        cid: loc.pathname.split("community/")[1],
        setPostArr:setPostArr
       
      }
      PostsRequestByCommunity(request,communityInfo.communityCreator,communityInfo.subscription?.subscriptionLevel).then(response =>{
              
        setPostArr({
         posts: response,
         page:0
        });
        setLoading(false);
        // setPage(page+1)
    }).catch(e => {
      console.log(e);
      setPostArr(<p className="mt-5 text-center text-lg Kanit text-bold text-naranjaMolon"> {e.response.status== 402 ? "Necesitas suscribirte a la comunidad para acceder a sus publicaciones" : " "} </p>);
      setLoading(false);
      
    });

    }


  );
} else {




  axios.delete("http://"+SERV_DIR+":"+SERV_PORT+"/subscriptions/unsub/"+loc.pathname.split("community/")[1],{
          headers:{
              'Authorization':'Bearer '+ JSON.parse(localStorage.getItem('userData')).token,
              'Content-Type': 'application/json'
          }
      }).then(()=>{

  
        setCommunityInfo({
          ...communityInfo,
          subscription:null
        })
        communityInfo.privateCommunity ?  setPostArr({page:0,posts:<p className="mt-5 text-center text-lg Kanit text-bold text-naranjaMolon"> Se necesita estar suscrito a la comunidad para acceder a sus publicaciones </p>})
 : null;
      });
  

}

 
 }

  const handleIntersection = (entries) => {
    if (entries[0].isIntersecting && !isLast) {
      observer.disconnect();
      setLoading(true);
      
      let request = {
        page:(postArr.page+1),
        myRef:myRef,
        setIslast:setIslast,
        cid: loc.pathname.split("community/")[1]
       
       
      }

      console.log("pido página dentro de observer "+request.page) 
      
      PostsRequestByCommunity(request,communityInfo.communityCreator)
    
        .then((response) => {
        
        setPostArr({
          page:postArr.page+1,
          posts: postArr.posts.concat(response)
       
        });
        setLoading(false);
        // setPage(page+1);
        })  
    
        
    } 
    if(isLast) setIslast(false);
  
  
  };
  const observer = new IntersectionObserver(handleIntersection);


useEffect(() => {
  // myRef.current = null;
  // setPage(0);
postArr != null ? setPostArr(null) : null;
CommunityInfoRequest(loc.pathname.split("community/")[1]).then(e => {
setCommunityInfo(e.data);
     
   
       

        let request = {
          page: 0,
          myRef:myRef,
          setIslast:setIslast,
          cid: loc.pathname.split("community/")[1],
          setPostArr:setPostArr
         
         
        }
      
        console.log(myRef.current==undefined ? 0 : page);

        // console.log(request.cid);
        // console.log("hola");
        console.log("pidiendo pagina 0 dentro de original")
        PostsRequestByCommunity(request,e.data.communityCreator,e.data.subscription?.subscriptionLevel).then(response =>{
          // console.log("hola");
          setPostArr({
            posts:response,
            page:0
          
          }); 
          setLoading(false);
          // setPage(page+1)
      }).catch(e => {
        console.log(e);
        setPostArr({page:0,posts:<p className="mt-5 text-center text-lg Kanit text-bold text-naranjaMolon"> {e.response?.status== 402 ? "Se necesita estar suscrito a la comunidad para acceder a sus publicaciones" : " "} </p>});
        setLoading(false);
        
      });
      

});


},[loc])


useEffect(()=> {



  if(myRef.current!=null){
    observer.observe(myRef.current);
    
  }
  },[postArr]);
  
      return (
      <div className='mt-5 flex flex-col justify-center items-center community-body'>
        {communityInfo!=undefined  ?  <CommunityInfo recallPostRequest={privateCommunityAfterSubscribePostRequest} communityInfo ={communityInfo}/> : null}
        {postArr?.posts}
        {loading ? <SpinnerLoader hijoStyle={{width:'4rem'}} clase='mt-5' id='spinnerCommunityPosts'/> : null}
          {/*messagesRender ? <Mensajes/>:null*/}
      </div>
      )
  }