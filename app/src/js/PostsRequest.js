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

   
              posts[i] = <Post
              likes={arr[i].likes}
              comments={arr[i].comments}
              liked={arr[i].liked}
              communityId={arr[i].communityId}
              communityName={arr[i].communityName}
              communityImage={formatImage(arr[i].communityImage)}
              publicationBody={arr[i].publicationBody}
              publicationTitle={arr[i].publicationTitle}
              publicationId={arr[i].publicationId}
              publicationImage={(arr[i].publicationImage.length>0)?<img style={{height:'30%'}} src={formatImage(arr[i].publicationImage)} alt='img'/>:null}
              publicationUser={arr[i].publicationUser}
              referencia={(posts.length-i)==1?request.myRef:null}
              delete={arr[i].subscriptionLevel=="MOD" || arr[i].publicationUser==request.loggedUser?<Button
              onClick={() =>
                deleteFunction(arr[i].publicationId).then((response) => {
                 
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
    </Button>:arr[i].publicationUser==request.creador?<Button
              onClick={() =>
                deleteFunction(arr[i].publicationId).then((response) => {
                 
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