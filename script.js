function calcularSuma() {
    let numero1 = parseInt(document.querySelector(".valor1").value) //Como es clase se pone un punto, si fuera ID, se pone numeral
    let numero2 = parseInt(document.querySelector(".valor2").value)

    let suma = numero1 + numero2
    respuesta(suma)
}

function calcularResta() {
    let numero1 = parseInt(document.querySelector(".valor1").value)
    let numero2 = parseInt(document.querySelector(".valor2").value)

    let resta = numero1 - numero2
    respuesta(resta)
}

function calcularMultiplicacion() {
    let numero1 = parseInt(document.querySelector(".valor1").value)
    let numero2 = parseInt(document.querySelector(".valor2").value)

    let multiplicacion = numero1 * numero2
    respuesta(multiplicacion)
}

function calcularDivision() {
    let numero1 = parseInt(document.querySelector(".valor1").value)
    let numero2 = parseInt(document.querySelector(".valor2").value)
    let division = numero1 / numero2
    respuesta(division)
}

//Esta función va a mostrar el resultado en el html
let respuesta = function(resultado) {
    let espacioRespuesta = document.querySelector(".resultado")
    espacioRespuesta.innerText = `La respuesta es: ${resultado}` // Es como en python la cadena formateada. 

}