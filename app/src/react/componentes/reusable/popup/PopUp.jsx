import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { assign } from "../../../../redux-store/slices/PopUp";
export const PopUp = () => {

    const popUpVal = useSelector(state => state.popUp.value);
    const dispatch = useDispatch();
    return (
        
        <div className='bg-moradoFondo  flex flex-col items-center p-5 ' style={{ border:'10px solid #35325c ', borderRadius:'5%', position:'fixed', top:'35%', height:'30%', width:'30%',left:'35%', zIndex:'3' }}  >
       
       <p style={{fontSize:'2.5rem'}} className="p-1 text-center  text-naranjaMolon Kanit font-bold ">¡Quieto ahí!</p>
       <p className=" p-1 text-center   Kanit  ">{popUpVal}</p>
  
       <button 
        className="bg-moradoLight  w-1/4 mt-3  font-bold py-2 px-4 rounded hover:bg-naranjaMolon Kanit" 
        style={{ border: '2px solid #35325c', borderRadius: '5%' }}
        onClick={()=>{dispatch(assign(null))}}>
        Ok
    </button>
        </div>
    )

}