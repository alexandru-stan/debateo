
import { CommunityInfo } from './body/communityInfo';
import React, { useState,useEffect } from 'react';
import { CommunityInfoRequest } from '../../../js/CommunityInfoRequest';
import { formatImage } from '../../../js/imageFormatting';
import { PostsRequestByCommunity } from '../../../js/PostRequestByCommunity';
import { Mensajes } from '../reusable/mensajes/mensajes';
import { useRef } from 'react';

import { useNavigate } from 'react-router-dom';
import { CrearPublicacion } from './body/crearPublicacion';
import admin from '../../../assets/img/admin.png';
import crown from '../../../assets/img/crown.png';
import axios from 'axios';
import {SERV_DIR,SERV_PORT} from "../../../utilities";
import { update } from '../../../redux-store/slices/RecentCommunityTrigger';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { assign } from '../../../redux-store/slices/PopUp';
export const Body = (props) => {
const [state,setState] = useState(localStorage.getItem('cid'));
const [info,setInfo] = useState({});
const [postsArr,setPostsArr] = useState([]);
const [page,setPage] = useState(0);
const [isLast,setIslast] = useState(false);
const[subscription,setSubscription] = useState(null);
const [SubButton,setSubButton] = useState(null);
const [creadorState, setCS] = useState(null);
const rctTrigger = useSelector(state => state.recentCommunityTrigger.value);
const myRef = useRef();
let comunidadesRecientes = JSON.parse(localStorage.getItem("comunidadesRecientes"));
const navigate = useNavigate();

const popUpVal = useSelector(state => state.popUp.value);
const dispatch = useDispatch();
let creador;
let loggedUser = JSON.parse(sessionStorage.getItem('user')).username;
let request =  {
  page:page,
  state:state,
  myRef:myRef,
  setIslast:setIslast,
  setPostsArr:setPostsArr,


}
const handleIntersection = (entries) => {
  if (entries[0].isIntersecting && !isLast) {
    
    observer.disconnect();
    setPage((prevPage) => prevPage + 1);
    PostsRequestByCommunity(request,creador)
      .then((response) => {
        setPostsArr((prevPosts) => prevPosts.concat(response));
       
      })  
      
  } 
  if(isLast) setIslast(false);


};
const observer = new IntersectionObserver(handleIntersection);


// useEffect(()=>{
// if(info.communityId!=undefined){


//   let index = comunidadesRecientes.findIndex(obj => obj == info.communityId) 

//  index == -1 ?
//  (function() {comunidadesRecientes.push(info.communityId);
//   localStorage.setItem("comunidadesRecientes", JSON.stringify(comunidadesRecientes))
//   dispatch(update(!rctTrigger))})
//   :

//   comunidadesRecientes.splice(index,1);
//   comunidadesRecientes.unshift(info.communityId);
//   localStorage.setItem("comunidadesRecientes",JSON.stringify(comunidadesRecientes))
//   dispatch(update(!rctTrigger))

// }
// },[info])



function changeSub(subscription){
let userData = JSON.parse(sessionStorage.getItem("user"))
  if(subscription==null) {
    
    axios.post("http://"+SERV_DIR+":"+SERV_PORT+"/subscriptions/sub/"+loggedUser+"/"+state);
   userData.subsCount++;
  sessionStorage.setItem('user',JSON.stringify(userData))
    setSubscription("MEMBER");
  }
  else {
    axios.delete("http://"+SERV_DIR+":"+SERV_PORT+"/subscriptions/unsub/"+loggedUser+"/"+state);
    userData.subsCount--;
    sessionStorage.setItem('user',JSON.stringify(userData));
    setSubscription(null);
  }

}


useEffect(() => {
  setState(localStorage.getItem('cid'));
  setPage(0);
  setPostsArr([]);
  
   },[localStorage.getItem('cid')])
  
   useEffect(()=> {
    CommunityInfoRequest(state).then(response => {
       
        let data = response.data;
        
        creador = data.communityCreator;
        setCS(data.communityCreator);
        setSubscription(data.subscription);
      
      if(creadorState==loggedUser) setSubButton(<button  id='administrar'>Administrar</button>)
  else if ( data.subscription!=null) setSubButton(<button onClick={()=> {changeSub(data.subscription)}} id='Unsub'>Desuscribirse</button>)
  else setSubButton(<button onClick={()=> {changeSub(data.subscription)}} id='Sub'>Suscribirse</button>)
        setInfo({
            communityName: data.communityName,
            communityDescription: data.communityDescription,
            communityImage: formatImage(data.communityImage),
            communityBackgroundImage: formatImage(data.communityBackgroundImage),
            communityCreator: data.communityCreator,
            communityMembers: data.communityMembers,
            sensitiveContent: data.sensitiveContent,
            communityId:data.communityId,
            categoria: data.categoria,
            admin: data.communityCreator==loggedUser ? <img src={crown} /> : data.subscription=="MOD"?<img  src={admin} />:null
        })

       
        PostsRequestByCommunity(request,creador,response.data.subscription).then(response =>{
         
          setPostsArr(response);
         
         
        
         
        })

        

    })
   },[state])


useEffect(()=> {


// navigate("/admin/"+state)

  if(creadorState==loggedUser) setSubButton(<button className=" hover:bg-moradoLight rounded-md p-2 text-gray-700 border-2 border-moradoLight  text-white bg-moradoFondo placeholder-gray-400  placeholder-gray-400 focus:outline-none    focus:border-naranjaMolon" onClick={()=> dispatch(assign("Esta funcionalidad todavía no ha sido implementada"))} id='administrar'>Administrar</button>)
  else if ( subscription!=null) setSubButton(<button className="hover:bg-moradoLight rounded-md p-2  text-gray-700 border-2 border-moradoLight  text-white bg-moradoFondo placeholder-gray-400  placeholder-gray-400 focus:outline-none   focus:border-naranjaMolon" onClick={()=> {changeSub(subscription)}} id='Unsub'>Desuscribirse</button>)
  else setSubButton(<button className="hover:bg-moradoLight rounded-md p-2 text-gray-700 border-2 border-moradoLight  text-white bg-moradoFondo placeholder-gray-400  placeholder-gray-400 focus:outline-none    focus:border-naranjaMolon" onClick={()=> {changeSub(subscription)}} id='Sub'>Suscribirse</button>)

},[subscription,creadorState])

useEffect(() => {
  
},[postsArr])
 



useEffect(()=>{


if(myRef.current!=null && postsArr.length>0){
  console.log("Hola co")
  observer.observe(myRef.current);
  
}


},[postsArr])







    return (<div className='mt-postMT flex flex-col items-center community-body'>
        <CommunityInfo subButton ={SubButton} state={state} info={info}/>
       
    {postsArr}
       

     
       <Mensajes/>
        </div>
    )
}