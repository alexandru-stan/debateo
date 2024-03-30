import React from 'react';
import Image from '../../reusable/img';
import { formatImage } from '../../../../js/imageFormatting';
import { useNavigate } from 'react-router-dom';
export const CommunityInfo = (props) => {


    const navigate = useNavigate();



    return (
        <div style={{}} className='community-info   flex flex-col items-center bg-moradoFondo w-2/6  rounded-lg justify-center '>
    <div className='info     w-5/6'>
   
    <div className='  communityImageAndInfo flex flex-col '>
   
    <div className='flex items-center'>
    <div className='community-image  flex justify-center items-center  h-comInfo  w-1/6 '><img src={props.info.communityImage} className='imagenComunidad border-2 border-naranjaMolon' style={{borderRadius:'50%'}}/></div>

    
            <div className=' community-name p-3  w-5/6 '>
                <p style={{fontSize:'2rem'}} className='m-0'>{props.info.communityName}</p>
                <p className="text-naranjaMolon m-0">{props.info.communityMembers} miembros</p>
                <p className='community-creator m-0'>Creada por <span className='text-naranjaMolon'>{props.info.communityCreator}</span></p>
                
            </div>
            <div  className=' admin '>{props.info.admin}</div>
            </div>
    </div>
        <div  className=' p-2 description'>{props.info.communityDescription}
        <div className='flex p-2 justify-center' style={{marginTop:'2%'}} id='communityButtons'>
        <button style={{maxWidth:'50%', marginRight:'2%'}}  className=" hover:bg-moradoLight  rounded-md p-2  border-2 border-naranjaMolon bg-moradoFondo placeholder-gray-400  placeholder-gray-400 " onClick={() => {
          navigate("/upload/"+props.state);
        }}>Crear publicación</button>
        {props.subButton}
        </div>

        </div>
       
        </div>
      
        
    </div>

    );
}