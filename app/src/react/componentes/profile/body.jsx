import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import { PostsRequest } from '../../../js/PostsRequest';
import { EditProfile } from "./body/EditProfile";
import { Mensajes } from '../reusable/mensajes/mensajes';
import { UserData } from "./body/UserData";
import { UserPosts } from "./body/Views/UserPosts";
export const Body = () => {

    const [selected,setSelected] = useState("Publicaciones");














    return (
        <div className="text-white flex items-center flex-col w-full  mt-5 " id='profile-body'>
       {/* <EditProfile/> */}
       <UserData/>
       <Mensajes/>


    <div id="profileUploads" className='mt-4 flex flex-row bg-moradoFondo rounded-lg w-2/4 justify-center' >
        <div onClick={()=>setSelected("Publicaciones")} className= {selected=="Publicaciones" ? " rounded-lg selectedPage pageSelector" :" pageSelector"}>Publicaciones</div>
        <div onClick={()=>setSelected("Comentarios")} className= {selected=="Comentarios" ? " rounded-lg selectedPage pageSelector" :" pageSelector"}>Comentarios</div>
        <div onClick={()=>setSelected("MeGusta")} className= {selected=="MeGusta" ? " rounded-lg selectedPage pageSelector" :" pageSelector"}>Me gusta</div>
        
    </div>

        <div className="w-full flex flex-col justify-center ">
          <UserPosts visibility={selected=="Publicaciones" ? true : false}/>
        </div>


        </div>
    )
}