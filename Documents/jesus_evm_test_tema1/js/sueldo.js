function aumento(categoria, sueldo){

    if (categoria == 1){
        nuevo_sueldo = sueldo * 1.15;
        return  categoria + " " + nuevo_sueldo.toFixed(2);
    } else if (categoria == 2){
        nuevo_sueldo = sueldo * 1.10;
        return  categoria + " " + nuevo_sueldo.toFixed(2);

    } else if (categoria == 3){
        nuevo_sueldo = sueldo * 1.08;
        return  categoria + " " + nuevo_sueldo.toFixed(2);

    } else if (categoria == 4){
        nuevo_sueldo = sueldo * 1.07;
        return  categoria + " " + nuevo_sueldo.toFixed(2);

    } else {
        return "categoria invalida.";
    }
    

}