//  * Reto #15
//  * ¿CUÁNTOS DÍAS?
//  * Fecha publicación enunciado: 11/04/22
//  * Fecha publicación resolución: 18/04/22
//  * Dificultad: DIFÍCIL
//  *
//  * Enunciado: Crea una función que calcule y retorne cuántos días hay entre dos cadenas de texto que representen fechas.
//  * - Una cadena de texto que representa una fecha tiene el formato "dd/MM/yyyy".
//  * - La función recibirá dos String y retornará un Int.
//  * - La diferencia en días será absoluta (no importa el orden de las fechas).
//  * - Si una de las dos cadenas de texto no representa una fecha correcta se lanzará una excepción.

function entreDias(primeraFecha, segundaFecha) {
    //intenta convertir las cadenas de texto en objetos de fecha

    try {
        const primeraFechaParsed = new Date(primeraFecha)
        const segundaFechaParsed = new Date(segundaFecha)

        //calcula la diferencia absoluta en dias entre las dos fechas
        const milisegundosPorDia = 24*60*60*1000 //numero de milisegundos por dia
        const delta = Math.abs((primeraFechaParsed - segundaFechaParsed) / milisegundosPorDia)
        return delta
    } catch (error) {
        //maneja el error si las cadenas de texto no reprensentan una fecha valida
        throw new Error("error en el formato de la fecha")
    }
}

//funcion para imprimir la diferencia de dias entre dos fechas
function imprimirEntreDias (primeraFecha, segundaFecha) {
    try {
        console.log(entreDias(primeraFecha, segundaFecha))
    } catch (error) {
        console.log(error.message)
    }
}

//ej
imprimirEntreDias("12/12/2000", "13/05/2024")
imprimirEntreDias("12/12/2000", "13/05/202e")
imprimirEntreDias("12/12/2000", "13/05/9999")