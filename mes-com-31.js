function dias(mes) {

    if (mes == 4 || mes == 6 || mes == 9 || mes == 11) {
        console.log("O mês possui apenas 30 dias!")
    }

    else if (mes == 2) {
        console.log("Poosui apenas 28 dias!")
    }

    else {
        console.log("O mês possui 31 dias!")
    }
}

dias(5)
dias(2)
dias(6)
dias(9)
dias(12)