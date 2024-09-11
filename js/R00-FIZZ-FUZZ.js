/*
#  * RETO #0
#  * EL FAMOSO "FIZZ BUZZ"
#  * FECHA PUBLICACIÓN ENUNCIADO: 27/12/21
#  * FECHA PUBLICACIÓN RESOLUCIÓN: 03/01/22
#  * DIFICULTAD: FÁCIL
#  * ENUNCIADO: ESCRIBE UN PROGRAMA QUE MUESTRE POR CONSOLA (CON UN PRINT) LOS NÚMEROS DE 1 A 100 (AMBOS INCLUIDOS Y CON UN SALTO DE LÍNEA ENTRE CADA IMPRESIÓN), SUSTITUYENDO LOS SIGUIENTES:
#  * - MÚLTIPLOS DE 3 POR LA PALABRA "FIZZ".
#  * - MÚLTIPLOS DE 5 POR LA PALABRA "BUZZ".
#  * - MÚLTIPLOS DE 3 Y DE 5 A LA VEZ POR LA PALABRA "FIZZBUZZ".
#  *
#  * INFORMACIÓN ADICIONAL:
#  * - USA EL CANAL DE NUESTRO DISCORD (HTTPS://MOUREDEV.COM/DISCORD) "🔁RETO-SEMANAL" PARA PREGUNTAS, DUDAS O PRESTAR AYUDA A LA ACOMUNIDAD.
#  * - PUEDES HACER UN FORK DEL REPO Y UNA PULL REQUEST AL REPO ORIGINAL PARA QUE VEAMOS TU SOLUCIÓN APORTADA.
#  * - REVISARÉ EL EJERCICIO EN DIRECTO DESDE TWITCH EL LUNES SIGUIENTE AL DE SU PUBLICACIÓN.
#  * - SUBIRÉ UNA POSIBLE SOLUCIÓN AL EJERCICIO EL LUNES SIGUIENTE AL DE SU PUBLICACIÓN.
#  *
#  */

function main() {
    for (let index = 1; index <= 100; index++) {
        const divisiblePorTres = index % 3 === 0;
        const divisiblePorCinco = index % 5 === 0;

        if (divisiblePorTres && divisiblePorCinco) {
            console.log("fizzfuzz")
        } else if (divisiblePorTres) {
            console.log("fizz")
        } else if (divisiblePorCinco) {
            console.log("fuzz")
        } else {
            console.log(index)
        }
    }
}

main()