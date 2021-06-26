for (var i = 0; i < 10; i++) {
  //  console.log(i);
}

//comecando crescente
//cada carro do array é um indice sempre comecando do zero//
var carros = ["Gol", "Palio", "Uno", "Celta"];
for (var i = 0; i < carros.length; i++) {
   // console.log(carros[i]);
}

//comecando decrescente
for(var i = carros.length - 1; i >= 0; i--) {
  //  console.log(carros[i]);
}

/*esse codigo faz a mesma coisa que o 
for ali no inicio do codigo*/

/*var i = 0;
while (i < carros.length) {
    console.log(carros[i]);
    if(carros[i] === "Palio") {
      console.log("Encontrei o Palio");
      break;
    }
    i++; //esse incremento é para ele não executar infinitamente o GOL que é o primeiro do array
} */

/*while (true) {
  console.log("olá");
}*/

/*var i = 0;
while (i < 10) {
  console.log(i);
  i++;
}*/

/*var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var i = 0;
while (i < numeros.length) {
  var num = numeros[i];
  i++;
  if (num % 2 === 0) {
    console.log(num + " é par");
    continue;
  }

  console.log(num + " é impar")
}*/

  /*var j = 30;
  do {
    j++;
    console.log(j);
  }while (j < 10);*/

  for (var carro of carros) {
    console.log(carro);
  }

