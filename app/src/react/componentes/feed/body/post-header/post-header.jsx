import React from 'react';
import Logo from '../../../reusable/img';
import { useNavigate } from 'react-router-dom';


export const PostHeader = (props) => {
const navigate = useNavigate();
    return (<>
        <div className='post-header'>
        <div className='post-info'>
        <img src={props.communityImage} ></img>
        <h1 onClick={() => { 
            localStorage.setItem('cid',props.communityId);
            navigate('/community/'+props.communityId)}}>{props.communityName}</h1>
        <p className='sub'>{props.publicationId}</p>
      
        </div>
        <p className='sub'>Publicado por <span style={{color:'#ff8c00'}}>{props.publicationUser}</span></p>
        <h4>{props.publicationTitle}</h4>

        </div>
       
        </>
    )
}