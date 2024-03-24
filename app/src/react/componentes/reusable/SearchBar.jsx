import React, { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import { searchRequest } from "../../../js/Search";
import { useNavigate } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { changeId } from "../../../redux-store/slices/CommunityIdSlice";


export  const SearchBar = () => {
   
    
const navigate = useNavigate();

    const [resultados,setResultados] = useState([]);
    const id = useSelector((state) => state.cid.value);
    const dispatch = useDispatch();
    const $ = require('jquery')
    let timerId;
    let arrayResultados=[];
    function search(event) {

        $('#searchResult').show();
        if(event.target.value.length!=0){
        clearTimeout(timerId);
        timerId = setTimeout(()=>{
        searchRequest(event.target.value).then(response => {
            
            setResultados(response.data)});
        
        },300)
        
    } else {
        $('#searchResult').hide();
    }

    }




    return(
        <div className=" w-2/6 flex flex-col justify-center  " id='search-bar'>
        <div className="relative  w-full h-full flex flex-col justify-center items-center">
        
        <input id='searchBarInput' className="w-5/6 p-2  bg-naranjaMolon placeholder-black rounded-md h-barraBusqueda text-sm" onChange={search} type="search" placeholder="¿Que estás buscando?"></input>
        <div className=" z-40 absolute top-tumadre  rounded-md  w-5/6" id='searchResult'>
            
            {resultados.map((resultado) => (
          <div 
            className="cursor-pointer hover:bg-naranjaMolon text-2xl bg-moradoLight text-white p-2" 
            onClick={() => {
            dispatch(changeId(resultado.communityId));
            localStorage.setItem('cid',resultado.communityId);
            navigate('/community/'+resultado.communityId)

            $('#searchResult').hide();
            }} key={resultado.communityId}>{resultado.communityName}</div>
        ))}

        </div>
        </div>
        
        </div>
        
    )

}