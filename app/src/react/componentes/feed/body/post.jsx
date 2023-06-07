import React from 'react';
import { PostFooter } from './post-footer/post-footer';
import { PostHeader } from './post-header/post-header';
import { PostBody } from './post-body/post-body';
import { formatImage } from '../../../../js/imageFormatting';
const Post = (props) => {



    return (
        <>
       <div className='body-post'>
        <div className='post'>
            <PostHeader header = {props.header} community = {props.community}/>
            <PostBody body = {props.body} image = {props.image}/>
            <PostFooter footer = {props.footer}/>
        </div>
       </div>
     
       </>
    )

}

export default Post;