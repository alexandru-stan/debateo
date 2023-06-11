import React from 'react';
import axios from 'axios';
import Post from '../react/componentes/feed/body/post';
import { Button } from 'react-bootstrap';
import { formatImage } from './imageFormatting';
import { deleteFunction } from './DeletePublication';
export async function PostsRequest(page,id=null,myRef,setIslast,creador=null,setPostsArr){
    let posts;
    let user = JSON.parse(sessionStorage.getItem('user')).username;
  
    let endpoint = id!=null ? `http://localhost:8080/posts/byCommunity/${page}/${id}` : "http://localhost:8080/posts/"+user+"/"+page;

  
   return axios.get(endpoint).then(response => {
    


    if(response.data.last){
        setIslast(true);    
    }
    let borrar;
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

          
      if(creador===user){
        borrar = (
            <Button
              onClick={() =>
                deleteFunction(responseArray[i].publicationId).then((response) => {
                 
                    setPostsArr((postsArr) => { 
                   
                    let newarr = postsArr.filter((node) => node.props.identificador !== response.data);
                    console.log(newarr);
                    return newarr;
                    
                    });
                  
                }) 
              }
            >
              Eliminar
            </Button>
          );
      } else {
        borrar=null;
      }

        posts[i] = <Post
            
            identificador = {responseArray[i].publicationId}
            referencia  = {hijoprodigo}
            header = {responseArray[i].publicationTitle}
            community = {responseArray[i].community}
            image = {imagenSRC}
            body = {responseArray[i].publicationBody}
            footer = "tupu"
            borrar = {borrar}


        />
        }
        return posts;
    }
    )

    

}