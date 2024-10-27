import React from "react";
import { assign } from "../../../../redux-store/slices/PopUp";
import { useDispatch,useSelector } from "react-redux";
import { useState } from "react";
import { searchUsers } from "../../../../js/searchUsers";
import { BanUsers } from "../../../../js/BanUsers";

export const VetoMenu = (props) => {


    function selectUnselect(value){

        selected.includes(value) ?
        
        setSelected(prev => prev.filter(e => e!=value))

        :

        setSelected(prev => [...prev,value]);


    }



    const popUp = useSelector(state => state.popUp.value);
    const dispatch = useDispatch();
    const [resultados,setResultados] = useState([]);
    const [selected,setSelected] = useState([]);
    const user = JSON.parse(sessionStorage.getItem('user')).username;
    
    function search(event) {
    if(event.target.value.length!=0){
        // clearTimeout(timerId);
        // timerId = setTimeout(()=>{
        searchUsers(event.target.value,user).then(response => {
           
            setResultados(response.data)});
        
        // },300)
        
    } else {
        setResultados([]);
    }

    }


   
    return(
        <div style={{top:'0%',bottom:'0%'}} className=" w-full flex justify-center items-center   fixed">
            <div className=" bg-moradoFondo  h-2/4 w-2/4 p-5 flex flex-col items-center">
                <p className='Kanit font-bold text-lg  text-naranjaMolon'>¿A qué usuario deseas vetar?</p>
                <p>{selected.length} usuarios seleccionados</p>

                <div style={{height:'3rem'}} className='border-1 mt-2 text-md rounded-2xl w-full   border-moradoLight'>
                <input onChange={search} placeholder="&#128269; Buscar..." id='searchUserVetoMenu'
                className="  "
                style={{
            background: 'inherit',
            color: 'inherit',
            font: 'inherit',
            lineHeight: 'inherit',
            padding: '2%',
            margin: 0,
            border:'inherit',
            borderRadius:'inherit',
            height:'inherit',
            width:'inherit'
           
            
            
        }} type="text" />

</div>

<div className="w-full flex flex-col mt-3 Kanit text-lg items-start overflow-y-auto">
    {resultados.map(e => {
        let check = selected.includes(e);
      return   <p  onClick={()=>selectUnselect(e)} className={"mt-2 p-2 w-full Kanit hover:text-naranjaMolon hover:cursor-pointer hover:bg-moradoLight "} >{check ? e + "  ✓":e}</p>
    })}
</div>

<div className="mt-auto flex justify-end w-full">
{selected.length>0 ?<button onClick={()=> BanUsers(selected,props.id) } className=" hover:bg-moradoLight    rounded-md p-1  w-1/6 border-2 border-moradoLight bg-moradoFondo placeholder-gray-400  placeholder-gray-400 ">Vetar</button>
:null }
<button onClick={()=> dispatch(assign(null))} className=" hover:bg-moradoLight    rounded-md p-1  w-1/6 border-2 border-moradoLight bg-moradoFondo placeholder-gray-400  placeholder-gray-400 ">Cancelar</button>

</div>


            </div>
        </div>
    )
}