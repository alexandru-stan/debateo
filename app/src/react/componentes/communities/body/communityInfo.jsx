import React from 'react';
import Image from '../../reusable/img';
import { formatImage } from '../../../../js/imageFormatting';

export const CommunityInfo = (props) => {

    console.log(props.info.communityBackgroundImage);
    



    return (
        <div className='community-info'>
  <div class='community-image'><Image ruta={props.info.communityImage}/></div>
    <div className='info'>
  
            <div className='community-name'><h1>{props.info.communityName}</h1></div>
        {/* <div className='community-creator'>{props.info.communityCreator}</div> */}
        <div className='description'>{props.info.communityDescription}</div>
    </div>
        </div>
   

    );
}