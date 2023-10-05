
//Faça um algoritmo que imprima a quantidade de números multiplos de 7 intervalo entre 1 e 70 (incluindo ambos).

var QtdeTotal = 0;
for(var i = 1; i <= 70; i++){
        if(i% 7 == 0){  
        QtdeTotal++
    }
}
console.log(QtdeTotal);