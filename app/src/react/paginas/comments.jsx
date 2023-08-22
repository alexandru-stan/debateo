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
export const Comments = () => {
const [post,setPost] = useState();
const [comments,setComments] = useState();
  const $ = require('jquery');
    let params = useParams();


    useEffect(()=> {
      
   

      getComments(params.id).then(response => {
        console.log(response);
        let arr=[];
       response.data.forEach(e =>
        arr.push(<Comment username={e.username} commentText = {e.commentText}/>))
        setComments(arr);

      });
      },[params.id]);

      

      







    return(
    
        <div id='comments'>
        <Header/>
          
        <div id='comment-section'>
        <div id='comment-box'>
          <TextField id='text' label='Comentario' variant='filled'></TextField>
          <Button onClick={()=>{

          let comment = subirComentario($('#text').val(),params.id);
          
          setComments(comments => ([<Comment username={comment.username} commentText = {comment.commentText}></Comment>]).concat(comments));

          }}>Enviar</Button>
          </div>
          <div id='comments-response'>
        {comments}
        </div>
        </div>
        </div>
    
        )


}