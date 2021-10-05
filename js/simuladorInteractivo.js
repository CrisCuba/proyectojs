let entrada = null
let primerNumero = null
let segundoNumero = null
let resultado = null



while (entrada != "ESC") {
    entrada = prompt("Que operación quieres realizar? \nSUMA=1 RESTA=2 MULTIPLICAR=3 DIVIDIR=4 \no ESC para Terminar")

    if (entrada.toUpperCase == "ESC") {
        break;
    } else {
        primerNumero = parseInt(prompt("Ingrese el primer número"))
        segundoNumero = parseInt(prompt("Ingrese el segundo número"))
    }

    switch (entrada) {
        default:
            console.log(entrada + " no es un operador valido");
            break;
        case "1":
            resultado = primerNumero + segundoNumero
            console.log(resultado);
            break;
        case "2":
            resultado = primerNumero - segundoNumero
            console.log(resultado);
            break;
        case "3":
            resultado = primerNumero * segundoNumero
            console.log(resultado);
            break;
        case "4":
            if (segundoNumero == 0) {
                console.log("No se puede realizar el cálculo");
            } else {
                resultado = primerNumero / segundoNumero
                console.log(resultado);
            }
            break;
    }
}