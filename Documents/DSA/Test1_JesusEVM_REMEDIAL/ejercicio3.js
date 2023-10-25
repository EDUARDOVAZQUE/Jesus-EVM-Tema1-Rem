function ejercicio3([L1,L2,L3]){
    p = (L1+L2+L3)/2
    a = Math.sqrt(p*(p-L1)*(p-L2)*(p-L3))
    return a.toFixed(2)
}
// console.log(ejercicio3([5,6,7]))