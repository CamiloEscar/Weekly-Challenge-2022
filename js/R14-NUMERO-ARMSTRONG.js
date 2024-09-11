//   * Reto 14
//   * ¿ES UN NÚMERO DE ARMSTRONG?
//   * Fecha publicación enunciado: 04/04/22
//   * Fecha publicación resolución: 11/04/22
//   * Dificultad: FÁCIL
//   *
//   * Enunciado: Escribe una función que calcule si un número dado es un número de Amstrong (o también llamado narcisista).
//   * Si no conoces qué es un número de Armstrong, debes buscar información al respecto.
//  Un numero armstrong es aquel numero que al separar sus dígitos, elevarlos a la cuarta a cada uno y luego sumarlos dan el numero que eran loa dígitos juntos. Ejemplo: 8028 es un numero armstrong ya que todos sus dígitos elevados a la cuarta y luego sumarlos dan 8028. user357966 es un usuario nuevo en el sitio.

function armstrong(numero) {
    //verifica si el numero es negativo
    if (numero < 0) {
        return false
    } else {
        //inicializamos contador
        let suma = 0
        //calcula la long del numero convertido en cadena
        const longNumero = String(numero).length

        //itera sobre cada digito del numero
        String(numero).split('').forEach(digito => {
            //suma la potencia de cada digito
            suma += parseInt(digito) ** longNumero
        })

        //retorna true si el numero es igual a la suma de las potencias de sus digitos
        return numero === suma
    }
}

console.log(armstrong(371))
console.log(armstrong(-371))
console.log(armstrong(-372))
console.log(armstrong(-123))
console.log(armstrong(0))