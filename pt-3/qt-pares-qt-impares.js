/*Faça um algoritmo que imprima a quantidade de números pares e a quantidade de
 números ímpares em um intervalo digitado pelo usuário.*/

const prompt = require('prompt-sync')();

var QtdeMinima = parseInt(prompt("Digite o menor valor para saber quantos pares e impares tem entre o primeiro e o segundo valor digitado "));
var QtdeMaxima = parseInt(prompt("Digite o maior valor para saber quantos pares e impares tem entre o primeiro e o segundo valor digitado "));

var QtdePar = 0;
var QtdeImpar = 0;

for(var i = QtdeMinima; i <= QtdeMaxima; i++){
    if(i % 2 == 0){
        QtdePar++
    } else {
        QtdeImpar++
    }
} console.log("existem " + QtdePar + " numeros pares e " + QtdeImpar + " numeros impares entre " + QtdeMinima + " e " + QtdeMaxima);*/
