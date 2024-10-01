import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { assign } from "../../../../redux-store/slices/PopUp";
export const PopUp = (props) => {
    const popUpVal = useSelector(state => state.popUp.value);
    const dispatch = useDispatch();

    return (
        
        <div  className=' justify-center w-full h-full   flex flex-col items-center  ' style={{  position:'fixed', top:'0%', bottom:'0%',zIndex:'3' }}  >
       <div id='popUp' className="bg-moradoFondo flex flex-col justify-center items-center w-2/6" style={{border:'10px solid #35325c ', borderRadius:'5%'}}>
       <p style={{fontSize:'2.5rem'}} className="p-1 text-center   text-naranjaMolon Kanit font-bold ">{props.title}</p>
       <p style={{overflowWrap:'break-word',overflow:'auto'}} className=" p-1 text-center   Kanit  ">{props.value}</p>
  
       <button 
        className="bg-moradoLight  w-1/4 mt-3  font-bold py-2 px-4 rounded hover:bg-naranjaMolon Kanit" 
        style={{ border: '2px solid #35325c', borderRadius: '5%' }}
        onClick={()=>{dispatch(assign(null))}}>
        
        Ok
    </button>

</div>

        </div>
    )

}