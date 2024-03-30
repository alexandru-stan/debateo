import React from 'react';
import Logo from '../../../reusable/img';
import { useNavigate } from 'react-router-dom';


export const PostHeader = (props) => {
const navigate = useNavigate();
    return (
        <div style={{ height:'15%'}} className='post-header  p-1 border-b-2   border-naranjaMolon  text-white '>
        <div className=' h-2/6 flex align-center  post-info'>
        {props.communityImage!=null?<img  style={{borderRadius:'50%', width:'5%',   }} src={props.communityImage} ></img>:null}
        <div 
            className='text-white font-bold cursor-pointer  hover:underline ml-marginLigero '
            onClick={() => { 
            localStorage.setItem('cid',props.communityId);
            navigate('/community/'+props.communityId)}}>{props.communityName}</div>
        {/* <p className='sub'>{props.publicationId}</p>  */}
      
        </div>
        <div style={{}} className='  p-1 h-4/6 flex flex-col justify-center'>
       
        <p style={{fontSize:'1.3rem',}} className='h-2/4 m-0 '>{props.publicationTitle}</p>
        <p style={{fontSize:'0.7rem'}} className='h-2/4 m-0   '>Publicado por <span style={{color:'#ff8c00'}}>{props.publicationUser}</span></p>
        </div>

        </div>
       
        
    )
}