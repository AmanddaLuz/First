//parseInt transforma string "texto" em numero inteiro//
var operacao = process.argv[2]; 
var num1 = parseInt(process.argv[3]);
var num2 = parseInt(process.argv[4]);
var resultado = 0

if (operacao === "soma") {
    resultado = num1 + num2;
}
/*Nesse caso ja se sabe que e uma soma
entao e desnecessario rodar a subtracao,
entao acrescenta-se um "else if" para ele parar 
de verificar quando a condicao ja for atendida.*/
else if (operacao === "subtracao") {
    resultado = num1 - num2;
} else if (operacao === "multiplicacao") {
    resultado = num1 * num2;
} else if (operacao === "divisao") {
    resultado = num1 / num2;
} else if (operacao === "resto") {
    resultado = num1 % num2;
} else if (operacao === "porcentagem") {
    resultado = num1 * num2 / 100;
}
console.log(resultado);