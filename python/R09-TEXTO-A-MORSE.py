# /*
#  * Reto #9
#  * CÓDIGO MORSE
#  * Fecha publicación enunciado: 02/03/22
#  * Fecha publicación resolución: 07/03/22
#  * Dificultad: MEDIA
#  *
#  * Enunciado: Crea un programa que sea capaz de transformar texto natural a código morse y viceversa.
#  * - Debe detectar automáticamente de qué tipo se trata y realizar la conversión.
#  * - En morse se soporta raya "—", punto ".", un espacio " " entre letras o símbolos y dos espacios entre palabras "  ".
#  * - El alfabeto morse soportado será el mostrado en https://es.wikipedia.org/wiki/Código_morse.
#  *
#  * Información adicional:
#  * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la acomunidad.
#  * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
#  * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
#  * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
#  *
#  */

def main():
    textoNatural = "Chocapic, es una marca de cereales?" #texto normal
    textoMorse = decoder(textoNatural) #convierte texto a morse
    print(textoMorse)
    print(decoder(textoMorse)) #convierte de morse a natural
    
# def decoder(input_str):
#     decodedInput = "" #inicializa la cadena de salida
    
#     #diccionario para mapear caracteres a morse
#     diccNatural = {"A": ".—", "N": "—.", "0": "—————",
#                 "B": "—...", "Ñ": "——.——", "1": ".————",
#                 "C": "—.—.", "O": "———", "2": "..———",
#                 "CH": "————", "P": ".——.", "3": "...——",
#                 "D": "—..", "Q": "——.—", "4": "....—",
#                 "E": ".", "R": ".—.", "5": ".....",
#                 "F": "..—.", "S": "...", "6": "—....",
#                 "G": "——.", "T": "—", "7": "——...",
#                 "H": "....", "U": "..—", "8": "———..",
#                 "I": "..", "V": "...—", "9": "————.",
#                 "J": ".———", "W": ".——", ".": ".—.—.—",
#                 "K": "—.—", "X": "—..—", ",": "——..——",
#                 "L": ".—..", "Y": "—.——", "?": "..——..",
#                 "M": "——", "Z": "——..", "\"": ".—..—.", "/": "—..—."}
    
#     #diccionario para mapear morse a natural
    
#     diccMorse = {value: key for key, value in diccNatural.items()}
    
#     #verifica si la entrada es nat o morse
#     if any(c.isalpha() or c.isdigit() for c in input_str):
#         #texto nat
#         ch = False #bandera para tratar ch como un solo caracter
#         for caracter in input_str.upper():
#             if caracter != " " and not ch: #recorre cada caracter de la entrada
#                 #si no es un espacio y no se esta tratando en ch
#                 IndexSig = input_str.upper().find(caracter) + 1
#                 if caracter == "C" and IndexSig < len(input_str) and input_str.upper()[IndexSig] == "H":
#                     #si es la letra c seguida de h, tratar como ch
#                     decodedInput += diccNatural["CH"]
#                     ch = True
#                 else:
#                     #acgregar el equivalente morse del caracter
#                     decodedInput += diccNatural.get(caracter, "")
#                 decodedInput += " " #agrega espacios entre caracteres
            
#             else: 
#                 #agregar espacio si es un espacio o si ya se trato ch
#                 if not ch:
#                     decodedInput += " "
                
#                 ch = False #reestablece la bandera ch
        
#     elif "." in input_str or "-" in input_str:
#         #codigo morse
#         for palabra in input_str.split("  "):
#             #dividir la entrada en palabras separadas por dos espacios
#             for symbol in palabra.split(" "):
#                 #divide la palabra en simbolos separados por un espacio
#                 if symbol:
#                     #si hay un simbolo
#                     decodedInput += diccMorse.get(symbol, "")
#             decodedInput += " " #agrega espacio entre palabras
    
#     return decodedInput

def decoder(input_str):
    decoded_input = ""  # Inicializar la cadena de salida
    
    # Diccionario para mapear caracteres naturales a Morse
    natural_dict = {"A": ".—", "N": "—.", "0": "—————",
                    "B": "—...", "Ñ": "——.——", "1": ".————",
                    "C": "—.—.", "O": "———", "2": "..———",
                    "CH": "————", "P": ".——.", "3": "...——",
                    "D": "—..", "Q": "——.—", "4": "....—",
                    "E": ".", "R": ".—.", "5": ".....",
                    "F": "..—.", "S": "...", "6": "—....",
                    "G": "——.", "T": "—", "7": "——...",
                    "H": "....", "U": "..—", "8": "———..",
                    "I": "..", "V": "...—", "9": "————.",
                    "J": ".———", "W": ".——", ".": ".—.—.—",
                    "K": "—.—", "X": "—..—", ",": "——..——",
                    "L": ".—..", "Y": "—.——", "?": "..——..",
                    "M": "——", "Z": "——..", "\"": ".—..—.", "/": "—..—."}
    
    # Diccionario para mapear Morse a caracteres naturales
    morse_dict = {value: key for key, value in natural_dict.items()}
    
    # Verificar si la entrada es texto natural o código Morse
    if any(c.isalpha() or c.isdigit() for c in input_str):
        # Texto natural
        input_str = input_str.upper()  # Separar "CH" en dos caracteres
        for character in input_str:
            # Recorrer cada carácter de la entrada
            if character != " ":
                # Si no es un espacio
                decoded_input += natural_dict.get(character, "")
                decoded_input += " "  # Agregar espacio entre caracteres
            else:
                # Agregar espacio si es un espacio
                decoded_input += " "
    elif "." in input_str or "—" in input_str:
        # Código Morse
        for word in input_str.split("  "):
            # Dividir la entrada en palabras separadas por dos espacios
            for symbol in word.split(" "):
                # Dividir la palabra en símbolos separados por un espacio
                if symbol:
                    # Si hay un símbolo
                    decoded_input += morse_dict.get(symbol, "")
            decoded_input += " "  # Agregar espacio entre palabras
    
    return decoded_input

if __name__ == "__main__":
    main()


main()