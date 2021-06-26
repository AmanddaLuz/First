
var dividendo = process.argv[2];
var quantidadeDivisoes = 0;
var divisor = 0;

for(divisor = 1; divisor<= dividendo; divisor++) {
    if(dividendo % divisor === 0) {
        quantidadeDivisoes = quantidadeDivisoes + 1;

         //É possível saber todos os divisores//
         console.log(divisor);
            }
}

if (quantidadeDivisoes === 2) {
    console.log(" O numero " + dividendo + " é um número primo");
} else {
    console.log(" O numero " + dividendo + " não é primo");
}
        // É possível saber quantos divisores//
        console.log(quantidadeDivisoes);

       