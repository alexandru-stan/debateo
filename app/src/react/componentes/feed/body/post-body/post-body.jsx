import React from 'react';
import Image from '../../../reusable/img';
export const PostBody = (props) => {


    return (
        <div className='post-body'>
        <h1>{props.liked}</h1>
       <img src={props.publicationImage} alt='ok'></img>
        </div>
    )
}