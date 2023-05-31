import React from 'react';


export const PostHeader = (props) => {
    return (
        <div className='post-header'>
        <h6></h6>
        <h6>{props.community} {props.header}</h6>
        </div>
        
    )
}