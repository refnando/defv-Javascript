function celsiusToF(gradosC){
    let celsius = gradosC;
    let gradosF = (celsius * 1.8) + 32;
    console.log(celsius, "grados Celsius son", gradosF , " grados Fahrenheit" );
}

function fahrenhetToC(gradosF){
    let fahrenheit = gradosF;
    let gradosC = (fahrenheit - 32) / 1.8;
    console.log(fahrenheit, "grados Fahrenheit son", gradosC , " grados Celsius" );
}

celsiusToF(30);
fahrenhetToC(86);