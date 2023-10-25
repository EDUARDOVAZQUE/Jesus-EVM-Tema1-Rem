function ejercicio1(radio, altura){
    area = 2*(3.1416*radio*altura) + 2*(3.1416*(radio**2))
    volumen =  3.1416*(radio**2)*(altura)
    return [area.toFixed(2), volumen.toFixed(2)]
}
// console.log(ejercicio1(5,12))