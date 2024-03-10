import React from 'react';

 export const Input = (props) => {

    return(

        <label  htmlFor={props.label}>
            <input id={props.id} placeholder={props.placeholder} className='   rounded-md text-white backdrop-brightness-125 placeholder-gray-400 bg-moradoOscuro border-b-2 border-gray-300 focus:outline-none focus:border-naranjaMolon text-gray-700 py-2 pl-2 pr-8 transition-all duration-300'></input>
        </label>

    );

}