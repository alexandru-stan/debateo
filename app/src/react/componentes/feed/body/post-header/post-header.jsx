import React from 'react';


export const PostHeader = (props) => {
    return (
        <div className='post-header'>
        <h1>{props.identificador}</h1>
        <h6>{props.community} {props.header}</h6>
        </div>
        
    )
}