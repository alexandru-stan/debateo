import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import { PostsRequest } from '../../../js/PostsRequest';
import { EditProfile } from "./body/EditProfile";
import { Mensajes } from '../reusable/mensajes/mensajes';
import { UserData } from "./body/UserData";
import { UserPosts } from "./body/Views/UserPosts";
import { UserComments } from "./body/Views/UserComments";
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
        <div onClick={()=>{ alert("To be implemented") }} className= {selected=="MeGusta" ? "  pageSelector" :" pageSelector"}>Me gusta</div>
        
    </div>

        <div className="w-full flex flex-col items-center justify-center ">
          <UserPosts visibility={selected=="Publicaciones" ? true : false}/>
          <UserComments visibility = {selected=="Comments" ? true : false}/>
        </div>


        </div>
    )
}