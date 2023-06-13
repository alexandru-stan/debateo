
import { CommunityInfo } from './body/communityInfo';
import React, { useState,useEffect } from 'react';
import { CommunityInfoRequest } from '../../../js/CommunityInfoRequest';
import { formatImage } from '../../../js/imageFormatting';
import { PostsRequest } from '../../../js/PostsRequest';
import { Mensajes } from '../reusable/mensajes/mensajes';
import { useRef } from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { CrearPublicacion } from './body/crearPublicacion';
export const Body = (props) => {
const [state,setState] = useState(localStorage.getItem('cid'));
const [info,setInfo] = useState({});
const [postsArr,setPostsArr] = useState([]);
const [page,setPage] = useState(0);
const [isLast,setIslast] = useState(false);

const myRef = useRef();
const navigate = useNavigate();
let creador;
const handleIntersection = (entries) => {
  if (entries[0].isIntersecting && !isLast) {
    console.log("Si");
    observer.disconnect();
    setPage((prevPage) => prevPage + 1);
    PostsRequest(page, state, myRef,setIslast,info.communityCreator,setPostsArr)
      .then((response) => {
        setPostsArr((prevPosts) => prevPosts.concat(response));
       
      })  
      
  } 
  if(isLast) setIslast(false);


};
const observer = new IntersectionObserver(handleIntersection);

let boton;

useEffect(()=>{

}
,[state])




useEffect(() => {
  setState(localStorage.getItem('cid'));
  setPage(0);
  setPostsArr([]);
   },[localStorage.getItem('cid')])
  
   useEffect(()=> {
    CommunityInfoRequest(state).then(response => {
       
        let data = response.data;
        creador = data.communityCreator;
        setInfo({
            communityName: data.communityName,
            communityDescription: data.communityDescription,
            communityImage: formatImage(data.communityImage),
            communityBackgroundImage: formatImage(data.communityBackgroundImage),
            communityCreator: data.communityCreator,
            communityMembers: data.communityMembers,
            sensitiveContent: data.sensitiveContent,
            communityId:data.communityId,
            categoria: data.categoria
        })

        
       
        PostsRequest(page,state,myRef,setIslast,creador,setPostsArr).then(response =>{
         
          setPostsArr(response);
          setPage((previousPage)=> previousPage+1)
          console.log(myRef.current);
          // observer.observe(myRef.current);
         
        })



    })
   },[state])




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

        }}>Crear publicación</Button>

        <CrearPublicacion/>

       {postsArr}
       <Mensajes/>
        </div>
    )
}