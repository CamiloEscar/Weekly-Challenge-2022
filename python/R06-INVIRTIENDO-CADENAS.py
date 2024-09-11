# /*
#  * Reto #6
#  * INVIRTIENDO CADENAS
#  * Fecha publicación enunciado: 07/02/22
#  * Fecha publicación resolución: 14/02/22
#  * Dificultad: FÁCIL
#  *
#  * Enunciado: Crea un programa que invierta el orden de una cadena de texto sin usar funciones propias del lenguaje que lo hagan de forma automática.
#  * - Si le pasamos "Hola mundo" nos retornaría "odnum aloH"
#  *
#  * Información adicional:
#  * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la acomunidad.
#  * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
#  * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
#  * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
#  *
#  */

def textInvertido(texto):
    textoInvertido = ""
    for index in range(len(texto) -1, -1, -1):
        textoInvertido += texto[index]
    return textoInvertido

# Sin un bucle, mediante una función recursiva
def reversaRecursiva(texto, index= 0, textoInvertido = ""):
    if index == len(texto):
        return textoInvertido
    else: 
        return reversaRecursiva(texto, index +1, texto[index] + textoInvertido)
    
def main():
    # print(reversed("hola mundo"))
    print(reversaRecursiva("hola mundo"))
    
main()