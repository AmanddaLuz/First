var carros = ["Gol" , "Palio" , "Uno"];
console.log(carros);
console.log("primeira posicao: " + carros[0]);
console.log("segunda posicao: " + carros[1]);
console.log("terceira posicao: " + carros[2]);

//pode ser escrito tambem na forma de variavel cada carro//

var primeiroCarro = carros[0];
var segundoCarro = carros[1];
var terceiroCarro = carros[2];
console.log(primeiroCarro);
console.log(segundoCarro);
console.log(terceiroCarro);

//para altear um item da lista//
carros[2] = "Argo"
console.log("teste: " + carros[2]);

console.log(terceiroCarro); //nao alterou//

//como saber o tamanho do array//
console.log("tamanho do array: " + carros.length);

/*quando se quer o ultimo elemento de um array
mas nao se sabe quantos elemenros tem nesse array*/
console.log("ultimo elemento do array: " + carros[carros.length - 1]);

//como adicionar um elemento na ultima posicao//
carros[3] = "Sandero"
console.log("ultimo elemento do array: " + carros[carros.length - 1]);

//como adicionar um elemento sem conhecer a ultima posicao//
carros[carros.length] = "Fit"
console.log("ultimo elemento do array: " + carros[carros.length - 1]);

//adicionar um elemento maior que a quantidade da tabela//
carros[10] = "Polo"
console.log(carros);
//fica aparecendo itens vazios na tabela//

//outra forma de inserir um elemento na ultima posicao//
carros.push("Fusca");
console.log(carros);

//no array do java nao precisa ser apenas string(texto)//
carros.push(123);
console.log(carros);
