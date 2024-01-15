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
export const Comments = () => {
const [post,setPost] = useState();
const [comments,setComments] = useState();
  const $ = require('jquery');
    let params = useParams();
    let commentPost = JSON.parse(useSelector(state=>state.commentPost.value));
    console.log("FOTOOOOOOOOOOOOOOOOOOOO"+commentPost.publicationImage.props.src);
    console.log("PATAS DIOSSSS"+JSON.stringify(commentPost));

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
    
        <div  id='comments' className="flex flex-col items-center">
        <Header/>
          


      <Post


              likes={commentPost.likes}
              comments={commentPost.comments}
              liked={commentPost.liked}
              communityId={commentPost.communityId}
              communityName={commentPost.communityName}
              communityImage={commentPost.communityImage}
              publicationBody={commentPost.publicationBody}
              publicationTitle={commentPost.publicationTitle}
              publicationId={commentPost.publicationId}
              publicationImage=<img src={commentPost.publicationImage.props.src}/>
              publicationUser={commentPost.user}
              

        />

        <div id='comment-section' className="mt-5">
        <div id='comment-box'>
        
          <input type="text" id="text"/>
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