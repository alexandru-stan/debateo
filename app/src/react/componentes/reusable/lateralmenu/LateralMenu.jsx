import React, { useState } from "react";
import { Menu } from "../header/menu";
import collapse from "../../../../assets/img/collapse.png"
import Image from "../img"
import profileImage from "../../../../assets/img/stockProfileImage.jpg"
import { useWindowSize } from "@uidotdev/usehooks";
import { useRef } from "react";
import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";

import { setLeftVisibility as update } from "../../../../redux-store/slices/LateralMenuVisibility";
import { ComunidadesMasActivas,ComunidadesRecientes,Suscripciones } from "./subMenus";
import { refreshProfileImage } from "../../../../js/RefreshProfileImage";
import { formatImage } from "../../../../js/imageFormatting";
import logout from "../../../../assets/img/logout.png";
import { assign } from "../../../../redux-store/slices/PopUp";
import { useNavigate } from "react-router-dom";
import { update as incoming } from "../../../../redux-store/slices/IncomingMessage";
import newMessage from "../../../../assets/audio/newMessage.mp3"
import { stompClient } from "../../../../webSocketTesting/webSocket";

export const LateralMenu = (props) => {
    
    const dispatch = useDispatch();
    const isFirstRender = useRef(true);
    const lateralMenuVisibility = useSelector(state => state.lateralMenuVisibilty.value.left);
    const popUp = useSelector(state => state.popUp.value);
    const user = JSON.parse(sessionStorage.getItem('user'))
    const [profileImage,setProfileImage] = useState(JSON.parse(sessionStorage.getItem('user')).profileImageFile);
    const nav = useNavigate();

    const windowWidth = useWindowSize().width;

    useEffect(() => {
      
        windowWidth< 1101 ? dispatch(update('none')) : dispatch(update('block'));
    },[windowWidth])



    let audio = new Audio(newMessage);

  

    stompClient.activate();
    stompClient.onConnect = (frame) => {
    stompClient.subscribe('/'+JSON.parse(sessionStorage.getItem("user")).username,(message) => {
      let mensaje = JSON.parse(message.body);
      audio.play();
      dispatch(incoming(mensaje))

      // alert("jeje")
      // cambiarUltimoMensajeDelChat(mensaje);



    
  });

    }  












    return (


  

        <div id="lateralMenu" className={   " bg-moradoOscuro border-r-2 border-moradoLight"} style={{zIndex:'1',position:'fixed', overflow:'scroll', height:'calc(100vh - 50px)  ',  left:'0%', top:'7%', width:'20%', display:lateralMenuVisibility}}>
       <div id="user-info" style={{marginTop:'2rem'}} className=" border-b-2 border-moradoLight flex items-center  p-2 ">
        <Image onerror={()=>{
        

        refreshProfileImage(user.username).then(r => setProfileImage(formatImage(r.data.profileImage)));

        }} style={{borderRadius:'100% ', width:'4rem', height:'4rem'}} clase={" p-2"} ruta={profileImage}/>
        <div className="p-3 flex flex-row items-center justify-between w-full">
        <div>
            <div className="max-text-2xl text-bold text-naranjaMolon Kanit">{user.username}</div>
            <div className="text-gray-300 text-sm">{user.name}</div>
        </div>
            <div  className="  flex justify-center w-1/4">
               <img onClick={ () => {

                dispatch(assign(
                <div style={{top:'0%',bottom:'0%'}} className=" w-full flex justify-center items-center   fixed">
                <div id="logout"  style={{border:'2px solid #444073'}} className="bg-moradoFondo rounded-lg p-5 flex flex-col items-center justify-between  w-2/6">
                        <p className="Kanit text-naranjaMolon text-2xl font-bold">¿Estás seguro de que quieres cerrar tu sesión?</p>
                        <div className="flex mt-2 p-2 flex-row w-full justify-around ">
                        <p  
                        onClick={()=>{
                            dispatch(assign(null));
                            nav("/")
                            
                            }}
                        className="bg-moradoLight text-center   Kanit font-bold text-xl  text-white py-2 px-6 rounded-lg w-2/6 hover:bg-naranjaMolon hover:cursor-pointer ">Sí</p>
                        <p
                        onClick={()=>{dispatch(assign(null))}}
                         className="bg-moradoLight  text-center Kanit font-bold text-xl text-white py-2 px-6 rounded-lg w-2/6 hover:bg-naranjaMolon hover:cursor-pointer">No</p>
                        </div>
                </div>
                </div>
                ));
               
               }} title='Cerrar sesión' className="w-2/4 hover:cursor-pointer hover:bg-moradoFondo  rounded-3xl" src={logout}></img>
            </div>
        </div>
        </div>
       <Menu/>
        {/* <ComunidadesRecientes/> */}
        <ComunidadesMasActivas/>
        <Suscripciones username={user.username}/>


       


        </div>

    )

}