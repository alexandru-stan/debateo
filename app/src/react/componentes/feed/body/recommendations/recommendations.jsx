import React from 'react';
import getRecommendations from '../../../../../js/getRecommendations';
import { useState } from 'react';
import { useEffect } from 'react';
import CommunityCard from './children/communityCard';

const  Recommendations =   () => {
const [state,setState] = useState();


useEffect(() => {

    (async function() {
        
        let response = (await getRecommendations()).data;
        console.log(response);
        


      })()
   

    



},[])
    
    
    
    
   
    return (<><div className='flex justify-center'>
    <div className=' p-3 m-3 bg-visiniu w-4/6 rounded- border-solid border-2 border-naranjaMolon '>
        <h1 className=' text-center'>¡Hola!, parece ser que no estás suscrito a ninguna comunidad todavía...</h1>
        <h2 className=' text-center'>Aquí abajo te dejamos las 3 comunidades más TOP actualmente</h2>
    </div>
    </div>
        <div className="flex justify-center">

      

        <CommunityCard/>
        <CommunityCard/>
        <CommunityCard/>
        </div>
</>
    )


}

export default Recommendations;