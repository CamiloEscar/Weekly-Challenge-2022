/*
#  * Reto #4
#  * ÁREA DE UN POLÍGONO
#  * Fecha publicación enunciado: 24/01/22
#  * Fecha publicación resolución: 31/01/22
#  * Dificultad: FÁCIL
#  *
#  * Enunciado: Crea UNA ÚNICA FUNCIÓN (importante que sólo sea una) que sea capaz de calcular y retornar el área de un polígono.
#  * - La función recibirá por parámetro sólo UN polígono a la vez.
#  * - Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
#  * - Imprime el cálculo del área de un polígono de cada tipo.
#  *
#  * Información adicional:
#  * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la acomunidad.
#  * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
#  * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
#  * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
#  *
#  */



class poligono{
    area() {}
    printArea() {}
}
    
class triangulo extends poligono{
    constructor(base, altura) {
        super();
        this.base = base;
        this.altura = altura;
    }
    
    area() {
        return (this.base * this.altura) / 2
    }

    printArea() {
        console.log(`El area del triangulo es de ${this.area()}`)
    }
}

class rectangulo extends poligono{
    constructor(largo, ancho) {
        super();
        this.largo = largo;
        this.ancho = ancho;
    }
    
    area() {
        return (this.largo * this.ancho)
    }

    printArea() {
        console.log(`El area del rectangulo es de ${this.area()}`)
    }
}

class cuadrado extends poligono{
    constructor(lado) {
        super();
        this.lado = lado;
    }
    
    area() {
        return (this.lado * this.lado)
    }

    printArea() {
        console.log(`El area del cuadradp es de ${this.area()}`)
    }
}

function area(poligono) {
    poligono.printArea()
    return poligono.area()
}

function main() {
    area(new triangulo(10, 5))
    area(new rectangulo(10, 5))
    area(new cuadrado(10, 5))
}

main()