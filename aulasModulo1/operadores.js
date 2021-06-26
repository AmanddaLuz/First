var a = 1 + 2;
var soma = 4 + 2;
var subtracao = 5 - 3;
var multiplicacao = 5 * 4;
var divisao = 20 / 4;

var resto = 20 / 3;
/*se quero saber o resto da divisão
sem as casas decimais basta utilizar o simbolo %*/
var restoDivisao = 20 % 3;

//outros exemplos//
var num1 = 10;
var num2 = 50;
var resultado = num2 + num1 / 8 + 2;
/*atencao as expressoes seguem as resgras
matematicas*/
var resultado = (num2 + num1) / (8 + 2);

console.log(a);
console.log("soma: " + soma);
console.log("subtracao: " + subtracao);
console.log("multiplocacao: " + multiplicacao);
console.log("divisao: " + divisao);

console.log("resto: " + resto);
console.log("resto: " + restoDivisao);

console.log(resultado);
console.log("precedenciaMatematica: " + resultado);

//Aula de continuacao dos operadores//
var incremento = 1;
incremento = incremento + 1;
incremento++;
console.log("incremento: " + incremento);

var atribuicaoComAdicao = 5
atribuicaoComAdicao = atribuicaoComAdicao + 6 
//pode ser escrito a += 6//

atribuicaoComAdicao += 6;
console.log("Atribuicao com Adicao: " + atribuicaoComAdicao);

var decremento = 5;
decremento = decremento - 1;
decremento--;
console.log("decremento: " + decremento);

var atribuicaoComSubtracao = 10
atribuicaoComSubtracao = atribuicaoComSubtracao - 4;
console.log("atribuição com subtracao: " + atribuicaoComSubtracao);
//pode ser ecrito com -=//
atribuicaoComSubtracao -= 4;
console.log("atribuição com subtracao: " + atribuicaoComSubtracao);

var atribuicaoComMultiplicacao = 4
atribuicaoComMultiplicacao = atribuicaoComMultiplicacao * 5;
console.log("Atribuicao com Multiplicacao: " + atribuicaoComMultiplicacao);
//pode ser escrito como *=//
atribuicaoComMultiplicacao *= 5;
console.log("Atribuicao com Multiplicacao: " + atribuicaoComMultiplicacao);

var atribuicaoComDivisao = 20;
atribuicaoComDivisao = atribuicaoComDivisao / 4
console.log("Atribuicao com Divisao: " + atribuicaoComDivisao);
//pode ser escrito como /=//
atribuicaoComDivisao /= 5;
console.log("Atribuicao com Divisao: " + atribuicaoComDivisao);

var a = 4;
var b = 3;

var adicao = a + b;
var adicaoComIncrementoAnterior = a + ++b;

console.log(adicao);
console.log("Anterior: " + adicaoComIncrementoAnterior);

var c = 5;
var d = 6;


var subtracaoDecrementoAnterior = c + --d;


console.log("Anterior: " + subtracaoDecrementoAnterior);
console.log(d);

var e = 7;
var f = 3;

var adicaoIncremento = e + f++;
console.log("adicao Incremento: " + adicaoIncremento);
e--
console.log(e);
