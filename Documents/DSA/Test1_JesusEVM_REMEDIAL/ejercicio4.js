function ejercicio4(sueldo){
    if(sueldo<1000){
        nuevo_sueldo = sueldo*1.15
    } else{
        nuevo_sueldo = sueldo*1.12
    }
    return nuevo_sueldo.toFixed(2)
}
// console.log(ejercicio4(999))