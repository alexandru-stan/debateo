import React,{useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Header from "../componentes/reusable/header/header";
import { Body } from "../componentes/profile/body";
import { LateralMenu } from "../componentes/reusable/lateralmenu/LateralMenu";
// import "../../assets/styles/Profile.css";
export const Profile = () => {
let user = JSON.parse(localStorage.getItem('userData'));

const nav = useNavigate() ;


useEffect(()=> {
      
    localStorage.getItem('userData') == undefined ? nav("/") : null;
    
})


return(
    localStorage.getItem('userData') != undefined ?  
    <div className="h-full  flex items-center flex-col" id='profile'>
    <Header/>
    {/* <LateralMenu/> */}
    <Body user = {user} />
    

    </div>

: nav("/")

);



}


