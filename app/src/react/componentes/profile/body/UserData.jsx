import React, { useState } from "react";
import Image from "../../reusable/img";
import editar from "../../../../assets/img/editar.png";
import { useEffect } from "react";
export const UserData = () => {
  const user = JSON.parse(sessionStorage.getItem('user'));
  const [edit,setEdit] = useState({
    username:false,
    name:false,
    mail:false,
    birthDate:false
  });
  const [showEditButtons, setShowEditButtons] = useState(false);

console.log(edit.username);






  return (
    <div id='userData' className='bg-moradoFondo w-3/6 p-4 rounded-lg '>
      <div className=' p-2 mb-4 rounded-t-lg'>
        <h2 className="text-naranjaMolon text-lg font-bold text-center">Datos de usuario</h2>
        
      </div>
     
        <div className=" p-2 border-b-2 border-naranjaMolon  rounded-lg">
          <p style={{fontSize:'0.8rem'}} className="text-naranjaMolon Kanit p-1  font-semibold ">Nombre de usuario:</p>
          <div className=" flex items-center">
          {edit.username ? 
          <input autoFocus  style={{fontSize:'1.2rem'}} defaultValue={user.username}  className="p-1 bg-moradoLight w-full"></input>
          :
          <p style={{fontSize:'1.2rem'}} className="p-1">{user.username}</p>
          }
          {showEditButtons ? 
          null:
          
          <Image onclick={ ()=> {
            setEdit({...edit,username:true});
            setShowEditButtons(true);
            } } clase={'hover:cursor-pointer '} style={{width:'30px',marginLeft:'auto'}} ruta={editar}/>
          
          }
          </div>
        </div>
        <div className=" p-2 border-b-2 border-naranjaMolon p-2 rounded-lg">
          <p style={{fontSize:'0.8rem'}} className="text-naranjaMolon p-1 Kanit font-semibold ">Nombre:</p>
          <div className=" flex items-center">
          {edit.name?
          <input autoFocus  style={{fontSize:'1.2rem'}} defaultValue={user.name}  className="p-1 bg-moradoLight w-full"></input>
          :
          <p style={{fontSize:'1.2rem'}} className="p-1">{user.name}</p>
          }
          {showEditButtons ? 
            null:
          <Image
          onclick={()=>{
            setEdit({...edit,name:true});
            setShowEditButtons(true);
          }}
          
            clase={'hover:cursor-pointer '} style={{width:'30px',marginLeft:'auto'}} ruta={editar}/>
          }
          </div>
        </div>
   
      
        <div className=" p-2 border-b-2 border-naranjaMolon rounded-lg">
          <p style={{fontSize:'0.8rem'}} className="text-naranjaMolon Kanit p-1 font-semibold ">Correo:</p>
          <div className=" flex items-center">
          {edit.mail?
          <input autoFocus  style={{fontSize:'1.2rem'}} defaultValue={user.mail}  className="p-1 bg-moradoLight w-full"></input>
          :
          <p style={{fontSize:'1.2rem'}} className="p-1">{user.mail}</p>
          }
          {showEditButtons ? 
            null:
          <Image onclick={()=>{
            setEdit({...edit,mail:true});
            setShowEditButtons(true);
          }} clase={'hover:cursor-pointer '} style={{width:'30px',marginLeft:'auto'}} ruta={editar}/>
          }
          </div>
          
        </div>
        <div className=" p-2 border-b-2 border-naranjaMolon rounded-lg">
          <p style={{fontSize:'0.8rem'}} className="text-naranjaMolon Kanit p-1  font-semibold ">Fecha de nacimiento:</p>
          <div className=" flex items-center">
          {edit.birthDate?
          <input autoFocus  style={{fontSize:'1.2rem'}} defaultValue={user.birth_date}  className="p-1 bg-moradoLight w-full"></input>
          :
          <p style={{fontSize:'1.2rem'}} className="p-1">{user.birth_date}</p>
          }
          {showEditButtons ? 
            null:
          <Image onclick={()=>{
            setEdit({...edit,birthDate:true});
            setShowEditButtons(true);
          }} clase={'hover:cursor-pointer '} style={{width:'30px',marginLeft:'auto'}} ruta={editar}/>    }
                </div>
        </div>
    
    


{showEditButtons ? 
  <div id="editProfileButtons" className=" mt-5 flex justify-around">
  <button className=" w-2/6 hover:bg-moradoLight Kanit rounded-md p-2  border-2 border-naranjaMolon bg-moradoFondo placeholder-gray-400  placeholder-gray-400 ">Confirmar</button>  
  <button onClick={()=> {
    for(let e in edit){
     if(edit[e]) {
        setEdit({...edit, [e]:false})
        setShowEditButtons(false);

     }
    }
  }} className=" w-2/6 hover:bg-moradoLight Kanit rounded-md p-2  border-2 border-naranjaMolon bg-moradoFondo placeholder-gray-400  placeholder-gray-400 ">Cancelar</button>
  </div>
   : null}

    
  
    </div>
  );
};
