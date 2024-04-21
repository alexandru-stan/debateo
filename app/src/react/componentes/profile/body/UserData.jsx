import React, { useState } from "react";


export const UserData = () => {
  const user = JSON.parse(sessionStorage.getItem('user'));
  return (
    <div id='userData' className='bg-moradoFondo w-full p-4 rounded-lg '>
      <div className=' p-2 mb-4 rounded-t-lg'>
        <h2 className="text-naranjaMolon text-lg font-bold text-center">Datos de usuario</h2>
      </div>
      <div className='grid grid-cols-2 gap-4 mb-4'>
        <div className=" p-2 border-2 border-naranjaMolon p-2 rounded-lg">
          <p className="text-naranjaMolon  font-semibold ">Nombre de usuario:</p>
          <p>{user.username}</p>
        </div>
        <div className=" p-2 border-2 border-naranjaMolon p-2 rounded-lg">
          <p className="text-naranjaMolon font-semibold">Nombre:</p>
          <p>{user.name}</p>
        </div>
      </div>
      <div className='grid grid-cols-2 gap-4 mb-4'>
        <div className=" p-2 border-2 border-naranjaMolon rounded-lg">
          <p className="text-naranjaMolon font-semibold">Correo:</p>
          <p>{user.mail}</p>
        </div>
        <div className=" p-2 border-2 border-naranjaMolon rounded-lg">
          <p className="text-naranjaMolon font-semibold">Fecha de nacimiento:</p>
          <p>{user.birth_date}</p>
        </div>
      </div>
  
    </div>
  );
};
