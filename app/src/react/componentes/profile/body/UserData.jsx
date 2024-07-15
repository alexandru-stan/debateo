import React, { useState } from "react";
import Image from "../../reusable/img";
import editar from "../../../../assets/img/editar.png";
import { useEffect,useRef } from "react";
import { updateUser } from "../../../../js/updateUser";
export const UserData = () => {
  const user = JSON.parse(sessionStorage.getItem('user'));
  const [edit,setEdit] = useState({
    username:false,
    name:false,
    mail:false,
    birthDate:false
  });
  const [showEditButtons, setShowEditButtons] = useState(false);
  const [username, setUsername] = useState(JSON.parse(sessionStorage.getItem('user')).username);
  const [name, setName] = useState(JSON.parse(sessionStorage.getItem('user')).name);
  const [mail, setMail] = useState(JSON.parse(sessionStorage.getItem('user')).mail);
  const [birthDate, setBirthDate] = useState(JSON.parse(sessionStorage.getItem('user')).birth_date);
  const $ = require("jquery");






  return (
    <div id='userData' className='bg-moradoFondo w-3/6 p-4 rounded-lg '>
      <div className=' p-2 mb-4 rounded-t-lg'>
        <h2 className="text-naranjaMolon text-lg font-bold text-center">Datos de usuario</h2>
        
      </div>
     
        <div className=" p-2 border-b-2 border-naranjaMolon  rounded-lg">
          <p style={{fontSize:'0.8rem'}} className="text-naranjaMolon Kanit p-1  font-semibold ">Nombre de usuario:</p>
          <div className=" flex items-center">
          {edit.username ? 
          <input onChange={(event)=> setUsername(event.target.value)} autoFocus id='editUsername'  style={{fontSize:'1.2rem'}} defaultValue={username}  className="p-1 bg-moradoLight w-full"></input>
          :
          <p style={{fontSize:'1.2rem'}} className="p-1">{username}</p>
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
          <input onChange={(event)=> setName(event.target.value)} autoFocus id='editName'  style={{fontSize:'1.2rem'}} defaultValue={name}  className="p-1 bg-moradoLight w-full"></input>
          :
          <p style={{fontSize:'1.2rem'}} className="p-1">{name}</p>
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
          <input onChange={(event)=> setMail(event.target.value)} autoFocus id='editMail'   style={{fontSize:'1.2rem'}} defaultValue={mail}  className="p-1 bg-moradoLight w-full"></input>
          :
          <p style={{fontSize:'1.2rem'}} className="p-1">{mail}</p>
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
          <input onChange={(event)=> setBirthDate(event.target.value)}  autoFocus id='editBirthDate'  style={{fontSize:'1.2rem'}} defaultValue={birthDate}  className="p-1 bg-moradoLight w-full"></input>
          :
          <p style={{fontSize:'1.2rem'}} className="p-1">{birthDate}</p>
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
  <button onClick={()=> {
    for(let e in edit){
     if(edit[e]) {
        
        setEdit({...edit, [e]:false})
        setShowEditButtons(false);
      

     }
    }

    sessionStorage.setItem('user', JSON.stringify({
          username: username,
          name: name,
          mail: mail,
          birth_date: birthDate
        }));

    updateUser({
          username: username,
          name: name,
          mail: mail,
          birthDate: birthDate
        }, user.username);


  }} className=" w-2/6 hover:bg-moradoLight Kanit rounded-md p-2  border-2 border-naranjaMolon bg-moradoFondo placeholder-gray-400  placeholder-gray-400 ">Confirmar</button>  
  
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
