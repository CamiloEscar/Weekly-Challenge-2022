/*
 * Reto #9
 * CÓDIGO MORSE
 * Fecha publicación enunciado: 02/03/22
 * Fecha publicación resolución: 07/03/22
 * Dificultad: MEDIA
 *
 * Enunciado: Crea un programa que sea capaz de transformar texto natural a código morse y viceversa.
 * - Debe detectar automáticamente de qué tipo se trata y realizar la conversión.
 * - En morse se soporta raya "—", punto ".", un espacio " " entre letras o símbolos y dos espacios entre palabras "  ".
 * - El alfabeto morse soportado será el mostrado en https://es.wikipedia.org/wiki/Código_morse.
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la acomunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */

function main() {
    const textoNatural = "chocapic, es una marca de cereales?"
    const textoMorse = decoder(textoNatural)
    console.log(textoMorse)
    console.log(decoder(textoMorse))
}

function decoder(input) {
    let decodedInput = ''

    //diccionario
    const diccNatural = {
        'A': '.—', 'N': '—.', '0': '—————',
        'B': '—...', 'Ñ': '——.——', '1': '.————',
        'C': '—.—.', 'O': '———', '2': '..———',
        'CH': '————', 'P': '.——.', '3': '...——',
        'D': '—..', 'Q': '——.—', '4': '....—',
        'E': '.', 'R': '.—.', '5': '.....',
        'F': '..—.', 'S': '...', '6': '—....',
        'G': '——.', 'T': '—', '7': '——...',
        'H': '....', 'U': '..—', '8': '———..',
        'I': '..', 'V': '...—', '9': '————.',
        'J': '.———', 'W': '.——', '.': '.—.—.—',
        'K': '—.—', 'X': '—..—', ',': '——..——',
        'L': '.—..', 'Y': '—.——', '?': '..——..',
        'M': '——', 'Z': '——..', '\"': '.—..—.', '/': '—..—.'
    };

    //diccionario para mapear morse a caracteres normales
    const diccMorse = Object.fromEntries(
        Object.entries(diccNatural).map(([key, value]) => [value, key])
    )

    //verifica si la entrada es texto natural o morse

    if (/[a-zA-Z0-9]/.test(input)) {
        //txt natural
        let index = 0;
        let ch = false;

         // Iterar sobre cada carácter del texto de entrada
        [...input.toUpperCase()].forEach(caracter => {
            // Verificar si el carácter es una letra
            if (!ch && caracter !== ' ') {
                const nextIndex = index + 1

                // Verificar si el carácter es 'C' y el siguiente carácter es 'H' para representar 'CH' en Morse
                if (caracter === 'C' && nextIndex < input.length && input.toUpperCase()[nextIndex] === 'H') {
                    decodedInput += diccNatural['CH']
                    ch = true
                } else {

                    // Agregar el carácter en Morse al resultado decodificado
                    decodedInput += diccNatural[caracter] || ''
                }

                decodedInput += ' '
            } else {
                // Agregar un espacio entre palabras
                if (!ch) {
                    decodedInput += ' '
                }
                ch = false
            }
            index++
        })
    } else if (input.includes('.') || input.includes('-')){
        // Código Morse

        // Separar las palabras de entrada por dos espacios en blanco
        input.split('  ').forEach(palabra => {
            // Separar los símbolos de Morse de cada palabra por un espacio
            palabra.split(' ').forEach(simbolo => {
                if (simbolo.length > 0) {
                    decodedInput += diccMorse[simbolo] || '' // Agregar el carácter natural correspondiente al símbolo de Morse al resultado decodificado
                }
            })
            // Agregar un espacio entre palabras
            decodedInput += ' '
        })
    }
     // Devolver el resultado decodificado, eliminando los espacios en blanco adicionales al inicio y al final
    return decodedInput.trim()
}

main()