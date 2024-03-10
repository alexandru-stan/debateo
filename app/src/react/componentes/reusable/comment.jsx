import React from 'react';

export const Comment = (props)=> {
 let fechaBBDD = new Date(props.commentDate);
 let fechaFinal;

  let currentDate = new Date();
  let diferencia = Math.trunc((currentDate - fechaBBDD) / (1000));

 

  

  switch(true){

    case(props.commentDate==0):
      fechaFinal = "Ahora mismo";
      break;
    case(diferencia>2592000):
      fechaFinal = "Hace "+ Math.trunc(diferencia/(60*60*24*7*4))+" meses";
      break;
    case(diferencia>=604800):
      fechaFinal = "Hace "+Math.trunc(diferencia/(60*60*24*7))+" semanas"; 
      break;
    case(diferencia>=86400):
      fechaFinal = "Hace "+Math.trunc(diferencia/(60*60*24))+" día";
      break;
    case (diferencia>=3600):
      fechaFinal = "Hace "+Math.trunc(diferencia/(60*60))+" horas";
      break;
    case (diferencia>=60):
      fechaFinal = "Hace "+Math.trunc((diferencia/(60))) + " minutos"; 
      break;
    case (diferencia<60):
      fechaFinal= "Hace "+diferencia+" segundos";
      break;
    default:
      fechaFinal = "Ahora mismo";
      break;
    }
  


return (
    <div className='comment backdrop-brightness-125 w-2/4 mt-2 rounded-md p-2'>
    <div className="flex flex-row justify-between">
      <h5 className="text-naranjaMolon">{props.username}</h5>
      <h5>{fechaFinal}</h5>
    </div>
        <span className='comment-text'>{props.commentText}</span>
    </div>
);

}
