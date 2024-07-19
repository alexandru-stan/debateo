import React from 'react';
import { PostFooter } from './post-footer/post-footer';
import { PostHeader } from './post-header/post-header';
import { PostBody } from './post-body/post-body';
import { formatImage } from '../../../../js/imageFormatting';
const Post = (props) => {



  

    

    return (
     
       
        <div key={props.publicationId} style={{  maxHeight:'35em'}}  ref={props.referencia} className='p-1 publicacion flex bg-moradoFondo flex-column post w-2/6 rounded-md mt-5 border-black ' >
            
            <PostHeader visibleCommunityInfo ={props.visibleCommunityInfo} referencia={props.referencia} publicationId={props.publicationId} publicationTitle = {props.publicationTitle} communityId = {props.communityId} communityName={props.communityName} communityImage = {props.communityImage} publicationUser={props.publicationUser} delete={props.delete}/>
            <PostBody liked={props.liked} publicationBody={props.publicationBody} publicationImage={props.publicationImage} />
            <PostFooter postInfo = {props}/>
        
       </div>
     
       
    )

}

export default Post;