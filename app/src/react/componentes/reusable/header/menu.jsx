import React from "react";
import IconoParaTi from "../../../../assets/img/menuIcons/parati.png";
import IconoPerfil from "../../../../assets/img/menuIcons/perfil.png";
import IconoMensajes from "../../../../assets/img/menuIcons/mensajes.png";
import IconoComunidades from "../../../../assets/img/menuIcons/crear.png";
import IconoMenuMovil from "../../../../assets/img/menuIcons/menuMovil.png";
import { getUnreadMessages } from "../../../../js/getUnreadMessages";
import { useState,useEffect } from "react";
import Imagen from "../img";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { update } from "../../../../redux-store/slices/MessagesRender";




export const Menu = (props) => {

    const messagesRender = useSelector(state => state.messagesRender.value);
    const selectedChat = useSelector(state => state.selectedChat.value);
    const dispatch = useDispatch();
    const  $ = require('jquery');
    const navigate = useNavigate();
    let name="Programacion";
    const incomingMessage = useSelector(state => state.incomingMessage.value);
    const [mensajesSinLeer, setMensajesSinLeer] = useState(null);
    
    useEffect(()=>{

        getUnreadMessages(props.userData.username).then(response => { 
            
            setMensajesSinLeer(response.data)});
        
    },[])

  
    

    useEffect(()=>{



        incomingMessage!=null ? 

    
           selectedChat != incomingMessage.messageSender ?   setMensajesSinLeer(state => state+1)    : null
        
                            :
        null
    },[incomingMessage])

    return (
        <>
        <div id='menu' className="  p-2  border-moradoLight     text-white flex flex-col   w-full  " >
            <div className="cursor-pointer menuItem hover:text-naranjaMolon  hover:brightness-125  w-full  bg-moradoOscuro  p-1  m-1  flex items-center   flex  " onClick={() => navigate("/feed")} id='menu-1' >
            <Imagen style={{maxWidth:'50%', height:'2rem'}}   ruta={IconoParaTi}></Imagen>
            <div className="letraObjetoMenu Kanit  p-2 "  style={{}}>Para ti</div>
            </div>

            <div  className=" w-full menuItem hover:text-naranjaMolon   p-1 items-center    m-1   cursor-pointer hover:brightness-125  bg-moradoOscuro  h-2/4  flex  " onClick={() => navigate("/profile")} id='menu-2'>
            <Imagen style={{maxWidth:'50%', height:'2rem'}} ruta={IconoPerfil}></Imagen>
            <div className="letraObjetoMenu Kanit p-2"  style={{}}>Perfil</div>
            </div> 
 

            
            <div    className=" w-full menuItem   p-1 items-center  hover:text-naranjaMolon   m-1   cursor-pointer hover:brightness-125 bg-moradoOscuro   h-2/4 flex  " onClick={() => {
                    setMensajesSinLeer(0);

                    dispatch(update(!messagesRender));
                 
             } } id='menu-3'>
            <Imagen style={{maxWidth:'50%', height:'2rem'}}  ruta={IconoMensajes}></Imagen>

            <div className= " hover:text-naranjaMolon letraObjetoMenu hover:text-naranjaMolon Kanit p-2 "  style={{}}>Mensajes</div>
            <div style={{ width:'25px', marginLeft:'auto'}}  className="   bg-moradoLight rounded-full text-center " id="menuLevelNotification">{mensajesSinLeer>0 ? mensajesSinLeer : null}</div>
            </div> 

            <div   className=" menuItem w-full  hover:text-naranjaMolon hover:text-naranjaMolon  p-1   m-1 items-center     cursor-pointer hover:brightness-125 bg-moradoOscuro h-2/4  flex  " onClick={()=> navigate("/new/community")} id='menu-4'>
            <Imagen style={{maxWidth:'50%', height:'2rem'}}  ruta={IconoComunidades}></Imagen>
            <div className="letraObjetoMenu Kanit p-2"  style={{}}>Comunidad</div>
            </div> 


                    </div>

            
    </>
    )
}