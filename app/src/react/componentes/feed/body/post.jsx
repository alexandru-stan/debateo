import React from 'react';
import { PostFooter } from './post-footer/post-footer';
import { PostHeader } from './post-header/post-header';
import { PostBody } from './post-body/post-body';
import { formatImage } from '../../../../js/imageFormatting';
const Post = (props) => {

console.log(props.liked);

    return (
     
       
        <div  ref={props.referencia} className='mt-5   h-alturaPostDefault backdrop-brightness-125 post w-3/6 rounded-md border-black ' >
            <PostHeader referencia={props.referencia} publicationId={props.publicationId} publicationTitle = {props.publicationTitle} communityId = {props.communityId} communityName={props.communityName} communityImage = {props.communityImage} publicationUser={props.publicationUser}/>
            <PostBody liked={props.liked} publicationBody={props.publicationBody} publicationImage={props.publicationImage} />
            <PostFooter publicationId={props.publicationId} liked={props.liked} delete = {props.delete} likes={props.likes} comments={props.comments}/>
        
       </div>
     
       
    )

}

export default Post;