import React,{useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Header from "../componentes/reusable/header/header";
import { Body } from "../componentes/profile/body";
// import "../../assets/styles/Profile.css";
export const Profile = () => {
let user = sessionStorage.getItem('user');
const nav = useNavigate() ;
    useEffect(()=> {
        
        if(user==null){
            nav("/");
        } else {
            console.log(user.name);
        }
    })


return(
    <div className="h-full overflow-y-hidden" id='profile'>
    <Header/>
    <Body/>

    </div>

);



}


