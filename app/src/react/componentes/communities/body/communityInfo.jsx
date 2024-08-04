import React from 'react';
import Image from '../../reusable/img';
import { formatImage } from '../../../../js/imageFormatting';
import { useNavigate } from 'react-router-dom';
export const CommunityInfo = (props) => {


    const navigate = useNavigate();



    return (
        <div style={{}} className='community-info p-2 Kanit  flex flex-col items-center bg-moradoFondo w-2/6  rounded-lg '>
    <div className='info      w-5/6'>
   
    <div className='  communityImageAndInfo flex flex-col '>
   
    <div className='flex flex-row  items-center'>
    <div style={{marginRight:'auto',width:'20%'}} className='community-image  flex  items-center  h-comInfo justify-center   '><img src={props.info.communityImage} className='imagenComunidad ' style={{borderRadius:'50%',height:'5rem',width:'100%'}}/></div>

        
            <div style={{width:'80%'}} className=' community-name p-3    '>
                <p style={{fontSize:'2rem'}} className='Kanit'>{props.info.communityName}</p>
                <p className="text-naranjaMolon Kanit">{props.info.communityMembers} miembros</p>
                <p className='community-creator Kanit '>Creada por <span className='text-naranjaMolon font-bold'>{props.info.communityCreator}</span></p>
                
            </div>
            {/* <div  className=' bg-emerald-950 admin '>{props.info.admin}</div> */}
            </div>
    </div>
        <div  className=' p-2 description'>{props.info.communityDescription}
        <div className='flex p-2 justify-center' style={{marginTop:'2%'}} id='communityButtons'>
        <button style={{ marginRight:'2%'}}  className=" hover:bg-moradoLight  rounded-md p-2  border-2 border-moradoLight bg-moradoFondo placeholder-gray-400  placeholder-gray-400 " onClick={() => {
          navigate("/upload/"+props.state);
        }}>Crear publicación</button>
        {props.subButton}
        </div>

        </div>
       
        </div>
      
        
    </div>

    );
}