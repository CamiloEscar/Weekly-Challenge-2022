// #  * Reto #8
// #  * DECIMAL A BINARIO
// #  * Fecha publicación enunciado: 18/02/22
// #  * Fecha publicación resolución: 02/03/22
// #  * Dificultad: FÁCIL
// #  *
// #  * Enunciado: Crea un programa se encargue de transformar un número decimal a binario sin utilizar funciones propias del lenguaje que lo hagan directamente.
// #  *
// #  * Información adicional:
// #  * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la acomunidad.
// #  * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
// #  * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
// #  * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
// #  *

function decimaAbinario(decimal) {
    //inicializamos la representacion del binario como una cadena vacia
    binario = ""

    //si el numero es 0, entonces es 0
    if (decimal === 0) {
        return '0'
    }

    while (decimal != 0) {
        //calculamos el resto de la div del numero por 2
        let resto = decimal % 2

        //dividimos el numero decimal por 2 y redondeamos hacia abajo
        decimal = Math.floor(decimal / 2)

        //concatenamos el resto al principio de la representacion binaria
        binario = resto + binario
    }

    return binario
}

//ej
console.log(decimaAbinario(323))
console.log(decimaAbinario(32))