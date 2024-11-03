import React from "react";
import inprogress from "../../../assets/img/inprogress.png";

export const Reports = () => {

    return (
        <div className='mt-3 flex flex-col items-center'>
            <p className='text-2xl Kanit text-naranjaMolon'>Esta funcionalidad todavía no ha sido implementada</p>
            <img className='h-2/4' src={inprogress}></img>
        </div>
    )

}