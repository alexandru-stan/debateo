import React from 'react';
import { PostFooter } from './post-footer/post-footer';
const Post = () => {

    return (
        <>
       <div className='body-post'>
        <div className='post'>
            <div className='post-header'>HEADER</div>
            <div className='post-body'>BODY</div>
            
            <PostFooter/>
        </div>
       </div>
     
       </>
    )

}

export default Post;