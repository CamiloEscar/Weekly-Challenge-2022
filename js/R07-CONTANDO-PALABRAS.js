/*
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

function contadorPalabras(texto) {
  const palabras = {};
  // Convertir el texto a minúsculas, eliminar caracteres no alfanuméricos excepto espacios en blanco,
  // y dividir el texto en un array de palabras
  texto
    .toLowerCase()
    .replace(/[^a-z0-9 ]/g, "")
    .split(/\s+/)
    .forEach((palabra) => {
      // Iterar sobre cada palabra en el array resultante
      // word representa cada palabra en el array

      // Aquí viene la explicación del código dentro del bucle forEach:

      // Verificar si la palabra no está vacía después de eliminar espacios en blanco al principio y al final
      if (palabra.trim() !== "") {
        // Si la palabra no está vacía, incrementar el conteo de esa palabra en el objeto palabras
        // Si la palabra ya existe en el objeto, se incrementa su conteo en 1
        // Si la palabra no existe en el objeto, se inicializa su conteo en 1
        palabras[palabra] = (palabras[palabra] || 0) + 1;
      }
    });

  for (const [palabra, count] of Object.entries(palabras)) {
    console.log(
      `${palabra} se ha repetido ${count} ${count === 1 ? "vez" : "veces"}`
    );
  }
}

function main() {
  contadorPalabras(
    "Hola, mi nombre es camilo. Mi nombre completo es Camilo Escar"
  );
}

main();
