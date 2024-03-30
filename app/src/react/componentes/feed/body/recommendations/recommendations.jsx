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
       
        console.log(response);
        let communityArr=[];
        
        for(let i=0;i<response.length;i++){
            communityArr.push(
                
                <CommunityCard communityId = {response[i].communityId} communityName={response[i].communityName} communityImage={response[i].communityImage.length>0?formatImage(response[i].communityImage):null} />

                    
                
            )
        }

        setState(communityArr);
        

      })()
   

      



},[])
    
    console.log(state);
    
    
   
    return (<div id="Recommendations" className=" ">
    <div className='flex justify-center '>
    <div id='recommendationText' className='backdrop-brightness-125 p-5 m-3 bg-visiniu w-6/6 rounded-lg border-solid border-2 border-naranjaMolon '>
        <h1 className=' text-center'>¡Bienvenido, {username}! </h1>
        <h2  className=' text-naranjaMolon text-center'>¡Aquí abajo te dejamos 3 comunidades que podrían interesarte!</h2>
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