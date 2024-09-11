# /*
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

from abc import ABC, abstractmethod

class poligono(ABC):
    @abstractmethod
    def area(self):
        pass
    
    @abstractmethod
    def printArea(self):
        pass
    
class traingulo(poligono):
    def __init__(self, base, altura):
        self.base = base
        self.altura = altura
        
    def area(self):
        return (self.base * self.altura) / 2
    
    def printArea(self):
        print(f"el area del triangulo es de {self.area()}")

class rectangulo(poligono):
    def __init__(self, largo, ancho):
        self.largo = largo
        self.ancho = ancho
        
    def area(self):
        return self.largo * self.ancho
    
    def printArea(self):
        print(f"el area del rectangulo es de {self.area()}")

class cuadrado(poligono):
    def __init__(self, lado):
        self.lado = lado
        
    def area(self):
        return self.lado * self.lado 
    
    def printArea(self):
        print(f"el area del cuadrado es de {self.area()}")
        
def area(poligono):
    poligono.printArea()
    return poligono.area()

def main():
    area(traingulo(10, 5))
    area(rectangulo(10, 5))
    area(cuadrado(10))
    
main()