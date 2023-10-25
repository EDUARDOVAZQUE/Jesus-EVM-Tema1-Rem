function ejercicio2(segundos){
    minutos =  Math.trunc(segundos/60)
    SS = 60*((segundos/60) - minutos)
    hora =  Math.trunc(minutos/60)
    MM = 60*((minutos/60) - hora)
    hora2 =  Math.trunc(hora/60)
    HH = 60*((hora/60) - hora2)
    return HH.toFixed() + ":" +  MM.toFixed() + ":" + SS.toFixed()
}
// console.log(ejercicio2(7000))