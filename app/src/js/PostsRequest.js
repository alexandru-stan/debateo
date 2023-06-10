import React from 'react';
import axios from 'axios';
import Post from '../react/componentes/feed/body/post';
import { formatImage } from './imageFormatting';
export async function PostsRequest(page,id=null,myRef,setIslast){
    let posts;
    let user = JSON.parse(sessionStorage.getItem('user')).username;
    console.log(user);
    let endpoint = id!=null ? `http://localhost:8080/posts/byCommunity/${page}/${id}` : "http://localhost:8080/posts/"+user+"/"+page;
   console.log("TRAYENDO");
  
   return axios.get(endpoint).then(response => {
    
    if(response.data.last){
        setIslast(true);    
    }

        let longitud = response.data.content.length;
        let responseArray = response.data.content;
        let hijoprodigo;  
       posts = new Array(longitud);
        for(let i=0;i<longitud;i++){

            let imagenSRC = responseArray[i].publicationImage!=null 
            ? imagenSRC = formatImage(responseArray[i].publicationImage)
            : imagenSRC="";

            if((longitud-i)==1 ) {
                
                hijoprodigo = myRef
            } 
            else{
            
                hijoprodigo =null
            }

          
        posts[i] = <Post
            
            identificador = {responseArray[i].publicationId}
            referencia  = {hijoprodigo}
            header = {responseArray[i].publicationTitle}
            community = {responseArray[i].community}
            image = {imagenSRC}
            body = {responseArray[i].publicationBody}
            footer = "tupu"


        />
        }
        return posts;
    }
    )

    

}