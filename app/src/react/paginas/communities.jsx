import React from 'react';
import Header from '../componentes/reusable/header/header'
import { Body } from '../componentes/communities/body';
// import '../../assets/styles/Communities.css'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { LateralMenu } from "../componentes/reusable/lateralmenu/LateralMenu";

export const Communities = () => {

    let {id} = useParams();
    let userData = localStorage.getItem('userData');
    

    const nav = useNavigate() ;
        useEffect(()=> {
            
            if(userData==undefined){
                nav("/");
            } else {
                
            }
        })




   
    return (
        userData != undefined ? 
        <div className=" p-1  h-full" id='communities'>
        <Header/>
        {/* <LateralMenu/> */}
        <Body userData={userData} id={id}/>
       

        </div>
: null    
)
}