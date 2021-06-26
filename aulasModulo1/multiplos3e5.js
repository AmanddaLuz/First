/*If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.*/

/*var multiplos =  [];

for (var i1 = 0; i1 < 1000; i1++); {
    if (i1 % 3 === 0) {
        multiplos.push(i1);
    } else if (i1 % 5 === 0) {
        multiplos.push(i1);
    }
}   
console.log(multiplos);

outra forma de escrever sem usar o push duas 
vezes. É usar o operador "OU" 
uma ou outra açao*/

var multiplos = [];
for (var ind = 3 ; ind < 1000; ind++){
    if ((ind % 3 === 0) || (ind % 5 === 0)) {
        multiplos.push(ind);
    } 
}
var sum = 0
for (var i = 0; i < multiplos.length; i++){
    sum += multiplos[i];
}
console.log(sum);

/* Se fosse para atender as duas condiçoes
multiplo de 3 E de 5 deveriamos usar o operador && */

