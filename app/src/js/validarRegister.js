import React from "react";

const $ = require("jquery")
export function validarRegister(user){




let valid = true;

  switch(false){
        case /^[a-zA-Z0-9]{4,14}$/.test(user.username):
        $("#Rusername").siblings("p").html("El nombre de usuario debe tener entre 4 y 14 caracteres y no contener ningún símbolo especial");
        valid = false;
        break;
        

        case /^[a-zA-Z0-9]{9,16}$/.test(user.password):
        $("#Rpassword").siblings("p").html("La contraseña debe tener entre 9 y 16 caracteres y no contener ningún símbolo especial")
        valid = false;
        break;
        case /^[A-Z][a-z]*$/.test(user.name):
            $("#Rname").siblings("p").html("Tu nombre debe comenzar por una mayúscula y no puede contener números ni símbolos especiales.")
            valid = false;
            break;
        case /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(user.mail):
            $("#Rmail").siblings("p").html("Tu correo electrónico debe tener un formato válido")
            valid = false;
            break;
    } 


    return valid;

    


    


}