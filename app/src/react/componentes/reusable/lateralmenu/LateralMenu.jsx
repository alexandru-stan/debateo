import React from "react";
import { Menu } from "../header/menu";
import collapse from "../../../../assets/img/collapse.png"
import Image from "../img"
import profileImage from "../../../../assets/img/stockProfileImage.jpg"
import { useWindowSize } from "@uidotdev/usehooks";
import { useRef } from "react";
import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { update } from "../../../../redux-store/slices/LateralMenuVisibility";
import { ComunidadesMasActivas,ComunidadesRecientes,Suscripciones } from "./subMenus";
export const LateralMenu = (props) => {
    
    const dispatch = useDispatch();
    const isFirstRender = useRef(true);
    const lateralMenuVisibility = useSelector(state => state.lateralMenuVisibilty.value);
    const user = JSON.parse(sessionStorage.getItem('user'))

    const windowWidth = useWindowSize().width;

    useEffect(() => {
      
        windowWidth< 1101 ? dispatch(update('none')) : dispatch(update('block'));
    },[windowWidth])

    return (


  

        <div id="lateralMenu" className={   " bg-moradoOscuro border-r-2 border-moradoLight"} style={{zIndex:'1',position:'fixed', overflow:'scroll', height:'calc(100vh - 50px)  ',  left:'0%', top:'7%', width:'20%', display:lateralMenuVisibility}}>
       <div id="user-info" style={{marginTop:'2rem'}} className=" border-b-2 border-moradoLight flex items-center  p-2 ">
        <Image onerror={()=>{alert("IMAGE NO LONGER AVAILABLE")}} style={{borderRadius:'100% ', width:'4rem', height:'4rem'}} clase={" p-2"} ruta={user.profileImageFile}/>
        <div className="p-2">
            <div className="max-text-2xl text-bold text-naranjaMolon Kanit">{user.username}</div>
            <div className="text-gray-300 text-sm">{user.name}</div>
        </div>
        </div>
       <Menu/>
        {/* <ComunidadesRecientes/> */}
        <ComunidadesMasActivas/>
        <Suscripciones username={user.username}/>


       


        </div>

    )

}