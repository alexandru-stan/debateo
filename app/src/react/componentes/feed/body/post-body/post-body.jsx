import React from 'react';
import Image from '../../../reusable/img';
export const PostBody = (props) => {
let imagen
    if(props.image.length>0){
        imagen = <Image ruta={props.image} />
    } else {
        imagen = null;
    }

    return (
        <div className='post-body'>
        <p>{props.body}</p>
        {imagen}
        </div>
    )
}