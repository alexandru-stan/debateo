import React, { useEffect, useRef, useState } from 'react';
import Image from '../../../reusable/img';
import { useNavigate } from 'react-router-dom';
import dotsmenu from "../../../../../assets/img/dotsmenu.png";
import { PopUp } from '../../../reusable/popup/PopUp';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { assign } from '../../../../../redux-store/slices/PopUp';
import SpinnerLoader from '../../../reusable/SpinnerLoader';

export const PostHeader = (props) => {
const navigate = useNavigate();
const popUpVal = useSelector(state => state.popUp.value);
const dispatch = useDispatch();
// const username = JSON.parse(localStorage.getItem('userData')).username;
const [dotsMenuVisibility, setDotsMenuVisibility] = useState("none");
const myRef = useRef(null)

useEffect(()=> {
    myRef.current.addEventListener('focusout',() =>  setDotsMenuVisibility("none"));
    // myRef.current.addEventListener('click',() =>  setDotsMenuVisibility("none"));
},[])

// useEffect(()=>{
//     console.log(dotsMenuVisibility)
// },[dotsMenuVisibility])

    return (
        
        <div style={{ overflowWrap:'break-word',  height:'15%'}} className='post-header  p-1      text-white '>
        {/* <p>{props.publicationId}</p> */}
       {props.visibleCommunityInfo ? 
       
        <div className=' h-2/6 flex items-center  post-info'>
          
        <div className='' style={{width:'2rem' ,  height:'2rem'}}>
        <img  style={{borderRadius:'50%', width:'100%' ,height:'100%',  border:'none'}} src={props.communityImage} />
        </div>
        <div 
            className='text-white w-full font-medium  flex flex-col items-start    ml-marginLigero '
           >
           <p className='   hover:underline communityName' onClick={() => { 
            localStorage.setItem('cid',props.communityId);
            navigate('/community/'+props.communityId)}}> {props.communityName} </p>
            <p style={{fontSize:'0.7rem'}} className=' '>publicado por <span style={{color:'#ff8c00'}}>{props.publicationUser}</span></p>

            
            </div> 

                
        <div ref={myRef} tabIndex="0" id='postMenu' className='ml-auto'>
                    <Image clase={' postMenuButtons hover:cursor-pointer'} style={{width:'1.5rem'}} onclick={() => dotsMenuVisibility=='none' ? setDotsMenuVisibility('block') : setDotsMenuVisibility('none') } ruta={dotsmenu}/>
                        <div  className=' postMenuButtons  bg-moradoFondo p-2 border-2 border-moradoLight  rounded-lg' id={"a"} style={{ position:'absolute', zIndex:'2', display:dotsMenuVisibility}}>
                            <p onClick={() => {dispatch(assign({block:true,value:<PopUp effect={"close"} title="¡Quieto ahí!" value={"Esta funcionalidad todavía no ha sido implementada"} />}));}} className='postMenuButtons rounded-lg p-1 hover:brightness-150 bg-moradoFondo hover:cursor-pointer '>Denunciar publicación </p>
                            <p onClick={() => dispatch(assign({block:true,value:<PopUp  effect={"close"} title="¡Quieto ahí!" value={"Esta funcionalidad todavía no ha sido implementada"} />}))} className='postMenuButtons rounded-lg p-1 hover:brightness-150 bg-moradoFondo hover:cursor-pointer '>Guardar </p>
                            <p onClick={() => dispatch(assign({block:true,value:<PopUp  effect={"close"} title="¡Quieto ahí!" value={"Esta funcionalidad todavía no ha sido implementada"} />}))} className='postMenuButtons rounded-lg  p-1 hover:brightness-150 bg-moradoFondo hover:cursor-pointer' >No me interesa <span className='text-naranjaMolon'>{props.communityName}</span></p>      
                            {/* <p onClick={()=> dispatch(assign(<div style={{ position:'fixed', top:'0%', bottom:'50%'}} className='  w-full h-full flex justify-center'><SpinnerLoader/></div>))}>TEST</p> */}
                        </div>
                </div>

       
                
              
        
        </div>
        
        :  
        <div className='flex '>
        
        <div ref={myRef} tabIndex="0" id='postMenu' style={{marginLeft:'auto', position:'relative',zIndex:'100'}} className=' ml-auto'>
        
        <Image clase={'hover:cursor-pointer'} style={{width:'1.5rem'}} onclick={() => dotsMenuVisibility=='none' ? setDotsMenuVisibility('block') : setDotsMenuVisibility('none') } ruta={dotsmenu}/>
                        <div    className=' postMenuButtons  bg-moradoFondo p-2 border-2 border-moradoLight  rounded-lg' id={"a"} style={{zIndex:'100', position:'absolute', display:dotsMenuVisibility}}>
                            <p onClick={() => {dispatch(assign(<PopUp title="¡Quieto ahí!" value={"Esta funcionalidad todavía no ha sido implementada"} />));}} className=' rounded-lg p-1 hover:brightness-150 bg-moradoFondo hover:cursor-pointer '>Denunciar publicación </p>
                            <p onClick={() => {dispatch(assign(<PopUp title="¡Quieto ahí!" value={"Esta funcionalidad todavía no ha sido implementada"} />));}} className=' rounded-lg p-1 hover:brightness-150 bg-moradoFondo hover:cursor-pointer '>Guardar </p>
                        </div>
        </div>
</div>
    }


   



        <div style={{}} className='  p-1 h-4/6 flex flex-col justify-center'>
       
        <p style={{fontSize:'1.3rem',}} className='h-2/4 mt-2 '>{props.publicationTitle}</p>
        
        </div>

        </div>
       
        
    )
}