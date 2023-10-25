function  impuesto(precio){
    if (precio > 500){
        precio_total = precio*1.5;
        return precio_total.toFixed(2);
    } else if (precio >= 40){
        precio_total = precio * 1.4;
        return precio_total.toFixed(2);
    } else if (precio >20 ){
        precio_total = precio * 1.3
    } else {
        return precio.toFixed(2);
    }
}