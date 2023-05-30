import React, { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import { searchRequest } from "../../../js/Search";

export  const SearchBar = () => {

    const [resultados,setResultados] = useState([]);

    const $ = require('jquery')
    let timerId;
    let arrayResultados=[];
    function search(event) {

        $('#searchResult').show();

        if(event.target.value!=0){
        clearTimeout(timerId);
        timerId = setTimeout(()=>{
        searchRequest(event.target.value).then(response => setResultados(response.data));
        
        },300)
        
    } else {
        $('#searchResult').hide();
    }

    }




    return(
        <div id='search-bar'>
        <TextField onChange={search} type="search" variant="outlined" placeholder=" &#x1F50D;  ¿Qué estás buscando?"/>
        <div  id='searchResult'>
            
            {resultados.map((resultado, index) => (
          <div key={index}>{resultado}</div>
        ))}

        </div>
        </div>
        
    )

}