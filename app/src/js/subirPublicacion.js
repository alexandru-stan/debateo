import React from "react";
import axios from "axios";
import { formatImage } from "./imageFormatting";
    export function subirPublicacion(form){
//     const $ = require('jquery');

// let formData = new FormData(form.current);

// let imagen = formData.get("imagen");

// let data = new FormData();
// data.append("image",imagen);
// axios.post("http://localhost:8080/posts",data,

//  { "Content-Type": "multipart/form-data" }

// )
      

 return axios.get("http://localhost:8080/posts/2224").then((response)=>

{
// let blob = new Blob([response.data]);
// let image = URL.createObjectURL(blob);
// console.log(image);
return response;

}
);
        
    
        
    };



