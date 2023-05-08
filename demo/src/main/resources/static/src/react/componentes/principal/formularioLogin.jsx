import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Login from '../../../js/Login';



const Formulario = () => {

const navigate = useNavigate();

async function callLogin(){
  
  let response = await Login();
  
  if(response.data){
    navigate("/feed")
  } else {
    alert("NOP");
  }
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
      
    
      <button onClick={callLogin} className="btn" >Iniciar sesión</button>

      
      </div>
      
    )
}

export default Formulario;