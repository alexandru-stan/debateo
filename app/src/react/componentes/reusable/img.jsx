import React from 'react';



const Logo = (props) => {

   


    return (
        <img onError={props.onerror} onClick={props.onclick} style={props.style} id={props.id} className={props.clase} draggable='false' src={props.ruta}  alt='ok'/>
    )
}

export default Logo;