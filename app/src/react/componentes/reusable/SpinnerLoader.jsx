import React, { useEffect, useState } from "react";
import loadingSpinner from "../../../assets/img/loadingSpinner.svg";

export default function SpinnerLoader(props){

  const [text,setText] = useState("")
  const [loading,setLoading] = useState(true);
  useEffect(()=>{
    setTimeout(()=> {

      setTimeout(()=> {
        setText("Loading...");
      },3000)
      

    })
  })

  return(
    <div  className="" id={props.id}> 
      {loading? (
        <img src={loadingSpinner}></img>
      ): (
        null
      )}
    </div>
  )
}