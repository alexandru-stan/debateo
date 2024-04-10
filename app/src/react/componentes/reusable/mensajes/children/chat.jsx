import React from "react";

export const Chat = (props) => {

    return(
    <div style={{height:'5rem', direction:'ltr'}} onClick={props.onClick} className='chat  bg-moradoFondo hover:cursor-pointer  flex-col flex m-2 justify-between rounded-lg  hover:bg-moradoLight hover:cursor '>
        <div id='chatInfo' className='flex justify-between ' >
        <div className='nombreUsuario p-2 text-naranjaMolon '>{props.interactuer}</div>
        <div className='p-2 text-naranjaMolon'>{props.lastInteraction}</div>
        
       
        </div>
        <div className=' text-left p-2'>{props.lastMessage}</div>
    </div>
    );
}