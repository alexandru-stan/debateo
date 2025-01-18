import React from "react";
import { useState,useEffect } from "react";
import { getCommunityOptions } from "../../../js/getCommunityOptions";
import { updateCommunityOptions } from "../../../js/updateCommunityOptions";
export const CommunityOptions = (props) => {
const [options,setOptions] = useState(null)
const [editting, setEditting] = useState(false);

useEffect(()=>{
    console.log(options);
}
    ,[options])


useEffect(()=>{
    
    getCommunityOptions(props.id).then(response => setOptions(response.data))


},[])



    return (
    options !=null ? 
<>
<div  id='options' className="  rounded-2xl p-2 w-full flex flex-col ">


<h1  className="text-naranjaMolon  text-lg font-bold     p-3 " >Opciones</h1>
<div  className="flex flex-col mt-2 w-full">
<div className="flex ">
<label className="custom-checkbox" >
<input onChange={() => 
{
setEditting(true);
setOptions(prevOptions => ({
    ...prevOptions,
    privateCommunity:!prevOptions.privateCommunity
}))

}
} checked={options.privateCommunity} type='checkbox'/>
<span className="checkmark"></span>
Comunidad privada
</label>

</div>

<div className="flex mt-2  ">
<label className="custom-checkbox" >
<input onChange={() =>
{
setEditting(true);
setOptions(prevOptions => ({
    ...prevOptions,
    sensitiveContent:!prevOptions.sensitiveContent


}))

}


}checked={options.sensitiveContent} type='checkbox'/>
<span className="checkmark"></span>
Contenido sensible
</label>
</div>







</div>
<div className="flex mt-2 ">
<label className="custom-checkbox" >
<input onChange={() => 
{
setEditting(true);
setOptions(prevOptions => ({
    ...prevOptions,
    blockNewSubscriptions:!prevOptions.blockNewSubscriptions
}))

}

} checked={options.blockNewSubscriptions} type='checkbox'/>
<span  className="checkmark"></span>
Suscripciones bloqueadas
</label>



</div>
<div className="flex mt-2 ">
<label className="custom-checkbox" >
<input onChange={() => 

{
setEditting(true);
setOptions(prevOptions => ({
    ...prevOptions,
    adminMode:!prevOptions.adminMode
}))

}

} checked={options.adminMode} type='checkbox'/>
<span className="checkmark"></span>
Modo administrador
</label>
</div>


</div>
{editting ?
    <div className="w-full flex justify-around mt-5">
<button onClick={()=> {
    setEditting(false);
    updateCommunityOptions(options)
    }} className=" hover:bg-moradoLight  rounded-md p-1  w-2/6 border-2 border-moradoLight bg-moradoFondo placeholder-gray-400  placeholder-gray-400 ">Guardar cambios</button>
<button onClick={()=> { 
    setEditting(false);
    getCommunityOptions(props.id).then(response => setOptions(response.data))}} className=" hover:bg-moradoLight   rounded-md p-1  w-2/6 border-2 border-moradoLight bg-moradoFondo placeholder-gray-400  placeholder-gray-400 ">Cancelar</button>
</div>
:null }

</>
:
null



   
)

}