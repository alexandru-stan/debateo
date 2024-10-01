import React from "react";

const $ = require("jquery")

function isValidDate(date) {
    let parsedDate = new Date(date);
    return parsedDate instanceof Date && !isNaN(parsedDate.getTime()) && (parsedDate.getFullYear() >= 1900 && parsedDate.getFullYear() <= 2099);
}

export function validarRegister(user){


let valid = true;

  switch(false){
        case /^[a-zA-Z0-9]{4,14}$/.test(user.username):
        $("#Rusername").siblings("p").html("El nombre de usuario debe tener entre 4 y 14 caracteres y no contener ningún símbolo especial");
        valid = false;
        break;
        

        case /^.{8,24}$/.test(user.password):
        $("#Rpassword").siblings("p").html("La contraseña debe tener entre 8 y 24 caracteres")
        valid = false;
        break;
        case /^[a-zA-Z]+$/.test(user.name):
            $("#Rname").siblings("p").html("Tu nombre no puede contener números ni símbolos especiales.")
            valid = false;
            break;
        case /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(user.mail):
            $("#Rmail").siblings("p").html("Tu correo electrónico debe tener un formato válido")
            valid = false;
            break;
        case isValidDate(user.birth_date):
            $("#Rbirth_date").siblings("p").html("Debes introducir una fecha de nacimiento válida.")
            valid = false;
            break;

       
    } 


    return valid;

    


    


}