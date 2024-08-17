import React from "react";
import Logo from "../../reusable/img";
import profileImg from "../../../../assets/img/stockProfileImage.jpg"
import calendarIcon from "../../../../assets/img/registerDate.png"
import cakeIcon from "../../../../assets/img/birthDate.png"

export const UserData = () =>  {

    const user = JSON.parse(sessionStorage.getItem('user'));
    const date = new Date(user.birth_date);
    const formatter = new Intl.DateTimeFormat('es', { month: 'long' });
    const mes = formatter.format(date)
    console.log(user.birth_date);
    console.log(date);
    return (
        <div id='userData
        ' className='w-full'>
        <div className="w-full flex  items-center p-3 text-center  ">
            <img style={{width:'100px',height:'100px'}} className=" rounded-full" src={user.profileImageFile}></img>
            <p className="ml-auto bg-moradoFondo text-naranjaMolon font-semibold hover:bg-moradoLight hover:cursor-pointer border-2 border-moradoLight py-2 px-4 rounded-lg ">Editar perfil</p>
        </div>
        <div  className="p-3 ">
            <p className="text-bold Kanit text-3xl text-naranjaMolon">{user.username}</p>
            <p className="text-gray-400 ">{user.username}</p>
        </div>

        <div style={{paddingLeft:'0.75rem'}} className=" flex ">
        
        <div className="flex items-center">
        <img style={{width:'1rem', marginRight:'1rem'}} src={cakeIcon}/>
        <p className=" text-gray-400 ">Fecha de nacimiento: {date.getDate()} de {mes} de {date.getFullYear()} </p>
        </div>
        {/* <div style={{marginLeft:'2%'}} className="flex items-center">
        <img style={{width:'1rem', marginRight:'1rem'}} src={calendarIcon}/>
        <p className="text-gray-400"> Se unió en {mes} de {date.getFullYear()} </p>
        </div> */}
        </div>
        </div>
    )
}