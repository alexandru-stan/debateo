import React, { useEffect } from 'react';
import Image from "../reusable/img";
import thumbsUp from "../../../assets/img/thumbsUp.png"
import thumbsDown from "../../../assets/img/thumbsDown.png"
import reply from "../../../assets/img/reply.png"
import seeReplies from "../../../assets/img/seeReplies.png"
import { borderRadius } from '@mui/system';
import { backdropClasses } from '@mui/material';
import { useState } from 'react';
import { sendReply } from '../../../js/sendReply';
import { Reply } from './reply';
import { getReplies } from '../../../js/getReplies';
import { formatearTimestamps } from '../../../js/formatearTimestamps';
import { formatImage } from '../../../js/imageFormatting';
import { useSelector } from 'react-redux';
import { refreshProfileImage } from '../../../js/RefreshProfileImage';

const $ = require('jquery')

export const Comment = (props)=> {
 let fechaBBDD = props.commentDate==0 ? "Ahora mismo" : new Date(props.commentDate);
 let fechaFinal = formatearTimestamps(fechaBBDD);
const user = JSON.parse(localStorage.getItem("user"));
  console.log(props.commentText+"  "+typeof props.profileImage);
  const [profileImage,setProfileImage] = useState(null)
  const [visibility,setVisibility] = useState('hidden');
  const [input,setInput] = useState(null);
  const [replies,setReplies] = useState([]);
  const [replyVisibility,setReplyVisibility] = useState(false);
  const [actualReply, setActualReply] = useState([]);
  const [image,setImage] = useState(props.profileImage);



  useEffect(() => {

   
    replyVisibility && replies.length==0 ? 
    
    
    (async () => {
      
      const fetchedReplies = await getReplies(props.id);
      setReplies(fetchedReplies);
      setActualReply([]);
    
    
    
    })()
    
    



    : null


  },[replyVisibility]);




//   function formatTiempoPasado(diferencia, unidadEnSegundos, singular, plural) {
//     let tiempoPasado = Math.trunc(diferencia / unidadEnSegundos);
//     return "Hace " + tiempoPasado + (tiempoPasado > 1 ? " " + plural : " " + singular);
// }

// switch (true) {
//     case (props.commentDate == 0):
//         fechaFinal = "Ahora mismo";
//         break;
//     case (diferencia > 31536000): // 60*60*24*365
//         fechaFinal = formatTiempoPasado(diferencia, 60 * 60 * 24 * 365, "año", "años");
//         break;
//     case (diferencia > 2592000): // 60*60*24*30
//         fechaFinal = formatTiempoPasado(diferencia, 60 * 60 * 24 * 30, "mes", "meses");
//         break;
//     case (diferencia >= 604800): // 60*60*24*7
//         fechaFinal = formatTiempoPasado(diferencia, 60 * 60 * 24 * 7, "semana", "semanas");
//         break;
//     case (diferencia >= 86400): // 60*60*24
//         fechaFinal = formatTiempoPasado(diferencia, 60 * 60 * 24, "día", "días");
//         break;
//     case (diferencia >= 3600): // 60*60
//         fechaFinal = formatTiempoPasado(diferencia, 60 * 60, "hora", "horas");
//         break;
//     case (diferencia >= 60): // 60
//         fechaFinal = formatTiempoPasado(diferencia, 60, "minuto", "minutos");
//         break;
//     case (diferencia < 60 && diferencia > 1):
//         fechaFinal = "Hace " + diferencia + " segundos";
//         break;
//     default:
//         fechaFinal = "Ahora mismo";
//         break;
// }

return (
    <div style={{overflowWrap:'break-word', marginBottom:'3%'}} className='comment backdrop-brightness-125  w-2/6 mt-2 rounded-md p-2'>
    <div style={{fontSize:'1rem'}} className="flex p-2 flex-row justify-between">
      {/* <img src={formatImage(props.profileImageFile)}></img> */}
      <div className='flex flex-row items-center'>
      
      {props.profileImage!=null ? <img className='' style={{width:'30px', height:'30px', borderRadius:'100%'}} src={ formatImage(props.profileImage)}  /> : null}
      <h5 style={{marginLeft:'0.5rem'}} className="text-naranjaMolon">{props.username}</h5>

      </div>
      <h5>{fechaFinal}</h5>
    </div>
        <div style={{whiteSpace:'pre-wrap'}} className='  comment-text p-2'>{props.commentText}</div>
      <div style={{height:'3rem',borderTop:'1px solid #444073'}} className='p-1  mt-2 w-full flex flex-row items-center'>
        {/* <p style={{marginRight:'10px',fontSize:'1.5rem'}} className='font-bold  text-naranjaMolon  '>0</p>
        <Image style={{marginRight:'10px' ,  borderRadius:'50%'}} clase='h-full  hover:bg-moradoLight p-1 cursor-pointer' ruta={thumbsUp}/>
        <Image  style={{marginRight:'10px' ,  borderRadius:'50%'}} clase='h-full hover:bg-moradoLight p-1 cursor-pointer' ruta={thumbsDown}/> */}
        <Image onclick = {()=>{
          setVisibility('block')
        }} style={{ borderRadius:'50%'}} clase='h-full p-1 hover:bg-moradoLight cursor-pointer' ruta={reply}/>
      </div>
      <div  className={visibility}>
        <input value={input} id={'replyTo'+props.id} type='text' placeholder='Añade una respuesta...' className=' reply bg-transparent w-full border-b-2 border-slate-50 '></input>
        <div  className='flex flex-row justify-end'>
        <p onClick={()=> setVisibility('hidden')} className=' font-bold text-naranjaMolon rounded-3xl mt-2 p-2 hover:cursor-pointer hover:bg-moradoLight '>Cancelar</p>
        <p onClick={()=> {
          
          
            let reply = {
              
              commentId:props.id,
              username: JSON.parse(localStorage.getItem("user")).username,
              replyText: $('#replyTo'+props.id).val()

            }

            $('#replyTo'+props.id).val(null);
            setVisibility('hidden')

            sendReply(reply);
            setActualReply([...actualReply,<Reply username={reply.username} replyText = {reply.replyText} replyDate={1234} />])


        } }  className=' font-bold text-naranjaMolon p-2 mt-2 rounded-3xl hover:cursor-pointer hover:bg-moradoLight'>Responder</p>
        </div>

      </div>
      {props.replies > 0 ? <div className=' flex flex-col'>
      <div onClick={() => replyVisibility ?  setReplyVisibility(false) : setReplyVisibility(true) } className='p-2 cursor-pointer  w-full flex flex-row items-center '>
        <Image ruta={seeReplies} style={{width:'1rem', marginRight:'5px'}}/>
        <p className='  text-naranjaMolon underline' style={{fontSize:'0.8rem'}}>{props.replies > 1 ? props.replies + " respuestas" : props.replies+" respuesta"}</p>
        
      
      </div> 
      <div>
     {replyVisibility ?  replies : null}
     
     </div>
      </div>
      
      
      : null }
      {actualReply}
  
      
    </div>
);

}
