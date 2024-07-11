import React from 'react';
import axios from 'axios';
import Post from '../react/componentes/feed/body/post';
import { Button } from 'react-bootstrap';
import { formatImage } from './imageFormatting';
import { deleteFunction } from './DeletePublication';
import {SERV_DIR,SERV_PORT} from "../utilities";

export async function PostsRequestByCommunity(request,creador,rol){

 
let loggedUser = JSON.parse(sessionStorage.getItem('user')).username


    let endpoint =  "http://"+SERV_DIR+":"+SERV_PORT+"/posts/byCommunity/"+request.page+"/"+request.state+"/"+loggedUser;
    

    return axios.get(endpoint).then(response=>{
      
    let arr = response.data.content;
 
   if(response.data.last){
        request.setIslast(true);    
    }

    let posts = new Array(response.data.numberOfElements);
   console.log(posts)
    for(let i=0;i<response.data.numberOfElements;i++){

          
  
              posts[i] = <Post
              likes={arr[i].likes}
              comments={arr[i].comments}
              visibleCommunityInfo = {false}
              liked={arr[i].liked}
              publicationBody={arr[i].post.publicationBody}
              publicationTitle={arr[i].post.publicationTitle}
              publicationId={arr[i].post.publicationId}
              publicationImage={(arr[i].post.publicationImage.length>0)?<img src={formatImage(arr[i].post.publicationImage)} alt='image'/>:null}
              publicationUser={arr[i].post.user}
              referencia={(posts.length-i)==1?request.myRef:null}
              delete={arr[i].post.user==loggedUser || loggedUser==creador || rol== "MOD" ?<Button
              onClick={() =>
                deleteFunction(arr[i].post.publicationId).then((response) => {
                 
                    request.setPostsArr((postsArr) => { 
                   
                    let newarr = postsArr.filter((node) => node.props.publicationId !== response.data);
                    
                    return newarr;
                    
                    });
                  
                }) 
              }
            >
              Eliminar
    </Button>:null}

             

          />
              
    }


return posts;
             

  


    })


}