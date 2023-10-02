function podeVotar(idade) {

    if (idade < 16) {
        console.log("Não pode votar!")
    }

    else if (idade <= 17 || idade > 70) {
        console.log("Voto facultativo!")
    }

    else {
        console.log("Voto obrigatório!")
    }
}

podeVotar(70)