import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import { PostsRequest } from '../../../js/PostsRequest';
import { EditProfile } from "./body/EditProfile";
import { Mensajes } from '../reusable/mensajes/mensajes';
import { UserData } from "./body/UserData";
export const Body = () => {

    const [selected,setSelected] = useState("Publicaciones");


    // const [postsArr,setPostsArr] = useState([]);
    // const [page,setPage] = useState(0);
    // const [isLast,setIslast] = useState(false);
    // const myRef = useRef();

  
    // const handleIntersection = (entries) => {
    //   if (entries[0].isIntersecting && !isLast) {
    //     observer.disconnect();
    //     setPage((prevPage) => prevPage + 1);
    //     PostsRequest(page, null, myRef,setIslast)
    //       .then((response) => {
    //         setPostsArr((prevPosts) => prevPosts.concat(response));

    //       })  
          
    //   } 
    // };
  
    // const observer = new IntersectionObserver(handleIntersection);

    
 



   
// useEffect(  ()=> {

    


//   PostsRequest(page,null,myRef).then(response => {
   
//     setPostsArr(response);
//     setPage(page+1);
 

 
//   })
 
  
// },[])





// useEffect(()=> {



// if(myRef.current!=null){
//   observer.observe(myRef.current);
  
// }
// },[postsArr]);











    return (
        <div className="text-white flex items-center flex-col w-2/4  mt-5 " id='profile-body'>
       {/* <EditProfile/> */}
       <UserData/>
       <Mensajes/>


    <div id="profileUploads" className='mt-4 flex flex-row bg-moradoFondo rounded-lg w-full justify-center' >
        <div onClick={()=>setSelected("Publicaciones")} className= {selected=="Publicaciones" ? " rounded-lg selectedPage pageSelector" :" pageSelector"}>Publicaciones</div>
        <div onClick={()=>setSelected("Comentarios")} className= {selected=="Comentarios" ? " rounded-lg selectedPage pageSelector" :" pageSelector"}>Comentarios</div>
        <div onClick={()=>setSelected("MeGusta")} className= {selected=="MeGusta" ? " rounded-lg selectedPage pageSelector" :" pageSelector"}>Me gusta</div>
        
    </div>


        </div>
    )
}