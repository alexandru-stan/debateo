
import { CommunityInfo } from './body/communityInfo';
import React, { useState,useEffect } from 'react';
import { CommunityInfoRequest } from '../../../js/CommunityInfoRequest';
import { formatImage } from '../../../js/imageFormatting';
import { PostsRequestByCommunity } from '../../../js/PostRequestByCommunity';
import { Mensajes } from '../reusable/mensajes/mensajes';
import { useRef } from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { CrearPublicacion } from './body/crearPublicacion';
import admin from '../../../assets/img/admin.png';
import crown from '../../../assets/img/crown.png';
import axios from 'axios';
export const Body = (props) => {
const [state,setState] = useState(localStorage.getItem('cid'));
const [info,setInfo] = useState({});
const [postsArr,setPostsArr] = useState([]);
const [page,setPage] = useState(0);
const [isLast,setIslast] = useState(false);
const[subscription,setSubscription] = useState(null);
const [SubButton,setSubButton] = useState(null);
const [creadorState, setCS] = useState(null);

const myRef = useRef();
const navigate = useNavigate();
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
    console.log("Si");
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






function changeSub(subscription){

  if(subscription==null) {
    console.log(subscription);
    axios.post("http://localhost:8080/subscriptions/sub/"+loggedUser+"/"+state);
    setSubscription("MEMBER");
  }
  else {
    axios.delete("http://localhost:8080/subscriptions/unsub/"+loggedUser+"/"+state);
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
        console.log(response.data);
        creador = data.communityCreator;
        setCS(data.communityCreator);
        setSubscription(data.subscription);
      console.log("CREADOR"+creador+"USER"+loggedUser);
      if(creadorState==loggedUser) setSubButton(<Button id='administrar'>Administrar</Button>)
  else if ( data.subscription!=null) setSubButton(<Button onClick={()=> {changeSub(data.subscription)}} id='Unsub'>Desuscribirse</Button>)
  else setSubButton(<Button onClick={()=> {changeSub(data.subscription)}} id='Sub'>Suscribirse</Button>)
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
            admin: data.communityCreator==loggedUser ? <img title= "MASTER!!!!" src={crown} /> : data.subscription=="MOD"?<img title= "ERES MODERADOR! :)" src={admin} />:null
        })

       
        PostsRequestByCommunity(request,creador,response.data.subscription).then(response =>{
         
          setPostsArr(response);
         
         
        
         
        })

        

    })
   },[state])


useEffect(()=> {
console.log("CREADOR ES"+ creador);
console.log("SUSCRIPCION ES"+subscription);


  if(creadorState==loggedUser) setSubButton(<Button onClick={()=> navigate("/admin/"+state)} id='administrar'>Administrar</Button>)
  else if ( subscription!=null) setSubButton(<Button onClick={()=> {changeSub(subscription)}} id='Unsub'>Desuscribirse</Button>)
  else setSubButton(<Button onClick={()=> {changeSub(subscription)}} id='Sub'>Suscribirse</Button>)

},[subscription,creadorState])

useEffect(() => {
  console.log("tupu");
},[postsArr])
 



useEffect(()=>{


if(myRef.current!=null && postsArr.length>0){
  console.log("Hola co")
  observer.observe(myRef.current);
  
}


},[postsArr])







    return (<div class='community-body'>
        <CommunityInfo info={info}/>
        <Button onClick={() => {
          navigate("/upload/"+state);
        }}>Crear publicación</Button>
    {SubButton}
    {postsArr}
       

     
       <Mensajes/>
        </div>
    )
}