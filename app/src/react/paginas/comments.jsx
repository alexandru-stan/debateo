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
export const Comments = () => {
const [numeroComentarios, setNumeroComentarios] = useState(null);
const [post,setPost] = useState();
const [comments,setComments] = useState();
const [selectedPost, setSelectedPost] = useState();
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
          publicationImage={(data.post.publicationImage.length>0)?<img style={{height:'100%'}} src={formatImage(data.post.publicationImage)} alt='img'/>:null}
          publicationUser={data.post.user}    




        />
      )

     
     })

      getComments(params.id).then(response => {
        
        let arr=[]
       response.data.forEach(e =>
        arr.push(<Comment commentDate = {e.commentDate} username={e.username} commentText = {e.commentText}/>))
        setComments(arr);

      });
      },[params.id]);

      

      







    return(
    
        <div  id='comments' className="   flex flex-col items-center">
        <Header/>
          
          {selectedPost}

        <div  id='comment-section' className=" w-2/4 flex flex-col items-center mt-5">
        <div className=" bg-moradoOscuro w-full flex flex-row justify-center items-center" id='comment-box'>
        
        <div class="w-full bg-moradoOscuro">
  <textarea id="text" style={{filter:"brightness(125%)"}}class="  w-full rounded-md text-white backdrop-brightness-125 placeholder-gray-400 bg-moradoOscuro border-b-2 border-gray-300 focus:outline-none focus:border-naranjaMolon text-gray-700 py-2 pl-2 pr-8 transition-all duration-300" placeholder="Escribe tu comentario..."/>
          </div>
          
          <Button onClick={()=>{

          let comment = subirComentario($('#text').val(),params.id);
          
          setComments(comments => ([<Comment  username={comment.username} commentDate={0}  commentText = {comment.commentText}></Comment>]).concat(comments));

          }}>Enviar</Button>
          </div>
          
        {comments}
       
        </div>
        <Mensajes/>
        </div>
   
        )


}