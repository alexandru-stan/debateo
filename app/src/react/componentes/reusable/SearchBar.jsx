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
        if(event.target.value!=0){
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
        <div id='search-bar'>
        <TextField onChange={search} type="search" variant="outlined" placeholder=" &#x1F50D;  ¿Qué estás buscando?"/>
        <div  id='searchResult'>
            
            {resultados.map((resultado) => (
          <div onClick={() => {
            dispatch(changeId(resultado.communityId));
            localStorage.setItem('cid',resultado.communityId);
            navigate('/community/'+resultado.communityId)

            $('#searchResult').hide();
            }} key={resultado.communityId}>{resultado.communityName}</div>
        ))}

        </div>
        </div>
        
    )

}