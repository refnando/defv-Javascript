let arr = [45, 56, 32, 98, 1000, 5, 23];

function numeroMayor(arreglo){
    let mayor = 0;
    // console.log(arreglo.length);
    for(let i = 0; i<arreglo.length; i++){
        console.log(arreglo[i]);
        if (arreglo[i]> mayor) mayor = arreglo[i];
    }
    console.log("El mayor es: ", mayor);
}

numeroMayor(arr);