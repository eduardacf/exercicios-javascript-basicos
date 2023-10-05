/*
Faça um programa que leia 2 valores e retorne o maior deles
*/

const prompt = require('prompt-sync')();

let n1 = Number(prompt('Digite um número: '))
let n2 = Number(prompt('Digite outro número: '))

if (n1 > n2) {
    console.log(`Analisando os valores ${n1} e ${n2}, o maior valor é ${n1}`)
} else if (n1 < n2) {
    console.log(`Analisando os valores ${n1} e ${n2}, o maior valor é ${n2}`)
} else {
    console.log(`Analisando os valores ${n1} e ${n2}, ambos são IGUAIS`)
}