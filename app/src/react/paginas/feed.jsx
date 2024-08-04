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
import { update } from "../../redux-store/slices/LateralMenuVisibility";
import { useRef } from "react";
const Feed = () => {
    let user = JSON.parse(sessionStorage.getItem('user'));
const nav = useNavigate();
const dispatch = useDispatch();
const isFirstRender = useRef(true);
const lateralMenuVisibility = useSelector(state => state.lateralMenuVisibilty.value);
    useEffect(()=> {
      
        
        if(user==null){
            nav("/");
        } else {
            
        }
       
    })

    const windowWidth = useWindowSize().width;

    useEffect(() => {
        
        // isFirstRender.current ? 
        // isFirstRender.current = false :

        // // windowWidth<= 1101 && lateralMenuVisibility ? dispatch(update(false)) :null;
        // // windowWidth >=1101 && !lateralMenuVisibility? dispatch(update(true)) :null;

    },[windowWidth])

    return user ? (
       
        <div style={{ height:'100%'}} className=" pt-1   " id='feed'>
       <Header/>
       {  lateralMenuVisibility ?  <LateralMenu/> : null }
     
        <Body/>
         </div>
        
    
    
    ) : null;
    
    
    


}


export default Feed;