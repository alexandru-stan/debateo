import React from 'react';



const Logo = (props) => {
    return (
        <img className={props.clase} draggable='false' src={props.ruta}  alt='ok'/>
    )
}

export default Logo;