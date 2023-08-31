import axios from "axios";
import {SERV_DIR,SERV_PORT} from "../utilities";

const $ = require('jquery');
function Login(){


    let credentials = {
      username: $('#Lusername').val(),
      password: $('#Lpassword').val()
    }
 
    // return axios.post("http://192.168.1.131:8080/users/login",credentials);
    return axios.post('http://'+SERV_DIR+":"+SERV_PORT+"/users/login",credentials);

}



export default Login;