#  * Reto #11
#  * ELIMINANDO CARACTERES
#  * Fecha publicación enunciado: 14/03/22
#  * Fecha publicación resolución: 21/03/22
#  * Dificultad: FÁCIL
#  *
#  * Enunciado: Crea una función que reciba dos cadenas como parámetro (str1, str2) e imprima otras dos cadenas como salida (out1, out2).
#  * - out1 contendrá todos los caracteres presentes en la str1 pero NO estén presentes en str2.
#  * - out2 contendrá todos los caracteres presentes en la str2 pero NO estén presentes en str1.
#  *
#  * Información adicional:
#  * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la comunidad.
#  * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
#  * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
#  * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.

def findCaracterNoComun(str1, str2):
    stack = "" #cadena para almacenar los caracteres
    
    for char in str1.lower(): #recorre cada caracter de str1 en minus
        if char not in str2.lower(): #si el caracter no esta presente en str2 (ignorando mayus y minus)
            stack += char #agrega el caracter a la cadena de salida
    
    return stack #retorna los caracteres no comunes

#funcion para imprimir los caracteres no comunes en ambas cadenas
def printCaracterNoComun(str1, str2):
    stack1 = findCaracterNoComun(str1, str2) #caracter no comun str1
    stack2 = findCaracterNoComun(str2, str1) #caracter no comun str2
    
    print(f"stack1: {stack1}") #imprime los caracteres no comunes en str1
    print(f"stack2: {stack2}") #imprime los caracteres no comunes en str1

# Ejemplos de uso de la función
printCaracterNoComun("brais", "moure")
printCaracterNoComun("Me gusta Java", "Me gusta Kotlin")
