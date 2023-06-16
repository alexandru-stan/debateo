import React from 'react';
import Logo from '../../../reusable/img';


export const PostHeader = (props) => {
    return (<>
        <div className='post-header'>
        <h1>{props.communityName}</h1>
      
        </div>
        <img src={props.communityImage} alt='AAAA'></img>
        </>
    )
}