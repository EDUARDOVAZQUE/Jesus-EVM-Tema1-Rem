function ejercicio5(precio_base){
    if(precio_base<=20){
        precio_total = precio_base
    } else if(precio_base<=40){
        impuesto = precio_base * .3
        precio_total = precio_base + impuesto
    } else if(precio_base<500){
        impuesto =precio_base*.4
        precio_total = precio_base + impuesto
    } else {
        impuesto=precio_base*.5
        precio_total = precio_base + impuesto
    }
    return precio_total
}
// console.log(ejercicio5(20))
// console.log(ejercicio5(39))
// console.log(ejercicio5(40))
// console.log(ejercicio5(59))
// console.log(ejercicio5(60))
// console.log(ejercicio5(499))
// console.log(ejercicio5(500))