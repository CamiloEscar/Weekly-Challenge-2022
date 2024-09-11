# /*
#  * Reto #5
#  * ASPECT RATIO DE UNA IMAGEN
#  * Fecha publicación enunciado: 01/02/22
#  * Fecha publicación resolución: 07/02/22
#  * Dificultad: DIFÍCIL
#  *
#  * Enunciado: Crea un programa que se encargue de calcular el aspect ratio de una imagen a partir de una url.
#  * - Nota: Esta prueba no se puede resolver con el playground online de Kotlin. Se necesita Android Studio.
#  * - Url de ejemplo: https://raw.githubusercontent.com/mouredev/mouredev/master/mouredev_github_profile.png
#  * - Por ratio hacemos referencia por ejemplo a los "16:9" de una imagen de 1920*1080px.
#  *
#  * Información adicional:
#  * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la acomunidad.
#  * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
#  * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
#  * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
#  *
#  */

import requests
from PIL import Image

class ImagenRatio:
    def aspectRatio(self, url):
        try:
            response = requests.get(url, stream=True)
            response.raise_for_status()
            img = Image.open(response.raw)
            width, height = img.size
            aspectRatio = self.rational_aspectRatio(height / width)
            print(f"el aspect ratio es {aspectRatio[0]}:{aspectRatio[1]}")
        except Exception as e:
            print("no se ha podido calcular el aspect ratio", e)
            
    def rational_aspectRatio(self, aspectRatio):
        presicion = 1.0E-6
        x = aspectRatio
        a = round(x)
        h1, k1, h, k = 1, 0, a, 1
        
        while abs (x-a) > presicion * k *k:
            x = 1 / (x - a)
            a = round(x)
            h1, k1, h, k = h, k, h1 + a * h, k1 + a * k
        
        return h, k

def main():
    imgRatio = ImagenRatio()
    imgRatio.aspectRatio("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfz9mGoArTsLuAZd-etdZ6xoTUmQn3U169F_qHtCP5bw&s")
    
    
main()