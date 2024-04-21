export default function formatearFecha(fechaMensaje){
    let fechaActual = new Date();
    let fecha = fechaMensaje.toLocaleDateString()  == fechaActual.toLocaleDateString() 
 ? ('0'+fechaMensaje.getHours()).slice(-2) +":"+('0'+ fechaMensaje.getMinutes()).slice(-2)
 : fechaActual.getDate() - fechaMensaje.getDate() == 1  && (fechaActual.getMonth()+1)==(fechaMensaje.getMonth()+1) && fechaActual.getFullYear() == fechaMensaje.getFullYear()
 ? "Ayer"
 : fechaMensaje.getDate()+"/"+(fechaMensaje.getMonth()+1)+"/"+fechaMensaje.getFullYear(); 

 return fecha;

   }