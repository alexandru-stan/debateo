import React from "react";

export const CommunityOptions = () => {

    return (
<div  id='options' className=" bg-moradoFondo rounded-2xl p-2 w-2/6 flex flex-col items-center">


<h1  className="text-naranjaMolon text-2xl font-bold border-b-2 w-full text-center border-naranjaMolon " >Opciones</h1>
<div  className="flex flex-col w-full">
<div className="flex ">
<label className="custom-checkbox" >
<input type='checkbox'/>
<span class="checkmark"></span>
Comunidad privada
</label>

</div>

<div className="flex ">
<label className="custom-checkbox" >
<input type='checkbox'/>
<span class="checkmark"></span>
Contenido sensible
</label>
</div>

</div>


</div>
    )

}