import React from 'react';
import { PostFooter } from './post-footer/post-footer';
import { PostHeader } from './post-header/post-header';
import { PostBody } from './post-body/post-body';
import { formatImage } from '../../../../js/imageFormatting';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
const Post = (props) => {


    const userData = JSON.parse(localStorage.getItem('userData'));
    const nav = useNavigate();
    const loc = useLocation();
    const navignore =['likeButton', 'postMenuButtons', 'communityName']
  
    

    return (
     
       
        <div onClick={(ea) => !navignore.some(e => ea.target.className.includes(e)) ? nav("/" + props.publicationId + "/comments") : null} key={props.publicationId} style={ props.publicationImage == null ? {maxHeight:'40rem',width:'40%'} : {height:'40rem',width:'40%'}}  ref={props.referencia} className={'p-2   publicacion flex border-b border-t border-moradoLight flex-column post   ' + (!loc.pathname.includes("comments") ? ' hover:bg-fondoPublicacionesHover hover:cursor-pointer' : null)} >
            
            <PostHeader userData = {userData} fyp={props.fyp} visibleCommunityInfo ={props.visibleCommunityInfo} referencia={props.referencia} publicationId={props.publicationId} publicationTitle = {props.publicationTitle} communityId = {props.communityId} communityName={props.communityName} communityImage = {props.communityImage} publicationUser={props.publicationUser} delete={props.delete}/>
            <PostBody liked={props.liked} publicationBody={props.publicationBody} publicationImage={props.publicationImage} />
            <PostFooter userData = {userData} postInfo = {props}/>
            
       </div>
     
       
    )

}

export default Post;