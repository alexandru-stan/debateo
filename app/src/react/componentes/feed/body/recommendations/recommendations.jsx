import React from 'react';
import getRecommendations from '../../../../../js/getRecommendations';
import { useState } from 'react';
import { useEffect } from 'react';
import CommunityCard from './children/communityCard';
import { formatImage } from '../../../../../js/imageFormatting';

const  Recommendations =   () => {
const [state,setState] = useState();


useEffect(() => {

    (async function() {
        
        let response = (await getRecommendations()).data;
       
        console.log(response);
        let communityArr=[];
        
        for(let i=0;i<response.length;i++){
            communityArr.push(
                
                <CommunityCard communityName={response[i].communityName} communityImage={response[i].communityImage.length>0?formatImage(response[i].communityImage):null} />

                    
                
            )
        }

        setState(communityArr);
        

      })()
   

      



},[])
    
    console.log(state);
    
    
   
    return (<div className=" ">
    <div className='flex justify-center'>
    <div className='backdrop-brightness-125 p-5 m-3 bg-visiniu w-5/6 rounded-lg border-solid border-2 border-naranjaMolon '>
        <h1 className=' text-center'>¡No estás suscrito a ninguna comunidad!</h1>
        <h2 className=' text-naranjaMolon text-center'>Aquí abajo te dejamos las 3 comunidades más populares </h2>
    </div>
    </div>
        <div className="  flex justify-center">

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