import React from 'react';
import axios from 'axios';
import Post from '../react/componentes/feed/body/post';
import { formatImage } from './imageFormatting';
export async function PostsRequest(page){
    let posts;
   return axios.get("http://localhost:8080/posts/mistborn/"+page).then(response => {
        let longitud = response.data.content.length;
        let responseArray = response.data.content;
        console.log(responseArray);
       posts = new Array(longitud);
        for(let i=0;i<longitud;i++){

            let imagenSRC = responseArray[i].publicationImage!=null 
            ? imagenSRC = formatImage(responseArray[i].publicationImage)
            : imagenSRC="";




        posts[i] = <Post

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