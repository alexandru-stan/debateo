import axios from "axios";
import {SERV_DIR,SERV_PORT} from "../utilities";

const $ = require('jquery');
function Login(){
  $('#mensajeErrorLogin').html("");

    let credentials = {
      username: $('#Lusername').val(),
      password: $('#Lpassword').val()
    }

    if(!credentials.username.length>0 || !credentials.password.length>0 ) {
      $('#mensajeErrorLogin').html("Tienes que introducir tanto tu nombre de usuario como tu contraseña para iniciar sesión");
    } else {
 
    // return axios.post("http://192.168.1.131:8080/users/login",credentials);
    return axios.post('http://'+SERV_DIR+":"+SERV_PORT+"/users/login",credentials);
  }
}



export default Login;