import React from "react";
import axios from "axios";
import {SERV_DIR,SERV_PORT} from "../utilities";
import { formatImage } from "./imageFormatting";
    export function subirPublicacion(form,community,user){

      let formData = new FormData(form.current);
        formData.append('community',community.id);
        formData.append('user' ,    user);
 
        
if(formData.get("image").size <= 25000000){

return axios.post("http://"+SERV_DIR+":"+SERV_PORT+"/posts/new",formData,{
  headers:{
      'Authorization':'Bearer '+ JSON.parse(localStorage.getItem('userData')).token,
  
  }
});
} else {

 return null;

}


        
    
        
    };



