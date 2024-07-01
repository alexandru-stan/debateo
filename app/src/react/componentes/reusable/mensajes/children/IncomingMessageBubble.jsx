import React from "react";

export const MessageBubble = (props) => {

    let clase;
    props.sender == props.loggedUser ? clase = "outgoingMessageBubble bg-moradoLight" : clase = "incomingMessageBubble bg-moradoFondo";

    return (
            
        
        <div style={{overflowWrap:'break-word', width:"50%"}} className={clase}> {props.body}</div>
      

    )

}