import React from "react";
import axios from "axios";
import { formatImage } from "./imageFormatting";
    export function subirPublicacion(form,community,user){

      let formData = new FormData(form.current);
        formData.append('community',community.id);
        formData.append('user' ,    user);
 
        console.log(community.id);
      

        
      

 return axios.post("http://localhost:8080/posts/new",formData);


        
    
        
    };



