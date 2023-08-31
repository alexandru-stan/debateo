import React from 'react';
import Header from '../componentes/reusable/header/header'
import { Body } from '../componentes/communities/body';
// import '../../assets/styles/Communities.css'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
export const Communities = () => {

    let {id} = useParams();
    let user = sessionStorage.getItem('user');
    const nav = useNavigate() ;
        useEffect(()=> {
            
            if(user==null){
                nav("/");
            } else {
                
            }
        })
   
    return (
        <div className=" p-1  h-full" id='communities'>
        <Header/>
        <Body id={id}/>
       

        </div>
    )
}