import axios from "axios";
function Login(){

     let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let credentials = {
      username: username,
      password: password
    }

    return axios.post("http://localhost:8080/login",credentials);

}



export default Login;