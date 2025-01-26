import React from 'react';
import { PostFooter } from './post-footer/post-footer';
import { PostHeader } from './post-header/post-header';
import { PostBody } from './post-body/post-body';
import { formatImage } from '../../../../js/imageFormatting';
const Post = (props) => {


    const userData = JSON.parse(localStorage.getItem('userData'));

  

    

    return (
     
       
        <div key={props.publicationId} style={ props.publicationImage == null ? {maxHeight:'40rem',width:'40%'} : {height:'40rem',width:'40%'}}  ref={props.referencia} className='p-1 hover:bg-fondoPublicacionesHover hover:cursor-pointer publicacion flex bg-moradoFondo flex-column post  rounded-md mt-5 border-black ' >
            
            <PostHeader userData = {userData} fyp={props.fyp} visibleCommunityInfo ={props.visibleCommunityInfo} referencia={props.referencia} publicationId={props.publicationId} publicationTitle = {props.publicationTitle} communityId = {props.communityId} communityName={props.communityName} communityImage = {props.communityImage} publicationUser={props.publicationUser} delete={props.delete}/>
            <PostBody liked={props.liked} publicationBody={props.publicationBody} publicationImage={props.publicationImage} />
            <PostFooter userData = {userData} postInfo = {props}/>
            
       </div>
     
       
    )

}

export default Post;