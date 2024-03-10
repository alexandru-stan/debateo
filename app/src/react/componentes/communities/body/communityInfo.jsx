import React from 'react';
import Image from '../../reusable/img';
import { formatImage } from '../../../../js/imageFormatting';

export const CommunityInfo = (props) => {


    



    return (
        <div className='community-info flex w-3/6  justify-center '>
  <div className='community-image flex justify-end w-1/4 h-comInfo  '><img src={props.info.communityImage} className='w-full' style={{borderRadius:'50%'}}/></div>
    <div className='info  p-3 w-3/4'>
    <div className='admin'>{props.info.admin}</div>
            <div className='community-name '><h1>{props.info.communityName}</h1> <h6 className="text-naranjaMolon">{props.info.communityMembers} miembros</h6></div>
        {/* <div className='community-creator'>{props.info.communityCreator}</div> */}
        <div className='description'>{props.info.communityDescription}</div>
        
    </div>
        </div>
   

    );
}