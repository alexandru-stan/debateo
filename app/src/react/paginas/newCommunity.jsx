import React from "react";
import Header from "../../react/componentes/reusable/header/header";

import { TextField } from "@mui/material";
import { Button } from "react-bootstrap";
import theme from "../../assets/material-ui-themes/DefaultTheme";
import { useRef } from "react";
import { createCommunity } from "../../js/createCommunity";
import { useNavigate } from "react-router-dom";

export const NewCommunity = () => {
    const nav = useNavigate();    
    let form = useRef(null);


    return ( <div id='new'>
            <Header/>
            <div style={{marginTop:"10%"}} id="createForm">
  
        <form ref={form} id="form" onSubmit={ (event) => {event.preventDefault(); createCommunity(form).then((response)=> {localStorage.setItem('cid',response); nav("/feed")}); }}>
           <div> <TextField required name='name' style={{}}  color="secondary" id='titulo' multiline label="Nombre" variant='filled'></TextField></div>
           <div><TextField required name='description'  color="secondary" id='cuerpo' multiline label="Descripcion" variant="filled"></TextField></div>
        
           <input required name='image' type="file" id='imagen' accept="image/png, image/gif, image/jpeg" />

      
           <Button type="submit">Enviar</Button>
        </form>
    
        </div>
            </div>
    )
}