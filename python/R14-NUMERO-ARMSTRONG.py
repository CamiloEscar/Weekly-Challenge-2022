#  * Reto #14
#  * ¿ES UN NÚMERO DE ARMSTRONG?
#  * Fecha publicación enunciado: 04/04/22
#  * Fecha publicación resolución: 11/04/22
#  * Dificultad: FÁCIL
#  *
#  * Enunciado: Escribe una función que calcule si un número dado es un número de Amstrong (o también llamado narcisista).
#  * Si no conoces qué es un número de Armstrong, debes buscar información al respecto.
# Un numero armstrong es aquel numero que al separar sus dígitos, elevarlos a la cuarta a cada uno y luego sumarlos dan el numero que eran loa dígitos juntos. Ejemplo: 8028 es un numero armstrong ya que todos sus dígitos elevados a la cuarta y luego sumarlos dan 8028. user357966 es un usuario nuevo en el sitio.

def is_armstrong(numero):
    #verifica si el numero es negativo
    if numero < 0:
        return False
    else:
        #inicializa la suma en cero
        suma = 0
        
        #calcular la long del numero convertido en cadena
        longNum = len(str(numero))
        
        #iterar sobre cada digito del numero
        for digito in str(numero):
            #suma la potencia de cada digito
            suma += int(digito) ** longNum
            
        #retoma true si el numero es igual a la suma de las potencias de sus digitos
        return numero == suma
    
#ej
print(is_armstrong(314))
print(is_armstrong(371))
print(is_armstrong(-371))
print(is_armstrong(12))
print(is_armstrong(0))