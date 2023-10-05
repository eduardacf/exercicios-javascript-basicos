function mes(Mes) {

    if (Mes <= 3 || Mes == 12) {
        console.log("Verão")
    }

    else if (Mes >= 4 && Mes <= 6) {
        console.log("Outono")
    }

    else if (Mes >= 7 && Mes <= 9) {
        console.log("Inverno")
    }

    else {
        console.log("Primavera")
    }
}

mes(1)
mes(4)
mes(9)
mes(11)