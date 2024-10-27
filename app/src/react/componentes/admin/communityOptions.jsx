import React from "react";
import { useState,useEffect } from "react";
import { getCommunityOptions } from "../../../js/getCommunityOptions";
export const CommunityOptions = (props) => {
const [options,setOptions] = useState(null)



useEffect(()=>{
    
    getCommunityOptions(props.id).then(response => setOptions(response.data))


},[])



    return (
    options !=null ? 
<div  id='options' className="  rounded-2xl p-2 w-full flex flex-col ">


<h1  className="text-naranjaMolon  text-lg font-bold     p-3 " >Opciones</h1>
<div  className="flex flex-col mt-2 w-full">
<div className="flex ">
<label className="custom-checkbox" >
<input onChange={() => setOptions(prevOptions => ({
    ...prevOptions,
    privateCommunity:!prevOptions.privateCommunity
}))} checked={options.privateCommunity?true:null} type='checkbox'/>
<span class="checkmark"></span>
Comunidad privada
</label>

</div>

<div className="flex mt-2  ">
<label className="custom-checkbox" >
<input onChange={() => setOptions(prevOptions => ({
    ...prevOptions,
    sensitiveContent:!prevOptions.sensitiveContent
}))} checked={options.sensitiveContent?'checked':null} type='checkbox'/>
<span class="checkmark"></span>
Contenido sensible
</label>
</div>







</div>
<div className="flex mt-2 ">
<label className="custom-checkbox" >
<input onChange={() => setOptions(prevOptions => ({
    ...prevOptions,
    blockNewSubscriptions:!prevOptions.blockNewSubscriptions
}))} checked={options.blockNewSubscriptions?'checked':null} type='checkbox'/>
<span  class="checkmark"></span>
Suscripciones bloqueadas
</label>



</div>
<div className="flex mt-2 ">
<label className="custom-checkbox" >
<input onChange={() => setOptions(prevOptions => ({
    ...prevOptions,
    adminMode:!prevOptions.adminMode
}))} checked={options.adminMode?'adminMode':null} type='checkbox'/>
<span class="checkmark"></span>
Modo administrador
</label>
</div>
</div>

:
<p>a</p>
    )

}