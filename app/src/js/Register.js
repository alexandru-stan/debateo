import axios from "axios";
import {SERV_DIR,SERV_PORT} from "../utilities";
const $ = require('jquery');
 function Register(form){
  let formData = new FormData(form.current)
  formData.forEach((value, key) => {
    });

     return  axios.post('http://'+SERV_DIR+":"+SERV_PORT+"/users/signin",formData );
     

}


export default Register;