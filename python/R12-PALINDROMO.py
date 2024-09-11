#  * Reto #12
#  * ¿ES UN PALÍNDROMO?
#  * Fecha publicación enunciado: 21/03/22
#  * Fecha publicación resolución: 28/03/22
#  * Dificultad: MEDIA
#  *
#  * Enunciado: Escribe una función que reciba un texto y retorne verdadero o falso (Boolean) según sean o no palíndromos.
#  * Un Palíndromo es una palabra o expresión que es igual si se lee de izquierda a derecha que de derecha a izquierda.
#  * NO se tienen en cuenta los espacios, signos de puntuación y tildes.
#  * Ejemplo: Ana lleva al oso la avellana.
#  *
#  * Información adicional:
#  * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la comunidad.
#  * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
#  * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
#  * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
#  *

import unicodedata

def esPalindromo(texto):
    #Paso 1, normalizar el texto eliminando diacriticos y convirtiendolo en minuscula
    textoNormalizado = ''.join(c for c in unicodedata.normalize('NFD', texto.lower()) if unicodedata.category(c) != 'Mn')
    
    #Paso 2. Eliminar caracteres no alfanumericos del texto normalizado
    textoNormalizado = ''.join(c for c in textoNormalizado if c.isalnum())
    
    #paso 3. verifica si el texto normalizado es igual a su reverso, lo que determina si es un palindromo
    return textoNormalizado == textoNormalizado[::-1]

# Ejemplos de uso de la función esPalindromo
print(esPalindromo("Ana lleva al oso la avellana."))  # True
print(esPalindromo("Adivina ya te opina, ya ni miles origina, ya ni cetro me domina, ya ni monarcas, a repaso ni mulato carreta, acaso nicotina, ya ni cita vecino, anima cocina, pedazo gallina, cedazo terso nos retoza de canilla goza, de pánico camina, ónice vaticina, ya ni tocino saca, a terracota luminosa pera, sacra nómina y ánimo de mortecina, ya ni giros elimina, ya ni poeta, ya ni vida"))  # True
print(esPalindromo("¿Qué os ha parecido el reto?"))  # False