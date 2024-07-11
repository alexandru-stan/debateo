import axios from "axios";
import {SERV_DIR,SERV_PORT} from "../utilities";
const $ = require('jquery');
 function Register(user){

 

   return  axios.post('http://'+SERV_DIR+":"+SERV_PORT+"/users/signin",user );
     

}


export default Register;