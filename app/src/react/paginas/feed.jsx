import React, { useEffect } from "react";
import Header from "../componentes/reusable/header/header";
import Body from "../componentes/feed/body";
// import "../../assets/styles/Feed.css";
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { LateralMenu } from "../componentes/reusable/lateralmenu/LateralMenu";
import { useWindowSize } from "@uidotdev/usehooks";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { LateralMenuRight } from "../componentes/reusable/LateralMenuRight/rightLateralMenu";
import { update } from "../../redux-store/slices/LateralMenuVisibility";
import { useRef } from "react";
const Feed = () => {
    let user = JSON.parse(sessionStorage.getItem('user'));
const nav = useNavigate();

    useEffect(()=> {
      
        
        if(user==null){
            nav("/");
        } else {
            
        }
       
    })



    return user ? (
       
        <div style={{ height:'100%'}} className=" pt-1  overlay " id='feed'>
        <Header/>
        <LateralMenu/>
        <LateralMenuRight/>
        <Body/>
        
        </div>
        
    
    
    ) : null;
    
    
    


}


export default Feed;