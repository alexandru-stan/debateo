import React, { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import { searchRequest } from "../../../js/Search";
import { useNavigate } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { changeId } from "../../../redux-store/slices/CommunityIdSlice";
import { useRef } from "react";


export  const SearchBar = () => {
   
    
const navigate = useNavigate();

    const [resultados,setResultados] = useState([]);
    const id = useSelector((state) => state.cid.value);
    const dispatch = useDispatch();
    const $ = require('jquery')
    let timerId;
    const myRef = useRef(null);
    
    
    useEffect(()=>{
        
        myRef.current.addEventListener('focusout', handleFocusOut );
        myRef.current.addEventListener('focus', handleFocus );

    },[])
    
    function handleFocusOut(event){
        setTimeout(()=> $("#searchResult").css("display","none"),300);
        
    }
    function handleFocus(event){
        $("#searchResult").css("display","block");
    }
    
    function search(event) {




        
        if(event.target.value.length!=0){
        clearTimeout(timerId);
        timerId = setTimeout(()=>{
        searchRequest(event.target.value).then(response => {
            
            setResultados(response.data)});
        
        },300)
        
    } else {
        setResultados([]);
    }

    }




    return(
        <div style={{}} className="relative w-2/6 bg-zinc-950   flex flex-col justify-center items-center  flex flex-col  justify-center  " id='search-bar'>
        
        
        <input autoComplete="off" ref={myRef} style={{ outline:'none', backgroundColor:'#1f1e33',border:'1px solid #444073' }} id='searchBarInput' className="w-full p-2   text-white placeholder-white Kanit  bg-moradoOscuro rounded-md  text-sm" onChange={search} type="search" placeholder="¿Que estás buscando?"></input>
        {resultados.length>0?
        <div  style={{border:'0.5px solid #ff8c00'}} className="   z-40 absolute top-topSearchResults  rounded-md  w-full" id='searchResult'>
            
            { resultados.map((resultado) => (
          <div 
            className="cursor-pointer Kanit  hover:bg-naranjaMolon text-lg bg-moradoFondo text-white p-2" 
            onClick={() => {
            dispatch(changeId(resultado.communityId));
            localStorage.setItem('cid',resultado.communityId);
            navigate('/community/'+resultado.communityId)
            setResultados([]);
           
            }} key={resultado.communityId}>{resultado.communityName}</div>
        ))}

        
        </div>
        :null}
        
        </div>
        
    )

}