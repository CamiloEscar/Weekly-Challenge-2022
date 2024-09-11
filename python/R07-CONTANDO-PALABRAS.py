# /*
#  * Reto #7
#  * CONTANDO PALABRAS
#  * Fecha publicación enunciado: 14/02/22
#  * Fecha publicación resolución: 21/02/22
#  * Dificultad: MEDIA
#  *
#  * Enunciado: Crea un programa que cuente cuantas veces se repite cada palabra y que muestre el recuento final de todas ellas.
#  * - Los signos de puntuación no forman parte de la palabra.
#  * - Una palabra es la misma aunque aparezca en mayúsculas y minúsculas.
#  * - No se pueden utilizar funciones propias del lenguaje que lo resuelvan automáticamente.
#  *
#  * Información adicional:
#  * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la acomunidad.
#  * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
#  * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
#  * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
#  *
#  */

def contadorPalabras(texto):
    palabras = {}
    texto = texto.lower()
    for palabra in texto.split():
        palabra = ''.join(filter(str.isalnum, palabra))
        if palabra:
            palabras[palabra] = palabras.get(palabra, 0) +1
    
    for palabra, count in palabras.items():
        print(f"{palabra} se ha repetido {count} {'vez' if count == 1 else 'veces'}")

def main():
    contadorPalabras("Hola, mi nombre es camilo. Mi nombre completo es Camilo Escar")
    
main()
    
    

#La función count_words(text) toma un texto como entrada y devuelve un recuento de palabras, ignorando los signos de puntuación y sin diferenciar entre mayúsculas y minúsculas. La función itera sobre cada palabra en el texto, elimina los caracteres no alfanuméricos y cuenta la frecuencia de cada palabra. Luego, imprime el recuento de palabras junto con el número de veces que aparecen en el texto.