import React from 'react';
import Image from '../../../reusable/img';
export const PostBody = (props) => {
    return (
        <div className='post-body'>
        <p>{props.body}</p>
        <Image ruta={props.image} />
        </div>
    )
}