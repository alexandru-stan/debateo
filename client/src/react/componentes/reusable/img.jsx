import React from 'react';



const Logo = (props) => {

   


    return (
        <img alt="" onMouseOver={ props.onmouseover } onMouseOut={props.onmouseout} onLoad={props.onload} onError={() => {
    
            props.onerror();

        
        
        }} onClick={props.onclick} style={props.style} id={props.id} className={props.clase} draggable='false' src={props.ruta}  />
    )
}

export default Logo;