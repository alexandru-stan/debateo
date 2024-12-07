import React, { useEffect, useState } from 'react';
import Image from '../../../reusable/img';
import imageResize from '../../../../../js/imageResize';
import { formatImage } from '../../../../../js/imageFormatting';
export const PostBody = (props) => {

    const [image,setImage] = useState(null);

    useEffect(()=>{



    },[props.publicationImage])


    return (
        <div style={{overflowWrap:'break-word', overflow:'auto' }} className=' p-1  border-b   border-moradoLight   text-white   post-body'>
        <div style={{}} className='  p-2 '>{props.publicationBody}</div>
        {props.publicationImage!=null?<div style={{maxHeight:'30rem'}}  className='   flex  justify-center  '>
        {/* {props.publicationImage} */}
        <img src={props.publicationImage}/>
        
        </div>:null}
        </div>
    )
}