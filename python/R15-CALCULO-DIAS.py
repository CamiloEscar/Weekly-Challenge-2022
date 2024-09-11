#  * Reto #15
#  * ¿CUÁNTOS DÍAS?
#  * Fecha publicación enunciado: 11/04/22
#  * Fecha publicación resolución: 18/04/22
#  * Dificultad: DIFÍCIL
#  *
#  * Enunciado: Crea una función que calcule y retorne cuántos días hay entre dos cadenas de texto que representen fechas.
#  * - Una cadena de texto que representa una fecha tiene el formato "dd/MM/yyyy".
#  * - La función recibirá dos String y retornará un Int.
#  * - La diferencia en días será absoluta (no importa el orden de las fechas).
#  * - Si una de las dos cadenas de texto no representa una fecha correcta se lanzará una excepción.

from datetime import datetime

def contadorDias(primeraFecha, segundaFecha):
    #intenta convertir las cadenas de texto en objetos de fecha
    try:
        primeraFechaParsed = datetime.strptime(primeraFecha, "%d/%m/%Y") 
        segundaFechaParsed = datetime.strptime(segundaFecha, "%d/%m/%Y") 
        
        #calcula la diferencia absoluta en dias entre las dos fechas
        delta = abs((primeraFechaParsed - segundaFechaParsed).days)
        return delta
    
    #maneja el error si las cadenas de texto no representan fechas validas
    except ValueError:
        raise ValueError("error en el formato de alguna fecha")
    
#funcion para imprimir la diferencia de dias entre dos fechas
def printContadorDias(primeraFecha, segundaFecha):
    try:
        print(contadorDias(primeraFecha, segundaFecha))
    except ValueError as e:
        print(str(e))

#ej
printContadorDias("15/12/2022", "25/04/1995")
printContadorDias("15/12/9999", "25/04/1995")
printContadorDias("15/12/202e", "25/04/1995")