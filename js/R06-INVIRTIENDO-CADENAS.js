function reversa(texto) {
    let textoAlReves = ""
    for (let index = texto.length -1; index >= 0; index--) {
        textoAlReves += texto[index]
    }
    return textoAlReves
}

// Sin un bucle, mediante una función recursiva
function recursivo(texto, index = 0, textoAlReves = "") {
    if (index === texto.length) {
        return textoAlReves
    } else {
        return recursivo(texto, index + 1, texto[index] + textoAlReves)
    }
}

function main() {
    console.log(reversa("hola mundo"))
    console.log(recursivo("hola mundo"))
}

main()