import React from "react";
import { formatearTimestamps } from "../../../js/formatearTimestamps";
export const Reply = (props) => {

    let fechaBBDD = props.replyDate==1234 ? "Ahora mismo" :  new Date(props.replyDate); 
    let fechaFinal = formatearTimestamps(fechaBBDD);

    return(

        <div style={{marginBottom:'2%', borderBottom:'1px solid #444073'}}>
    <div style={{marginLeft:'5%'}} id='replies' className='flex flex-row  p-2'> 
    <div>
    <p className="text-naranjaMolon font-bold">{props.username}</p>
    <p>{props.replyText}</p>
    </div>
    <div style={{marginLeft:'auto'}}>
        {fechaFinal}
    </div>
    </div>
    <div className="flex flex-row">
    {/* <div>Likes</div>
    <div>Like</div>
    <div>Dislike</div> */}
    </div>
    </div>

)



}