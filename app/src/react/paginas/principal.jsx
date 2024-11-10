import React, { useEffect } from "react";
import Header from "../componentes/principal/header";
import Body from "../componentes/principal/body";
// import styles from "../../assets/styles/Principal.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { stompClient } from "../../webSocketTesting/webSocket";
import { useNavigate } from "react-router-dom";
function Principal(){
  const nav = useNavigate();
    useEffect(()=> {
       
        // stompClient.deactivate();
        // localStorage.removeItem('token')
        
    })

    return (
<>
        <div className=" overlay  flex flex-col">
            <Header/>
            <Body/>
            

           
            
        </div>
        
   
        </>

    );

}

export default Principal;