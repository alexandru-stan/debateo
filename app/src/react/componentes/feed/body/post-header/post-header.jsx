import React from 'react';
import Logo from '../../../reusable/img';
import { useNavigate } from 'react-router-dom';
import { DeleteIcon } from '../../../../../assets/img/deleteIcon';
export const PostHeader = (props) => {
const navigate = useNavigate();
    return (
        <div style={{ overflowWrap:'break-word', height:'15%'}} className='post-header  p-1 border-b-2   border-naranjaMolon  text-white '>
        <div className=' h-2/6 flex items-center  post-info'>
        <div style={{width:'2rem' ,  height:'2rem'}}>
        <img  style={{borderRadius:'50%', width:'100%' ,height:'100%'  }} src={props.communityImage} />
        </div>
        <div 
            className='text-white font-bold cursor-pointer  hover:underline ml-marginLigero '
            onClick={() => { 
            localStorage.setItem('cid',props.communityId);
            navigate('/community/'+props.communityId)}}>{props.communityName}</div>

        <h1></h1>

        {/* <p className='sub'>{props.publicationId}</p>  */}
                
                <div style={{marginLeft:'auto'}}>{props.delete}</div>
        </div>
      
        <div style={{}} className='  p-1 h-4/6 flex flex-col justify-center'>
       
        <p style={{fontSize:'1.3rem',}} className='h-2/4 m-0 '>{props.publicationTitle}</p>
        <p style={{fontSize:'0.7rem'}} className='h-2/4 m-0   '>Publicado por <span style={{color:'#ff8c00'}}>{props.publicationUser}</span></p>
        </div>

        </div>
       
        
    )
}