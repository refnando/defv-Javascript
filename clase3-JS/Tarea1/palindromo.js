

function verificarPalindrimo(str){
    const reversa = str.split("").reverse().join("");
    console.log(reversa);
    if (str == reversa) console.log("Es palindromo");
    else console.log("No es palindromo");
}

verificarPalindrimo("computadora");