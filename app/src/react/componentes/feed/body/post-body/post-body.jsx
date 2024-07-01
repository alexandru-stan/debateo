import React from 'react';
import Image from '../../../reusable/img';
export const PostBody = (props) => {



    return (
        <div style={{overflowWrap:'break-word', overflow:'auto' }} className=' p-1  border-b   border-naranjaMolon   text-white   post-body'>
        <div style={{}} className='  p-2 '>{props.publicationBody}</div>
        {props.publicationImage!=null?<div style={{maxHeight:'15rem'}}  className='  p-2 flex  justify-center  '>
        {/* {props.publicationImage} */}
        {props.publicationImage}
        </div>:null}
        </div>
    )
}