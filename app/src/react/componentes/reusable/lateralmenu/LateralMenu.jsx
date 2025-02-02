import React, { useState } from "react";
import { Menu } from "../header/menu";
import collapse from "../../../../assets/img/collapse.png"
import Image from "../img"
import profileImage from "../../../../assets/img/stockProfileImage.jpg"
import { useWindowSize } from "@uidotdev/usehooks";
import { useRef } from "react";
import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import SpinnerLoader from "../SpinnerLoader";
import { setLeftVisibility as update } from "../../../../redux-store/slices/LateralMenuVisibility";
import { ComunidadesMasActivas,ComunidadesRecientes,Suscripciones } from "./subMenus";
import { refreshProfileImage } from "../../../../js/RefreshProfileImage";
import { formatImage } from "../../../../js/imageFormatting";
import logout from "../../../../assets/img/logout.png";
import { assign } from "../../../../redux-store/slices/PopUp";
import { useLocation, useNavigate } from "react-router-dom";
import { update as incoming } from "../../../../redux-store/slices/IncomingMessage";
import newMessage from "../../../../assets/audio/newMessage.mp3"
import { stompClient } from "../../../../webSocketTesting/webSocket";
import { update as updateLatRender } from "../../../../redux-store/slices/LateralRender";
import { disconnect } from "../../../../webSocketTesting/webSocket";
import { condiscon } from "../../../../redux-store/slices/ConnectionChange";
import { initializeStompClient } from "../../../../webSocketTesting/webSocket";
// import { stompClient } from "../webSocketTesting/webSocket";
export const LateralMenu = (props) => {
    
    const dispatch = useDispatch();
    // const isFirstRender = useRef(true);
    const lateralMenuVisibility = useSelector(state => state.lateralMenuVisibilty.value.left);
    const popUp = useSelector(state => state.popUp.value);
    // const user = JSON.parse(localStorage.getItem('userData'))
    const lateralMenuRef = useRef(null);
    const userData = JSON.parse(localStorage.getItem('userData'));
    const [profileImage,setProfileImage] = useState(null);
    const nav = useNavigate();
    const loc = useLocation();
    const isFirstRender =  useRef(true);
    const windowWidth = useWindowSize().width;



    useEffect(() => {
      
        windowWidth < 1101 ? dispatch(update('none')) : dispatch(update('block'));
    },[windowWidth])
    useEffect(()=>{
        isFirstRender.current ? isFirstRender.current = false :  windowWidth < 1101 ? dispatch(update('none')) : null
     

    },[loc])


    let audio = new Audio(newMessage);

    useEffect(() => {

        initializeStompClient(userData,dispatch,incoming,condiscon);
        stompClient.activate();
    
    },[])
  
    
  
    // stompClient.deactivate();

    
// //     stompClient.onConnect = (frame) => {
// //     stompClient.subscribe('/'+userData.username,(message) => {
// //       let mensaje = JSON.parse(message.body);
// //       audio.play();
// //       dispatch(incoming(mensaje));

// //     // stompClient.subscribe("/"+connectedUsers)


    
// //   },

// //   {username : " tuputamadre "}



// // );

// //   stompClient.subscribe('/onlineUsers',(message) => {
// //    alert(message.body +" is now online ");

// //   // stompClient.subscribe("/"+connectedUsers)


  
// // });




//     }  





 
useEffect(() => {
    refreshProfileImage(userData.username).then(r => setProfileImage(formatImage(r.data.profileImage)));
    const handleClickOutside = (event) => {
        if (lateralMenuRef.current && !lateralMenuRef.current.contains(event.target) && lateralMenuVisibility=='block' && window.innerWidth < 1101 ) {
        
          event.target.id == 'burger-menu' ? null :   dispatch(update('none'));
            
        }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
        document.removeEventListener("mousedown", handleClickOutside);
    };
}, []);





    return (


  
  
//-50px 
        <div id="lateralMenu" ref={lateralMenuRef} className={   " overflow-x-hidden bg-moradoOscuro flex border-r border-moradoLight   "} style={{zIndex:'1',position:'fixed', overflow:'scroll',   left:'0%', bottom:'0%', top:'7%', width:'20%', display:lateralMenuVisibility}}>
       <div id="user-info" style={{marginTop:'2rem'}} className=" border-b border-moradoLight flex items-center  p-2 ">
     <div style={{width:'30%',height:'4rem'}} className="flex  justify-center ">
    
    {profileImage != null ?  <Image onerror={()=>{
        
    
        refreshProfileImage(userData.username).then(r => setProfileImage(formatImage(r.data.profileImage)));

        }} style={{borderRadius:'100% ',  width:'4rem', height:'4rem'}} clase={" p-2"}  ruta={profileImage}/>
       
     

       : <SpinnerLoader hijoStyle={{ width:'50%'}}/> }
    
    </div>
       <div style={{width:'70%'}} className=" flex  flex-row items-center  justify-between">
        <div>
            <div className="max-text-2xl text-bold text-naranjaMolon Kanit">{userData.username}</div>
            <div className="text-gray-300 text-sm">{userData.name}</div>
        </div>
            <div  className="   flex justify-center ">
               <img style={{width:'2rem'}} onClick={ () => {

                dispatch(assign(
                    {
                        block:true,
                        value:  <div style={{top:'0%',bottom:'0%'}} className=" w-full  flex justify-center items-center   fixed">
                     <div id="logout"  style={{border:'2px solid #444073'}} className="bg-moradoFondo rounded-lg p-5 flex flex-col items-center justify-between  w-2/6">
                                 <p className="Kanit text-naranjaMolon text-2xl font-bold">¿Estás seguro de que quieres cerrar tu sesión?</p>
                                 <div className="flex mt-2 p-2 flex-row w-full justify-around ">
                                 <p  
                                 onClick={()=>{
                                     dispatch(assign(null));
                                     
                                     disconnect(userData.username);
                                     
                                     localStorage.removeItem('userData');
                                     nav("/")
                                     dispatch(updateLatRender(false));
                                    
                                    }}
                                 className="bg-moradoLight text-center   Kanit font-bold text-xl  text-white py-2 px-6 rounded-lg w-2/6 hover:bg-naranjaMolon hover:cursor-pointer ">Sí</p>
                                <p
                                 onClick={()=>{dispatch(assign(null))}}
                                 className="bg-moradoLight   text-center Kanit font-bold text-xl text-white py-2 px-6 rounded-lg w-2/6 hover:bg-naranjaMolon hover:cursor-pointer">No</p>
                                 </div>
                         </div>
                         </div>

                    }
                ))


                // dispatch(assign(
                // <div style={{top:'0%',bottom:'0%'}} className=" w-full flex justify-center items-center   fixed">
                // <div id="logout"  style={{border:'2px solid #444073'}} className="bg-moradoFondo rounded-lg p-5 flex flex-col items-center justify-between  w-2/6">
                //         <p className="Kanit text-naranjaMolon text-2xl font-bold">¿Estás seguro de que quieres cerrar tu sesión?</p>
                //         <div className="flex mt-2 p-2 flex-row w-full justify-around ">
                //         <p  
                //         onClick={()=>{
                //             dispatch(assign(null));
                //             nav("/")
                            
                //             }}
                //         className="bg-moradoLight text-center   Kanit font-bold text-xl  text-white py-2 px-6 rounded-lg w-2/6 hover:bg-naranjaMolon hover:cursor-pointer ">Sí</p>
                //         <p
                //         onClick={()=>{dispatch(assign(null))}}
                //          className="bg-moradoLight  text-center Kanit font-bold text-xl text-white py-2 px-6 rounded-lg w-2/6 hover:bg-naranjaMolon hover:cursor-pointer">No</p>
                //         </div>
                // </div>
                // </div>
                // ));
               
               }} title='Cerrar sesión' className=" hover:cursor-pointer hover:bg-moradoFondo   rounded-3xl" src={logout}></img>
            </div>
        </div>
        </div>
       <Menu userData={userData}/>
        {/* <ComunidadesRecientes/> */}
        <ComunidadesMasActivas userData={userData}/>
        <Suscripciones userData={userData} />


       


        </div>

      

           

    )

}