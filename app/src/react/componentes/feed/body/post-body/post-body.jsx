import React, { useEffect, useState } from 'react';
import Image from '../../../reusable/img';
import imageResize from '../../../../../js/imageResize';
import { formatImage } from '../../../../../js/imageFormatting';
export const PostBody = (props) => {

    const [image,setImage] = useState(null);

    useEffect(()=>{



    },[props.publicationImage])


    return (
        <div style={{overflowWrap:'break-word', overflow:'auto', height:'75%' }} className=' p-1  border-b   border-moradoLight   text-white   post-body'>
      {props.publicationImage==null ?  <p style={{whiteSpace: 'pre-line'}} className='  p-2 '>{ props.publicationBody }</p> : null}
        {/* {props.publicationImage!=null? */}
        <div style={{ height:'100%', width:'100%', backgroundImage: `url(${props.publicationImage})` , backgroundSize:'100% 100%'}}   className='    flex  justify-center  '>
            
       <div style={{backdropFilter:'blur(100px)', height:'100%', width:'100%'}} className='   flex justify-center '> <img  className='' src={props.publicationImage}/></div>
        
        </div>
        {/* :null} */}
        </div>
    )
}