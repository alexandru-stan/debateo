import React from 'react';



const Logo = (props) => {
    return (
        <img style={props.style} id={props.id} className={props.clase} draggable='false' src={props.ruta}  alt='ok'/>
    )
}

export default Logo;