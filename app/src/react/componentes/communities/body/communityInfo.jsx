import React, { useEffect, useState } from 'react';
import Image from '../../reusable/img';
import { formatImage } from '../../../../js/imageFormatting';
import { useNavigate } from 'react-router-dom';
import SpinnerLoader from '../../reusable/SpinnerLoader';
import sensible from "../../../../assets/img/sensible.png"

export const CommunityInfo = (props) => {


    const navigate = useNavigate();
    const [loading,setLoading] = useState(true);




    return (
   
        <div style={{}} className='community-info  Kanit p-2   flex flex-col justify-center items-center bg-moradoFondo w-2/6  rounded-lg '>
        {props.communityInfo == undefined ? <SpinnerLoader hijoStyle={{width:'4rem'}} id='loaderCommunityInfo'/> : <div className='info      w-5/6'>
   
   <div className='  communityImageAndInfo flex flex-col '>
  
   <div className='flex flex-row  items-center'>
   <div style={{marginRight:'auto',width:'20%'}} className='community-image  flex  items-center  h-comInfo justify-center   '><img src={formatImage(props.communityInfo.communityImage)} className='imagenComunidad ' style={{borderRadius:'50%',height:'5rem',width:'100%'}}/></div>

       
           <div style={{width:'80%'}} className=' community-name p-3    '>
               <p style={{fontSize:'1rem',overflowWrap:'break-word'}} className='Kanit font-bold'>{props.communityInfo.communityName}</p>
               <p className="text-naranjaMolon Kanit">{props.communityInfo.communityMembers} miembros</p>
               <p className='community-creator Kanit '>Creada por <span className='text-naranjaMolon font-bold'>{props.communityInfo.communityCreator}</span></p>
           </div>
           {/* <div  className=' bg-emerald-950 admin '>{props.communityInfo.admin}</div> */}
           </div>
   </div>
       <div  className=' p-2 description'>{props.communityInfo.communityDescription}
       <div className='flex p-2 justify-center' style={{marginTop:'2%'}} id='communityButtons'>

    
    {props.communityInfo.subscription?.subscriptionLevel != 'BANNED' && !(props.communityInfo.privateCommunity=true  && props.communityInfo.subscription==null) ?  <button style={{ marginRight:'2%'}}  className=" hover:bg-moradoLight  rounded-md p-2  border-2 border-moradoLight bg-moradoFondo placeholder-gray-400  placeholder-gray-400 " onClick={() => {
         navigate("/upload/"+props.state);
       }}>Crear publicación</button>
    :null} 
         {props.communityInfo.subscription?.subscriptionLevel != 'BANNED' &&  props.communityInfo.communityCreator != JSON.parse(localStorage.getItem('userData')).username? <button className=" hover:bg-moradoLight  rounded-md p-2  border-2 border-moradoLight bg-moradoFondo placeholder-gray-400  placeholder-gray-400 ">Suscribirse</button>
         : <button className=" hover:bg-moradoLight  rounded-md p-2  border-2 border-moradoLight bg-moradoFondo placeholder-gray-400  placeholder-gray-400 ">Administrar</button> } 

    </div>


       </div>
       {props.communityInfo.sensitiveContent ? <div className='flex flex-row items-center justify-center  '> <img className='' style={{width:'10%'}} src={sensible}/><p className='Kanit  text-naranjaMolon text-center text-sm'>Esta comunidad puede incluir contenido sensible</p></div> : null}

       </div>
      }
    
        
    </div>

    );
}