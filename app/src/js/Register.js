import axios from "axios";
import {SERV_DIR,SERV_PORT} from "../utilities";
const $ = require('jquery');
 function Register(form){
console.log(form.current);
  let formData = new FormData(form.current)
  formData.forEach((value, key) => {
    console.log(key, value);
});

  console.log("puto");
   return  axios.post('http://'+SERV_DIR+":"+SERV_PORT+"/users/signin",formData );
     

}


export default Register;