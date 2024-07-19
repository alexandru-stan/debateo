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




export const Menu = () => {
   const  $ = require('jquery');
    const navigate = useNavigate();
    let name="Programacion";
    const [mensajesSinLeer, setMensajesSinLeer] = useState(null);
    useEffect(()=>{

        getUnreadMessages(JSON.parse(sessionStorage.getItem('user')).username).then(response =>  setMensajesSinLeer(response.data));
    
    },[])

    return (
        <>
        <div id='menu' className=" justify-center   text-white flex  items-center  w-2/6  " >
            <div style={{width:'20%'}} className="cursor-pointer hover:bg-moradoLight  p-1   m-1  flex items-center  hover:border hover:rounded-lg border-naranjaMolon  flex flex-col justify-center items-center" onClick={() => navigate("/feed")} id='menu-1' >
            <Imagen style={{maxWidth:'50%', height:'2rem'}}   ruta={IconoParaTi}></Imagen>
            <div className="letraObjetoMenu Kanit w-full  flex justify-center"  style={{fontSize:'0.8rem'}}>Para ti</div>
            </div>

            <div style={{width:'20%'}} className="  hover:border hover:rounded-lg border-naranjaMolon p-1   m-1   cursor-pointer hover:bg-moradoLight  h-2/4  flex flex-col justify-center items-center" onClick={() => navigate("/profile")} id='menu-2'>
            <Imagen style={{maxWidth:'50%', height:'2rem'}} ruta={IconoPerfil}></Imagen>
            <div className="letraObjetoMenu Kanit"  style={{fontSize:'0.8rem'}}>Perfil</div>
            </div> 


            
            <div   style={{width:'20%'}} className=" relative hover:border hover:rounded-lg border-naranjaMolon p-1   m-1   cursor-pointer hover:bg-moradoLight    h-2/4 flex flex-col justify-center items-center" onClick={() => {
                 
                 $("#mensajes").animate({height: 'toggle',width:'toggle'}, 100)
             } } id='menu-3'>
            <Imagen style={{maxWidth:'50%', height:'2rem'}}  ruta={IconoMensajes}></Imagen>
            <span style={{top:'25%',left:'55%', width:'20px', fontSize:'0.7rem'}}  className="m-auto absolute  bg-moradoLight rounded-full text-center " id="menuLevelNotification">{mensajesSinLeer}</span>

            <div className="letraObjetoMenu Kanit"  style={{fontSize:'0.8rem'}}>Mensajes</div>
            </div> 

            <div  style={{width:'20%'}} className="  hover:border hover:rounded-lg border-naranjaMolon p-1   m-1   cursor-pointer hover:bg-moradoLight  h-2/4  flex flex-col justify-center items-center" onClick={()=> navigate("/new/community")} id='menu-4'>
            <Imagen style={{maxWidth:'50%', height:'2rem'}}  ruta={IconoComunidades}></Imagen>
            <div className="letraObjetoMenu Kanit"  style={{fontSize:'0.8rem'}}>Comunidad</div>
            </div> 


                    </div>

            
    </>
    )
}