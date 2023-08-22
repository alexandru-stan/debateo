import React from 'react';
import Logo from '../../../reusable/img';
import { useNavigate } from 'react-router-dom';


export const PostHeader = (props) => {
const navigate = useNavigate();
    return (
        <div className='post-header h-postHeaderHeight border-b-2 mt-2  border-naranjaMolon  text-white '>
        <div className=' h-1/4 flex  post-info'>
        <img  style={{borderRadius:'50%', width:'2%',   }} src={props.communityImage} ></img>
        <h6 
            className='text-white ml-marginLigero '
            onClick={() => { 
            localStorage.setItem('cid',props.communityId);
            navigate('/community/'+props.communityId)}}>{props.communityName}</h6>
        {/* <p className='sub'>{props.publicationId}</p>  */}
      
        </div>
        <div className=' h-3/4'>
       
        <h4>{props.publicationTitle}</h4>
        <sub className=''>Publicado por <span style={{color:'#ff8c00'}}>{props.publicationUser}</span></sub>
        </div>

        </div>
       
        
    )
}