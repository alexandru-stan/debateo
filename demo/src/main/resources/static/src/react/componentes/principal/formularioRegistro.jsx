import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
function Formulario() {
    return (
      <>
      <h1>No tienes una cuenta? Regístrate!</h1>
      <Form id='registro'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="" />
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Nombre de usuario</Form.Label>
          <Form.Control type="text" placeholder="ej. JuanAlberto35" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="" />
          <Form.Text>Debe tener entre 8 y 16 caracteres y al menos una letra mayúscula</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Fecha de nacimiento</Form.Label>
          <Form.Control type="date" placeholder="" />
          
        </Form.Group>
        
        <button className="btn" >Registrarse</button>
      </Form>

      </>
    );
  }


  export default Formulario;