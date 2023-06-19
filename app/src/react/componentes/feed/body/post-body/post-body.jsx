import React from 'react';
import Image from '../../../reusable/img';
export const PostBody = (props) => {


    return (
        <div className='post-body'>
        <p>{props.publicationBody}</p>
        <div className='image'>
        <img src={props.publicationImage} ></img>
        </div>
        </div>
    )
}