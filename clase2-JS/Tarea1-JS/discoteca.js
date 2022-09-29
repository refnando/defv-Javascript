let nombre = prompt('Ingresa tu  nombre')
let edad = Number(prompt('Ingresa tu edad'))
if (edad >= 18) console.log('Puede ingrear a la Discoteca')

else {
    console.log('No tiene edad para ingresar a la Discoteca');
}
if (nombre == 'Carlos' || 'CARLOS' || 'Mario' || 'MARIO' && edad >= 18) console.log("Es VIP");