import React from 'react';
import axios from 'axios';
import Post from '../react/componentes/feed/body/post';
import { formatImage } from './imageFormatting';
export async function PostsRequest(page,id=null,myRef){
    let posts;
    
    let endpoint = id!=null ? `http://localhost:8080/posts/byCommunity/${page}/${id}` : "http://localhost:8080/posts/mistborn/"+page;
    console.log("EL ENDPOINT ES:"+endpoint);
    let referencia;
   return axios.get(endpoint).then(response => {
    
        let longitud = response.data.content.length;
        let responseArray = response.data.content;
        let hijoprodigo;
        console.log(responseArray);  
       posts = new Array(longitud);
        for(let i=0;i<longitud;i++){

            let imagenSRC = responseArray[i].publicationImage!=null 
            ? imagenSRC = formatImage(responseArray[i].publicationImage)
            : imagenSRC="";

            if((longitud-i)==5) hijoprodigo = myRef
            else hijoprodigo =null
          
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