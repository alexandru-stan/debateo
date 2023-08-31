import axios from "axios";
const $ = require('jquery');
 function Register(){

    let user = {
        name: $('#Rname').val(),
        username: $('#Rusername').val(),
        password: $('#Rpassword').val(),
        mail: $('#Rmail').val(),
        birth_date: $('#Rbirth_date').val()
    }

   return  axios.post("http://192.168.1.131:8080/users/signin",user   );
     

}


export default Register;