const fromYenToPound = function(valueInYen){
    // convertimos el valor a pound
    let valueInPound = valueInYen * 0.0062; // valor se aproximo
    // retornamos el valor
    return valueInPound;
}

const fromDollarToYen = function(valueInDollar){
    // convertimos el valor a yen
    let valueInYen = valueInDollar * 127.9;
    // retornamos el valor
    return valueInYen;
}

// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}

// esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// solo un registro en consola para nosotros.
console.log(sum(7,3))

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };