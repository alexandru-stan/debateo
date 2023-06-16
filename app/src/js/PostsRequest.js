import React from 'react';
import axios from 'axios';
import Post from '../react/componentes/feed/body/post';
import { Button } from 'react-bootstrap';
import { formatImage } from './imageFormatting';
import { deleteFunction } from './DeletePublication';

export async function PostsRequest(request){

 



    let endpoint =  "http://localhost:8080/posts/"+request.creador+"/"+request.page;

    return axios.get(endpoint).then(response=>{
      console.log(response.data);
    let arr = response.data.content;
 
   if(response.data.last){
        request.setIslast(true);    
    }

    let posts = new Array(response.data.numberOfElements);
    for(let i=0;i<posts.length;i++){

  
              posts[i] = <Post
              liked={arr[i].liked}
              communityId={arr[i].communityId}
              communityName={arr[i].communityName}
              communityImage={(arr[i].communityImage!=null)?formatImage(arr[i].communityImage):null}
              publicationBody={arr[i].publicatiomBody}
              publicationTitle={arr[i].publicationTitle}
              publicationId={arr[i].publicationId}
              publicationImage={(arr[i].publicationImage!=null)?formatImage(arr[i].publicationImage):null}
              publicationUser={arr[i].publicationUser}
              referencia={(posts.length-i)==1?request.myRef:null}
              delete={arr[i].subscriptionLevel="MOD"?<Button
              onClick={() =>
                deleteFunction(arr[i].publicationId).then((response) => {
                 
                    request.setPostsArr((postsArr) => { 
                   
                    let newarr = postsArr.filter((node) => node.props.identificador !== response.data);
                    console.log(newarr);
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