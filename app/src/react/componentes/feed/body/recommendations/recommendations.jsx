import React from 'react';
import getRecommendations from '../../../../../js/getRecommendations';
import { useState } from 'react';
import { useEffect } from 'react';
import CommunityCard from './children/communityCard';
import { formatImage } from '../../../../../js/imageFormatting';

const  Recommendations =   () => {
const [state,setState] = useState();
const username = JSON.parse(sessionStorage.getItem("user")).username;

useEffect(() => {

    (async function() {
        
        let response = (await getRecommendations()).data;
       
        
        let communityArr=[];
        
        for(let i=0;i<response.length;i++){
            communityArr.push(
                
                <CommunityCard communityMembers= {response[i].communityMembers} communityId = {response[i].communityId} communityName={response[i].communityName} communityImage={response[i].communityImage.length>0?formatImage(response[i].communityImage):null} />

                    
                
            )
        }

        setState(communityArr);
        

      })()
   

      



},[])
    
    
    
    
   
    return (<div id="Recommendations" className=" ">
    <div className='flex justify-center '>
    <div id='recommendationText' className='backdrop-brightness-125 p-5 m-3  w-6/6 rounded-lg border-solid border-2 border-naranjaMolon '>
        <p className=' text-lg  text-center'>¡Bienvenido, {username}! </p>
        <p  className='  text-naranjaMolon text-center'>Todavía no estás suscrito a ninguna comunidad, Aquí tienes las 3 comunidades que más lo están petando👀 </p>
    </div>
    </div>
        <div className=" reco-cards  flex justify-center">

        {state?
         state.map((community, index) => (
        <React.Fragment key={index}>
          {community}
        </React.Fragment>
      )) :null}
           
        
        </div>
</div>
    )


}

export default Recommendations;