// #  * Reto #11
// #  * ELIMINANDO CARACTERES
// #  * Fecha publicación enunciado: 14/03/22
// #  * Fecha publicación resolución: 21/03/22
// #  * Dificultad: FÁCIL
// #  *
// #  * Enunciado: Crea una función que reciba dos cadenas como parámetro (str1, str2) e imprima otras dos cadenas como salida (out1, out2).
// #  * - out1 contendrá todos los caracteres presentes en la str1 pero NO estén presentes en str2.
// #  * - out2 contendrá todos los caracteres presentes en la str2 pero NO estén presentes en str1.
// #  *
// #  * Información adicional:
// #  * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la comunidad.
// #  * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
// #  * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
// #  * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.


//funcion para encontrar los caracteres no comunes en str1 con respecto a str2
function findNoComun(str1, str2) {
    let stack = '' //variable para almacenar los caracteres
    str1 = str1.toLowerCase() //str a minuscula
    str2 = str2.toLowerCase() //str a minuscula

    for (let char of str1) {            //itera sobre cada caracter de str1
        if (!str2.includes(char)) {     //si el caracter no esta presente en str2
            stack += char               //agrega el caracter a la cadena de salida
        }
    }

    return stack    //devuelve los caracteres no comunes
}

//funcion para imprimir los caracteres
function printNoComun(str1, str2) {
    const stack1 = findNoComun(str1, str2)  //caracteres no comunes en str1
    const stack2 = findNoComun(str2, str1)  //caracteres no comunes en str1
    console.log(`stack1: ${stack1}`)    //imprime caracteres no comunes en str1
    console.log(`stack2: ${stack2}`)    //imprime caracteres no comunes en str1
}

//ejemplos
printNoComun("camilo", "escar")
printNoComun("me gusta python", "me gusta javascript")