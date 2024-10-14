import React from 'react';
import Post from '../componentes/feed/body/post';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { getPost } from '../../js/getPost';
import { getComments } from '../../js/getComments';
import { useEffect } from 'react';
import Header from '../componentes/reusable/header/header';
// import "../../assets/styles/Comments.css"
import { Comment } from '../componentes/reusable/comment';
import { TextField } from '@mui/material';
import { Button } from 'react-bootstrap';
import { subirComentario } from '../../js/subirComentario';
import { useSelector } from 'react-redux';
import { formatImage } from '../../js/imageFormatting';
import { Input } from '../componentes/principal/body/Formulario/inputComponent';
import { Mensajes } from '../componentes/reusable/mensajes/mensajes';

import { LateralMenu } from "../componentes/reusable/lateralmenu/LateralMenu";
import SpinnerLoader from '../componentes/reusable/SpinnerLoader';
import { refreshProfileImage } from '../../js/RefreshProfileImage';
import { AddComment } from '../componentes/comments/addComment';
import addEmoji from "../../assets/img/addEmoji.png";
import EmojiPicker from 'emoji-picker-react';
export const Comments = () => {
  const messagesRender = useSelector(state => state.messagesRender.value);
const [numeroComentarios, setNumeroComentarios] = useState(null);
const [post,setPost] = useState();
const [comments,setComments] = useState();
const [selectedPost, setSelectedPost] = useState();
const [loadingPost,setLoadingPost] = useState(true);
const [loadingComments,setLoadingComments] = useState(true);
  const $ = require('jquery');
    let params = useParams();
    let user = JSON.parse(sessionStorage.getItem('user'));
    

  

    useEffect(()=> {
      getPost(user.username,params.id).then(response =>{ 
        let data = response.data;
        setNumeroComentarios(data.comments)
        setSelectedPost(
          <Post
            likes = {data.likes}
            comments = {data.comments}
            liked={data.liked}
            communityId={data.community.communityId}
            communityName={data.community.communityName}
            communityImage={formatImage(data.community.communityImage)}
            publicationBody={data.post.publicationBody}
            publicationTitle={data.post.publicationTitle}
            publicationId={data.post.publicationId}
            publicationImage={(data.post.publicationImage.length>0)?<img  src={formatImage(data.post.publicationImage)} alt='img'/>:null}
            publicationUser={data.post.user}    
  
  
  
  
          />
  
        )
        setLoadingPost(false);
       
       })
    

     
      },[params.id]);

      useEffect(()=>{
        getComments(params.id).then(response => {
        
          let arr=[]
         response.data.forEach(e =>
          arr.push(<Comment profileImage={e.profileImage} id={e.commentId} replies={e.replies} commentDate = {e.commentDate} username={e.username} commentText = {e.commentText}/>))
          setComments(arr);
          setLoadingComments(false);
  
        });
    },[params.id])

      



    const updateChildState = (newValue) => {
     setWritable(!writable)
  };

  const [writable, setWritable] = useState(false);
  const [emojiPicker, setEmojiPicker] = useState(false);
    return(
    
        <div  id='comments' className="  flex flex-col items-center">
        <Header/>
        <LateralMenu/>
          {loadingPost? <SpinnerLoader id='commPostLoader'/> : selectedPost}

          <div id='commentBox' onClick={() => !writable ?  setWritable(true) : null} style={{minHeight:'4rem',border:'1px solid #444073'}} className=" hover:cursor-text w-2/6 rounded-3xl flex flex-col  justify-center   mt-3 p-2">

          <AddComment writable={writable}/>
          
       { writable ? 
          <div className=" flex flex-row relative  items-center">
          <img onClick={()=>setEmojiPicker(!emojiPicker)}  className='mt-2  p-2 rounded-3xl hover:cursor-pointer hover:bg-moradoLight' style={{width:'50px', height:'50px'}} src={addEmoji}/>
          {emojiPicker?<EmojiPicker searchPlaceHolder='Buscar' theme='dark' onEmojiClick={(data,event)=>{$("#uploadComment").val($("#uploadComment").val() + data.emoji)}} style={{ position:'absolute', top:'100%', zIndex:'3', width:'100%'}}/> : null }
          <button onClick={()=> setWritable(false)} className='font-bold commentButtons ml-auto   text-naranjaMolon p-2 mt-2 rounded-3xl hover:cursor-pointer hover:bg-moradoLight w-1/6'>
            Cancelar
          </button>
         
          <button className='font-bold commentButtons  text-naranjaMolon p-2 mt-2 rounded-3xl hover:cursor-pointer hover:bg-moradoLight w-1/6' onClick={()=>{
            setWritable(false)
          let comment = subirComentario($('#uploadComment').val(),params.id);
          $('#uploadComment').val(null);
          refreshProfileImage(user.username).then(e => setComments(comments => ([<Comment profileImage = {e.data.profileImage} username={comment.username} commentDate={0}  commentText = {comment.commentText}></Comment>]).concat(comments)) )
          setWritable(false);
          setEmojiPicker(false);

          }}>Enviar</button> 

          </div>
            :null} 
          </div>
      
               
        <div  id='comment-section' className=" w-full bg-moradoOscuro
         flex flex-col items-center mt-5 ">
        {/* <div className=" bg-moradoOscuro w-2/6 flex flex-row justify-center items-center" id='comment-box'> */}
     
        {/* <div class="w-full bg-moradoOscuro">
  <textarea id="text" style={{filter:"brightness(125%)"}} class=" p-3 w-full rounded-md text-white backdrop-brightness-125 placeholder-gray-400 bg-moradoOscuro border-b-2 border-moradoLight focus:outline-none focus:border-naranjaMolon text-gray-700  transition-all duration-300" placeholder="Escribe tu comentario..."/>
          </div> */}
          
          





          {/* </div> */}
          
        {loadingComments ? <SpinnerLoader id='commLoader'/> : comments}
       
        </div>
        {messagesRender ? <Mensajes/>:null}
        </div>
   
        )


}