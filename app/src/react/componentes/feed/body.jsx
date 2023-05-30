import React from 'react';
import Post from './body/post';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

const Body = () => {
    const [arr,setArr] = useState();
let datos;
   function peticion () {
    axios.get("http://localhost:8080/posts/mistborn/0").then(response => {
    
    let base64String = response.data.content[0].publicationImage;
    let byteCharacters = atob(base64String);
    let byteNumbers = new Array(byteCharacters.length);

    for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
  
      let byteArray = new Uint8Array(byteNumbers);
      let blob = new Blob([byteArray], { type: 'image/png' });
      console.log(blob);

      let url = URL.createObjectURL(blob);
     setArr(url);
     console.log("Hola");


    // //   console.log(atob(response.data.content[0].publicationImage));
    //   let BYTEARRAY =atob(response.data.content[0].publicationImage);
    //   var blob = new Blob([new Uint8Array(BYTEARRAY)], { type: 'image/png' });
    //   console.log(blob);
      
    });
  
    



   }
useEffect(()=> {
    peticion();
},[])
    return(
    <div style={{color:'white'}} id='body-feed'>
   

   <img src={arr} alt="OK"></img>

    </div>
    );
}

export default Body;