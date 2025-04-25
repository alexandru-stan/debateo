import React from 'react';
import axios from 'axios';
import Post from '../react/componentes/feed/body/post';
import imageResize from './imageResize';
import { formatImage } from './imageFormatting';
import { deleteFunction } from './DeletePublication';
import { SERV_DIR,SERV_PORT } from '../utilities';

const $ = require("jquery");
export async function PostsRequest(request,setPostsArr,fyp){

 


    // $("#feedSpinner").css("display","block");
    let endpoint =  "http://"+SERV_DIR+":"+SERV_PORT+"/posts/"+request.loggedUser+"/"+request.page+"/"+fyp;
    let token = JSON.parse(localStorage.getItem('userData')).token;
    return axios.post(endpoint,null,{
        headers:{
            'Authorization':'Bearer '+token,
            'Content-Type': 'application/json'
        }
    }).then(response=>{
      
    let arr = response.data.content;
 
   if(response.data.last){
        request.setIslast(true);    
    }

    let posts = new Array(response.data.numberOfElements);
    for(let i=0;i<posts.length;i++){

   
          
              posts[i] = <Post
              key = {arr[i].post.publicationId}
              likes={arr[i].likes}
              fyp = {fyp}
              visibleCommunityInfo = {true}
              comments={arr[i].comments}
              liked={arr[i].liked}
              communityId={arr[i].community.communityId}
              communityName={arr[i].community.communityName}
              communityImage={formatImage(arr[i].community.communityImage)}
              publicationBody={arr[i].post.publicationBody}
              publicationTitle={arr[i].post.publicationTitle}
              publicationId={arr[i].post.publicationId}
              publicationImage={(arr[i].post.publicationImage?.length>0)? formatImage(arr[i].post.publicationImage):null}
              publicationUser={arr[i].post.user}
              referencia={(posts.length-i)==1?request.myRef:null}
            //   delete={arr[i].subscription?.subscriptionLevel=="MOD" || arr[i].post.user==request.loggedUser || arr[i].post.user == arr[i].post.user==request.creador ?
    //          <div id='postMenu'>
            
    //          <Image style={{width:'1.5rem'}} onclick={() => $('#postMenuOptions'+arr[i].post.publicationId).css('display','block')} clase={'hover:cursor-pointer'} ruta={dotsmenu}/>
    //          <div className='bg-moradoLight p-2' id={'postMenuOptions'+arr[i].post.publicationId} style={{position:'absolute', display:'none'}}>
    //          <p
    //         //   onClick={() =>
    //         //     deleteFunction(arr[i].post.publicationId).then((response) => {
                 
    //         //         setPostsArr((postsArr) => { 
                   
    //         //         let newarr = postsArr.filter((node) => node.props.publicationId !== response.data);
                    
    //         //         return newarr;
                    
    //         //         });
                  
    //         //     }) 
    //         //   }
    //         >Eliminar publicación


    // </p>
    // </div>
    // </div>
    

    // :null}

             

          />
              
    }


return posts;

    }).catch(message => {
        console.log("jeje")
    })


}