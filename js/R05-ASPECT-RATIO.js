/*
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

const fetch = require('node-fetch');
const sizeOf = require('image-size');

class imagenRatio {
    async aspectRatio(url) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Error al descargar la imagen');
            }
            const buffer = await response.buffer();
            const dimensions = sizeOf(buffer);
            const aspectRatio = this.rationalAspectRatio(dimensions.height / dimensions.width);
            console.log(`El aspect ratio es ${aspectRatio[0]}:${aspectRatio[1]}`);
        } catch (error) {
            console.error('No se ha podido calcular el aspect ratio:', error);
        }
    }

    rationalAspectRatio(aspectRatio) {
        const precision = 1.0E-6;
        let x = aspectRatio;
        let a = Math.round(x);
        let h1 = 1, k1 = 0, h = a, k = 1;

        while (Math.abs(x - a) > precision * k * k) {
            x = 1 / (x - a);
            a = Math.round(x);
            [h1, k1, h, k] = [h, k, h1 + a * h, k1 + a * k];
        }

        return [h, k];
    }
}

async function main() {
    const imgRatio = new imagenRatio();
    await imgRatio.aspectRatio("https://raw.githubusercontent.com/mouredev/mouredev/master/mouredev_github_profile.png");
}

main();
