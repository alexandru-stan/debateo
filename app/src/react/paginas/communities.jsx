import React from 'react';
import Header from '../componentes/reusable/header/header'
import { Body } from '../componentes/communities/body';
import '../../assets/styles/Communities.css'
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';

export const Communities = () => {

    let {id} = useParams();

   
    return (
        <div id='communities'>
        <Header/>
        <Body id={id}/>
       

        </div>
    )
}