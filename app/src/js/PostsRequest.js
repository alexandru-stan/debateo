import React from 'react';
import axios from 'axios';
import Post from '../react/componentes/feed/body/post';
import { Button } from 'react-bootstrap';
import { formatImage } from './imageFormatting';
import { deleteFunction } from './DeletePublication';
import { SERV_DIR,SERV_PORT } from '../utilities';
import { DeleteIcon } from '../assets/img/deleteIcon';
const $ = require("jquery");
export async function PostsRequest(request,setPostsArr){

 


    $("#feedSpinner").css("display","block");
    let endpoint =  "http://"+SERV_DIR+":"+SERV_PORT+"/posts/"+request.loggedUser+"/"+request.page;

    return axios.get(endpoint).then(response=>{
      
    let arr = response.data.content;
 
   if(response.data.last){
        request.setIslast(true);    
    }

    let posts = new Array(response.data.numberOfElements);
    for(let i=0;i<posts.length;i++){

   
          
              posts[i] = <Post
              likes={arr[i].likes}
              comments={arr[i].comments}
              liked={arr[i].liked}
              communityId={arr[i].community.communityId}
              communityName={arr[i].community.communityName}
              communityImage={formatImage(arr[i].community.communityImage)}
              publicationBody={arr[i].post.publicationBody}
              publicationTitle={arr[i].post.publicationTitle}
              publicationId={arr[i].post.publicationId}
              publicationImage={(arr[i].post.publicationImage.length>0)?<img style={{}} src={formatImage(arr[i].post.publicationImage)} alt='img'/>:null}
              publicationUser={arr[i].post.user}
              referencia={(posts.length-i)==1?request.myRef:null}
              delete={arr[i].subscription?.subscriptionLevel=="MOD" || arr[i].post.user==request.loggedUser?<DeleteIcon
              onClick={() =>
                deleteFunction(arr[i].post.publicationId).then((response) => {
                 
                    setPostsArr((postsArr) => { 
                   
                    let newarr = postsArr.filter((node) => node.props.publicationId !== response.data);
                    
                    return newarr;
                    
                    });
                  
                }) 
              }
            >
              Eliminar
    </DeleteIcon>:arr[i].post.user==request.creador?<DeleteIcon
              onClick={() =>
                deleteFunction(arr[i].post.publicationId).then((response) => {
                 
                   setPostsArr((postsArr) => { 
              
                    let newarr = postsArr.filter((node) => node.props.publicationId !== response.data);
                    return newarr;
                    
                    });
                  
                }) 
              }
            >
              Eliminar
    </DeleteIcon>:null}

             

          />
              
    }


return posts;

    })


}