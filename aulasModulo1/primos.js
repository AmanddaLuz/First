

var dividendo = 0;
var quantidadeDivisoes = 0;
var divisor = 0;
var contador = 0;
var inicial = process.argv[2];

if (isNaN (inicial) ) {
    console.log("Caracter inválido");
}
else {

for (dividendo = 1; dividendo<= parseInt(inicial); dividendo++) {
        quantidadeDivisoes = 0;

    for(divisor = 1; divisor<= dividendo; divisor++) {
        if(dividendo % divisor === 0) {
        quantidadeDivisoes = quantidadeDivisoes + 1;

         //É possível saber todos os divisores//
        // console.log(divisor);
            }
    }

    if (quantidadeDivisoes === 2) {
        if (dividendo === parseInt(inicial)) {
            console.log(" O numero " + dividendo + " é primo");
        }
        else 
        {
            console.log(" O numero " + dividendo + " é primo");
            contador = contador + 1;
        }
    } 
    else
    {
        //if (dividendo === parseInt(inicial)) {
            console.log(" O numero " + dividendo + " não é primo");
        //}
    }
}
}

console.log( "Existem " + contador + " números primos menores que " + inicial);
        // É possível saber quantos divisores//
        //console.log(quantidadeDivisoes);



