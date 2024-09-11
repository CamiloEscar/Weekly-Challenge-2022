/*
 * Reto #10
 * EXPRESIONES EQUILIBRADAS
 * Fecha publicación enunciado: 07/03/22
 * Fecha publicación resolución: 14/03/22
 * Dificultad: MEDIA
 *
 * Enunciado: Crea un programa que comprueba si los paréntesis, llaves y corchetes de una expresión están equilibrados.
 * - Equilibrado significa que estos delimitadores se abren y cieran en orden y de forma correcta.
 * - Paréntesis, llaves y corchetes son igual de prioritarios. No hay uno más importante que otro.
 * - Expresión balanceada: { [ a * ( c + d ) ] - 5 }
 * - Expresión no balanceada: { a * ( c + d ) ] - 5 }
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la comunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */

// Función principal para comprobar si los paréntesis, llaves y corchetes de una expresión están equilibrados
function main() {
    // Ejemplos de expresiones para comprobar su equilibrio
    console.log(estaBalanceada("{a + b [c] * (2x2)}}}}"));  // Expresión no balanceada
    console.log(estaBalanceada("{ [ a * ( c + d ) ] - 5 }"));  // Expresión balanceada
    console.log(estaBalanceada("{ a * ( c + d ) ] - 5 }"));  // Expresión no balanceada
    console.log(estaBalanceada("{a^4 + (((ax4)}"));  // Expresión no balanceada
    console.log(estaBalanceada("{ ] a * ( c + d ) + ( 2 - 3 )[ - 5 }"));  // Expresión no balanceada
    console.log(estaBalanceada("{{{{{{(}}}}}}"));  // Expresión balanceada
    console.log(estaBalanceada("(a"));  // Expresión no balanceada
}

// funcion para comprobar si los delimitadores de una expresion estan equilibradas

function estaBalanceada(expresion) {
    const simbolos = { "{": "}", "[": "]", "(": ")" }; //definimos delimitadores
    const stack = [] //pila para almacenar los delimitadores abiertos

    for (let char of expresion) {
        if (simbolos[char]) {       //si el caracter es un delimitador de apertura
            stack.push(char)        //se agrega a la pila
        } else if (Object.values(simbolos).includes(char)) {    //si el caracter es un delimitador de cierre
            if (!stack.length || simbolos[stack.pop()] !== char) {  //si la pila esta vacia o el delimitador de cierre no coincide con el ultimo delimitador
                return false; //la expresion no esta balanceada

            }

        }
    }
    return stack.length === 0; //la expresion esta balanceada si la pila esta vacia
}

main()