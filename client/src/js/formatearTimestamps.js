export function formatearTimestamps(fechaBBDD){
    let fechaFinal;
    let currentDate = new Date();
    let diferencia = Math.trunc((currentDate - fechaBBDD) / (1000));

    switch (true) {
   
    case (diferencia > 31536000): // 60*60*24*365
        fechaFinal = formatTiempoPasado(diferencia, 60 * 60 * 24 * 365, "año", "años");
        break;
    case (diferencia > 2592000): // 60*60*24*30
        fechaFinal = formatTiempoPasado(diferencia, 60 * 60 * 24 * 30, "mes", "meses");
        break;
    case (diferencia >= 604800): // 60*60*24*7
        fechaFinal = formatTiempoPasado(diferencia, 60 * 60 * 24 * 7, "semana", "semanas");
        break;
    case (diferencia >= 86400): // 60*60*24
        fechaFinal = formatTiempoPasado(diferencia, 60 * 60 * 24, "día", "días");
        break;
    case (diferencia >= 3600): // 60*60
        fechaFinal = formatTiempoPasado(diferencia, 60 * 60, "hora", "horas");
        break;
    case (diferencia >= 60): // 60
        fechaFinal = formatTiempoPasado(diferencia, 60, "minuto", "minutos");
        break;
    case (diferencia < 60 && diferencia > 1):
        fechaFinal = "Hace " + diferencia + " segundos";
        break;
    default:
        fechaFinal = "Ahora mismo";
        break;
}


    return fechaFinal;

}





function formatTiempoPasado(diferencia, unidadEnSegundos, singular, plural) {
        let tiempoPasado = Math.trunc(diferencia / unidadEnSegundos);
        return "Hace " + tiempoPasado + (tiempoPasado > 1 ? " " + plural : " " + singular);
    }