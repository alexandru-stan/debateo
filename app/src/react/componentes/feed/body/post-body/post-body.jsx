import React from 'react';
import Image from '../../../reusable/img';
export const PostBody = (props) => {

console.log("PUBLICATIOPN IMAGEEEEEEEEEEEEEEEEEEEEEEEE"+props.publicationImage);

    return (
        <div className='  h-postBodyHeight  border-b mt-2  border-naranjaMolon  overflow-y-auto text-white whitespace-pre-wrap break-all   post-body'>
        <p>{props.publicationBody}</p>
        <div  className='image w-full flex justify-center h-5/6 '>
        {/* {props.publicationImage} */}
        {props.publicationImage}
        </div>
        </div>
    )
}