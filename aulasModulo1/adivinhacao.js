/*Criar um jogo que gera um numero aleatorio para o usuario adivinhar
e voltar para o usuario se o numero digitado por ele é maior ou menor que 
o numero sorteado pelo jogo. o jogo disponibiliza tambem 10 tentativas para 
o usuario. Quando o usuario acertar, printar "Parabéns acertou" ou "As tentativas acabaram"
*/

/*1) Gerar um número aleatório entre 1 a 100
2) inicializar o numero de tentativas
3) Pedir ao jogador para tentar adivinhar o numero
4) Decrementar o numero de tentativas
5) Verificar se a tentativa está correta
6) se estiver correta:
    -  Informar que acertou
    - Encerrar o jogo
7) Se estiver incorreta:
    - acabaram as tentativas - informar que não venceu e - encerrar o jogo
    - ainda existem tentativas - informar se é maior ou menor que o numero sorteado
    - pedir ao usuario para digitar outo numero
*/

//math.roun arredonda o numero aleatorio
//math.random gera um numero aleatorio de 0 a 1, então multiplicando por 100 ele gera de 0 a 100
var readline = require("readline");
var rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
});

var numeroAleatorio = Math.round(Math.random() * 100);
if(numeroAleatorio === 0) {
    numeroAleatorio === 1;
}
var numeroTentativas = 10;

console.log(numeroAleatorio);


pergunta();
function pergunta(){

rl.question("Digite um número: ", function(numero){
    numero = parseInt(numero);
    
    numeroTentativas--;
    if(numero === numeroAleatorio){
        console.log("Parabéns acertou!")
        rl.close();
    } else if(numeroTentativas === 0){
        console.log("Que pena, você não acertou o número em 10 tentativas ");
    }else if (numero > numeroAleatorio){
            console.log("Número errado, você ainda tem " + numeroTentativas + " tentativas." +
            " O número informado é maior que o sorteado. ");
            pergunta();
        } else {//(numero < numeroAleatorio) não precisa digitar isso, pois é a única opção que sobrou
            console.log("Número errado, você ainda tem " + numeroTentativas + " tentativas." +
            " O número informado é menor que o sorteado. ")
            pergunta();
    }
})
}