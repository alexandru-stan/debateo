import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { getMods } from "../../../js/getMods";
import Logo from "../reusable/img";
import remove from "../../../assets/img/remove.png"
const $ = require('jquery');
export const Mods = (props) => {

const [mods,setMods] = useState([]);



useEffect(()=>{

    getMods(props.id).then(r => {
        let tempArr = []
        r.data.forEach(e => tempArr.push(<div className="mod mt-2 p-2 flex"><p  className="    text-lg text-bold">{e}</p> <Logo id={'mod-'+e} ruta={remove} clase={"hover:cursor-pointer"} style={{width:'20px',  marginLeft:'auto'}} /> </div>));
        setMods(tempArr);
       
    })

},[])



    return (
<div id='mods' className=" bg-moradoFondo rounded-2xl p-2 w-1/6 flex flex-col items-center">


       <h1  className="  text-naranjaMolon text-2xl font-bold border-b-2 w-full text-center border-naranjaMolon " >Moderadores</h1>
       <div  className="flex flex-col w-full">
       {mods}
       </div>
   

</div>
    )


}