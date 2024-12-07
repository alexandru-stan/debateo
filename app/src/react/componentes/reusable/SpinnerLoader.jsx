import React, { useEffect, useState } from "react";
import loadingSpinner from "../../../assets/img/loadingSpinner.svg";

export default function SpinnerLoader(props){

  const [text,setText] = useState("")
  

  return(
    <div style={props.padreStyle} id={props.id} className="   flex flex-row items-center w-full justify-center"  > 
   
       
        <img style={props.hijoStyle} className={props.clase} src={loadingSpinner}></img>
   
     
  
    </div>
  )
}