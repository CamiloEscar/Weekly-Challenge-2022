function factorial(n) {
    //si es negativo, retorna null
    if (n<0) {
        return null //si es negativo no tiene factorial
    }

    if (n<=1) {
        return 1 //si el numero es 1 o 0, es 1
    } else {
        return n * factorial ( n - 1) // para mayor a 1, el factorial se calcula recursivamente
    }

}

function main() {
    console.log(factorial(0) || 'no tiene factorial')
    console.log(factorial(2) || 'no tiene factorial')
    console.log(factorial(1) || 'no tiene factorial')
    console.log(factorial(-1) || 'no tiene factorial')
    console.log(factorial(12) || 'no tiene factorial')
    console.log(factorial(4) || 'no tiene factorial')
}

main()