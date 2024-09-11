#  * Reto #10
#  * EXPRESIONES EQUILIBRADAS
#  * Fecha publicación enunciado: 07/03/22
#  * Fecha publicación resolución: 14/03/22
#  * Dificultad: MEDIA
#  *
#  * Enunciado: Crea un programa que comprueba si los paréntesis, llaves y corchetes de una expresión están equilibrados.
#  * - Equilibrado significa que estos delimitadores se abren y cieran en orden y de forma correcta.
#  * - Paréntesis, llaves y corchetes son igual de prioritarios. No hay uno más importante que otro.
#  * - Expresión balanceada: { [ a * ( c + d ) ] - 5 }
#  * - Expresión no balanceada: { a * ( c + d ) ] - 5 }
#  *
#  * Información adicional:
#  * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la comunidad.
#  * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
#  * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
#  * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.

def main():
    # Ejemplos de expresiones para comprobar su equilibrio
    print(estaBalanceado("{a + b [c] * (2x2)}}}}"))  # Expresión no balanceada
    print(estaBalanceado("{ [ a * ( c + d ) ] - 5 }"))  # Expresión balanceada
    print(estaBalanceado("{ a * ( c + d ) ] - 5 }"))  # Expresión no balanceada
    print(estaBalanceado("{a^4 + (((ax4)}"))  # Expresión no balanceada
    print(estaBalanceado("{ ] a * ( c + d ) + ( 2 - 3 )[ - 5 }"))  # Expresión no balanceada
    print(estaBalanceado("{{{{{{(}}}}}}"))  # Expresión balanceada
    print(estaBalanceado("(a)"))  # Expresión no balanceada

#funcion para comprobar si los delimitadores de una expresion estan equilibrados
def estaBalanceado(expresion):
    simbolos = {"{": "}", "[":"]", "(":")"} #definimos los delimitadores y sus contrapartes
    stack = [] #pila para almacenar los delimitadores abiertos
    
    for char in expresion: 
        if char in simbolos: #si elcaracter es un delimitador de apertura
            stack.append(char) #se agrega a la pila
        elif char in simbolos.values(): # si el caracter es un delimitador de cierre
            if not stack or simbolos[stack.pop()] != char: #si la pila esta vacia o el delimitador de cierre no coincide con el ultimo de apertura
                return False
    return not stack

main()