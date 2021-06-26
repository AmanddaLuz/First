var carros = ["Gol" , "Palio" , "Uno" , "Sandero"];
console.log(carros[carros.length -1]);

// "pop" remove o ultimo elemento do array
var carro = carros.pop();
console.log(carro);
console.log(carros);

//push acrescenta um item no fim do array e retorna o tamanho do array
var x = carros.push("Ford Ka");
console.log(carros);
console.log(x);

//"shift" remove o primeiro elemento do array
carro = carros.shift();
console.log(carro);
console.log(carros);

//unshift inserir elementos no inicio do array

x = carros.unshift("Onix");
console.log(carros);
console.log(x);

//"alterar" elemento do indice informado
carros[2] = "Novo Uno"
console.log(carros);

/*"delete" remove o elemento do indice informado
deixando um lugar vazio(empty)*/

//delete carros [2];
//console.log(carros);

/*"splice" remove e/ou apenas acrescenta elementos
obedecendo a sintax
1º posiçao inicia
2º parametro: quantos elementos serão removidos a partir da posicao
inicial informada.
3º e demais parametros: elementos que serão inseridos a partir da posiçaõ informada.*/

carros.splice(2, 0, "HRV", "Creta");
//console.log(carros);

carros.splice(2, 1);
//console.log(carros);

//"Concat" concatena um array com outro e retorna o novo array criado
var carrosAntigos = ["Brasilia" , "Monza" , "Fusca"];
var carrosAntigos2 = ["Corcel" , "Chevet"];
var todosCarros = carros.concat(carrosAntigos, carrosAntigos2);
//console.log(todosCarros);

//se quiser que os antigos venham primeiro:
var todosCarros = carrosAntigos.concat(carros);
//console.log(todosCarros);

/*"slice" cria um novo array sem alterar o array original
1º parametro: posição inicia
2ª parametro: (opciona), posição final não incluso
matematicamente falando é um array ENTRE os valores indicados*/
var novoArray = todosCarros.slice(1);
//console.log(novoArray);

var novoArray2 = todosCarros.slice(2, 5);
console.log(todosCarros);
console.log(novoArray2)