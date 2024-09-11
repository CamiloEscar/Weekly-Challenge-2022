def factorial(n):
    #si el numero es negativo, retorna none
    if n<0:
        return None
    #si el numero es 0 o 1, el factorial es 1
    if n <= 1:
        return 1
    else:
        #para numeros mayores a 1, calcula el factorial recursivamente
        return n * factorial(n-1)

def main():
    print(factorial(0) or 'No tiene factorial')
    print(factorial(1) or 'No tiene factorial')
    print(factorial(4) or 'No tiene factorial')
    print(factorial(10) or 'No tiene factorial')
    print(factorial(15) or 'No tiene factorial')
    print(factorial(-10) or 'No tiene factorial')

main()