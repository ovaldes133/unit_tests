// esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// solo un registro en consola para nosotros.
console.log(sum(7,3))


// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar){
    // convertimos el valor a yen
    let valueyen = valueInDollar * 128;
    // retornamos el valor
    return valueyen;
}

const fromYenToPoundr = function(valueyen){
    // convertimos el valor a poundr
    let valueInPoundr = valueyen * 0.8;
    // retornamos el valor
    return valueInPoundr;
}
// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
module.exports = { sum, fromEuroToDollar,fromDollarToYen, fromYenToPoundr }