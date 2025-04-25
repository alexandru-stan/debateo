
import React from "react"
import {Alert,AlertTitle} from "@mui/material";

const RespuestaServidor = (props) => {
    let severity;
    switch(true){
        case props.codigo>=200 && props.codigo<=299:
            severity = "#265500";
            break;

        case props.codigo>=400 && props.codigo <=499:
            severity = "#C82E13";
            break;
        default:
            severity = "yellow";
            break;
    }

return(



<div style={{backgroundColor:severity}} className="w-full text-center text-white font-bold py-2 px-3 rounded" id='registerResponse'>{props.texto}</div>


);

}


export default RespuestaServidor;
