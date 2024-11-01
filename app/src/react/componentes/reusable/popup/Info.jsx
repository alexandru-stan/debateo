import React from "react";


export  const Info = (props) => {

    return (

        <div style={{bottom:'0%', right:'0%', zIndex:'3', backgroundColor: props.success ? '#265500' : '#C82E13'}} className=" flex min-w-2/6 fixed p-3 rounded-2xl text-md     ">
            <p style={{marginRight:'10px'}} className=''>{props.success ? '✓' : '❌'}</p>
            <p className='Kanit'>{props.message}</p>
        </div>



    )

}
