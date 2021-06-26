var a = 50;
var b = 40;

if (a > b) 
{
    //condicao a ser executada caso seja verdadeiro//
console.log("a maior que do que b"); 
}
else if (b < a) {
    //senao, executa codigo abaixo//
console.log("b maior do que a");    
} else {
    console.log("a e b sao iguais");
}

if( a > b) {
    console.log("executar somente se a > b");
}
console.log("sempre executar");

var c = 40;
var d = 40;

if (c >= d) {
    console.log("c maior ou igual a d");
}

if ( d<= c) {
    console.log("d menor ou igual a c");
}

/*ATENCAO ao utilizar dois operadores de "igual"
ele pode converter o string (texto) em numero. Ao
utilizar tres operadores de igual, ele não converte o texto em numero 
e não executa o codigo.

tres operadores indica equivalencia
alem de comparar o valor, compara o 
tipo de texto*/

if (c == d) {
    console.log("c é igual a d")
}

if (c === d) {
    console.log("c é igual a d")
}

var g = 10;
var h = "10";

if (g !== h) {
    console.log("g diferente de h");
}

var i = 4;
var j = 3;
var k = 5;
var l = 5;
//&& condicao E//
if ((i > j) && (l > k)) {
    console.log("i maior que j");
}

//|| condicao OU//
if ((i === j) || (k === l)) {
    console.log("um dos dois eram validos");
}

console.log(!(1 > 2));

if (!(1 > 2)) {
    console.log("execute");
}

var fruta = "abacaxi";
var valor = 0;

if (fruta === "banana") {
    valor = 2;
} else if (fruta === "maca") {
    valor = 3;
} else if (fruta === "abacaxi") {
    valor = 4;
} else if (fruta === "melao") {
    valor = 5;
} else if (fruta === "mamao") {
    valor = 5.50;
} else {
    valor = 10;
}
console.log("valor: " + valor);

switch (fruta) {
    case "banana":
        valor = 2
        break;
    case "maca":
        valor = 3;
        break;
    case "abacaxi":
        valor = 4;
        break;
    case "melao":
        valor = 5;
        break;
    case "mamao":
        valor = 5.50
        break;
        default:
            valor = 10;
}

console.log("valor: " + valor);

var x = 3;
var y = 2;
var resultado = "";

if(x > y) {
    resultado = "x maio que y";
} else {
    resultado = "senao";
}
console.log(resultado);

//operador ternario//
resultado = x > y ? "x maior que y" : "senao";
console.log(resultado);










