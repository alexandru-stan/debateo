import React from 'react';
import axios from 'axios';
import Post from '../react/componentes/feed/body/post';
import { Button } from 'react-bootstrap';
import { formatImage } from './imageFormatting';
import { deleteFunction } from './DeletePublication';

export async function PostsRequest(request,setPostsArr){

 



    let endpoint =  "http://localhost:8080/posts/"+request.loggedUser+"/"+request.page;

    return axios.get(endpoint).then(response=>{
      console.log(response.data);
    let arr = response.data.content;
 
   if(response.data.last){
        request.setIslast(true);    
    }

    let posts = new Array(response.data.numberOfElements);
    for(let i=0;i<posts.length;i++){

          console.log(i+" PROPS COMMENTS EN POST ES ESTO " + arr[i].comments);
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
              publicationImage={(arr[i].post.publicationImage.length>0)?<img style={{height:'100%'}} src={formatImage(arr[i].post.publicationImage)} alt='img'/>:null}
              publicationUser={arr[i].post.user}
              referencia={(posts.length-i)==1?request.myRef:null}
              delete={arr[i].subscription?.subscriptionLevel=="MOD" || arr[i].post.user==request.loggedUser?<Button
              onClick={() =>
                deleteFunction(arr[i].post.publicationId).then((response) => {
                 
                    setPostsArr((postsArr) => { 
                   console.log(response.data);
                    let newarr = postsArr.filter((node) => node.props.publicationId !== response.data);
                    console.log(newarr);
                    return newarr;
                    
                    });
                  
                }) 
              }
            >
              Eliminar
    </Button>:arr[i].post.user==request.creador?<Button
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
    </Button>:null}

             

          />
              
    }


return posts;

    })


}