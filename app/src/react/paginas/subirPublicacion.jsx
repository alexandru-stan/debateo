import React from "react";
import axios from "axios";
    export function subirPublicacion(title,body,image,user,community){
    const $ = require('jquery');
    let post = {
            publicationTitle: title,
            publicationBody: body,
            publicationImage: null,
            user:user,
            community:community

        }
       

axios.post("http://localhost:8080/posts",post);

      

        
    
        
    };


