import React from "react";


export const NewsCard = (props) => {
    return (
        <div onClick={() => window.open(props.enlace, '_blank')} className=" hover:cursor-pointer hover:backdrop-brightness-125 w-full   border-b-2 border-moradoLight flex-col  align-center   max-h-2/6 p-2">
        
     
        <div className="mt-2 flex w-2/4 justify-center  max-h-2/6 m-1 w-full text-center ">
            <img style={{width:'100%'}} className="  " src={props.imagen}></img>
        </div>
        <div className=" Kanit text-naranjaMolon font-bold mt-2 text-center max-h-2/6 w-full ">{props.titular}</div>
        

        <div className="mt-3 max-h-2/6 text-center ">{props.cuerpo}</div>
        </div>  
    )
}