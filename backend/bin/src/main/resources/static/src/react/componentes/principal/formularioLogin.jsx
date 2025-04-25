import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import Login from '../../../js/Login';



const Formulario = () => {

const navigate = useNavigate();

  function Login(){

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let credentials = {
      username: username,
      password: password
    }

    


    axios.post("http://localhost:8080/login",credentials).then(response => {
      if(response.status = 201){
        if(response.data){
          navigate("/feed")
        } else {
          alert("NOP");
        }
      } else {
        
      }
    })

  }



    return (
       
      
        <div id='login'>
        <Form id='loginForm'>
        <Form.Group className="mb-3" >
          <Form.Label>Nombre de usuario</Form.Label>
          <Form.Control id="username" type="text" placeholder="" />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>Contraseña</Form.Label>
          <Form.Control id='password' type="password" placeholder="" />
        </Form.Group>
      </Form>
      
    
      <button onClick={Login} className="btn" >Iniciar sesión</button>

      
      </div>
      
    )
}

export default Formulario;