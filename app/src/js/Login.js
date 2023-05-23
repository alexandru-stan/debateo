import axios from "axios";
const $ = require('jquery');
function Login(){


    let credentials = {
      username: $('#Lusername').val(),
      password: $('#Lpassword').val()
    }

    return axios.post("http://localhost:8080/login",credentials);

}



export default Login;