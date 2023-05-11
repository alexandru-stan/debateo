
import React from "react"
import {Alert,AlertTitle} from "@mui/material";

const RespuestaServidor = (props) => {
    let severity;
    switch(true){
        case props.codigo>=200 && props.codigo<=299:
            severity = "success";
            break;

        case props.codigo>=400 && props.codigo <=499:
            severity = "error";
            break;
        default:
            severity = "warning";
            break;
    }

return(
<Alert id='registerResponse' variant='filled' severity={severity}>
<AlertTitle>{props.texto}</AlertTitle>

</Alert>
);

}


export default RespuestaServidor;
