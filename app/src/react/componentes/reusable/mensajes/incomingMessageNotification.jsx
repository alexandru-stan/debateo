// import React, { useState } from "react";
// import { useSelector } from "react-redux";
// import { useEffect } from "react";
// export const IncomingMessageNotification = () => {
//     const incomingMessage = useSelector(state => state.incomingMessage.value);
//     const [mensaje,setMensaje] = useState(null);
//     const $ = require('jquery')
//     useEffect(()=>{

//         incomingMessage!=null ? 

//         $("#incomingMessagePopUp").fadeIn(5000).fadeOut()

//         :null
    
    
       
       

//     },[incomingMessage])

//     return (

//         <div id='incomingMessagePopUp' style={{top:'10%', right:'1%', display:'none', height:'4.5rem', width:'20%'}} className={'fixed bg-moradoLight shadow-lg rounded-lg max-w-sm w-full  '}>
    
//   <div className="p-2">
//     <p className=" p-1 text-naranjaMolon font-bold ">{mensaje?.messageSender}</p>
//     <p className="p-1 ">{mensaje?.messageBody}</p>
// </div> 


     


// </div>
//     )


// }