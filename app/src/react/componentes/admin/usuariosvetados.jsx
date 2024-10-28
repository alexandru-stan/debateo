import React, { useEffect, useState } from "react";
import { getBannedUsers } from "../../../js/getBannedUsers";
import { useDispatch,useSelector } from "react-redux";
import { assign } from "../../../redux-store/slices/PopUp";
import { VetoMenu } from "./subcomponents/vetoMenu";
import { unban } from "../../../js/unBan";
export const    UsuariosVetados = (props) => {

    const [bannedUsers,setBannedUsers] = useState(null);
    const [selected,setSelected] = useState([]);
    const popUp = useSelector(state => state.popUp.value);
    const dispatch = useDispatch();

    useEffect(()=>{

        getBannedUsers(props.id).then(response => {
         
            setBannedUsers([...response.data])

        })

      

    },[])


    useEffect(()=>{

        console.log(selected);

    },
    
    [selected])



    return (
<div id='banned' className=" rounded-2xl p-2 w-full flex flex-col items-center border-1  border-moradoLight">

<div id='bannedHeader' className='flex flex-row w-full border-b-2 p-2 w-full  items-center border-naranjaMolon'>
<h1  className="text-naranjaMolon  text-lg font-bold     p-2" >Usuarios vetados</h1>
{selected.length>0 ? <button onClick={ ()=>{
    unban(selected,props.id)
    setBannedUsers(prev => prev.filter(e => !selected.includes(e)));
    setSelected(prev => prev.filter(e => !selected.includes(e)));

}}  className=" hover:bg-moradoLight ml-auto   rounded-md p-1  w-2/6 border-2 border-moradoLight bg-moradoFondo placeholder-gray-400  placeholder-gray-400 ">Eliminar veto</button> : null}

<button onClick={()=>{dispatch(assign(<VetoMenu setBanned  = {setBannedUsers} id={props.id} />))}} className=" hover:bg-moradoLight ml-auto   rounded-md p-1  w-2/6 border-2 border-moradoLight bg-moradoFondo placeholder-gray-400  placeholder-gray-400 ">Vetar usuario</button>

</div>
<div  className="flex flex-col w-full p-2">
{bannedUsers != null ? 

bannedUsers.map((item)=>{
   return  (
   <div className='flex mt-2 ' key={item}>
   {/* <p style={{ }} className='text-naranjaMolon text-center Kanit font-bold'>{index++}</p> */}
   <label className='custom-checkbox text-lg ' onChange={(event)=>{

    event.target.checked == true
    ?
        setSelected(prevSelected => [...prevSelected,item])
       
    :
        setSelected(prevSelected => prevSelected.filter(e => e!=item));

        console.log(selected);

    }} for={item}>
   <input id={item} className='cursor-pointer' style={{verticalAlign:'middle'}} type="checkbox"/>
   <span  className='checkmark'></span>
   {item}
   </label>


   </div>)
})


: <p>jeje cargando</p>}

</div>


</div>
    )

}