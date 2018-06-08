# Ejemplos Libro Automatas finitos y expresiones regulares UTN FRBA
> "Libro de automatas finitos, expresiones regulares, alfabetos y gramaticas. Los ejemplos que se muestran estaban originalmente escritos en ANSI C."

### Archivos:

- **Reconocedor**: reconocedor_1.js

  Ejemplo de automata finito,que permite determinar si una cadena dada responde un patron preestablecido que corresponde a un lenguaje infinito;  en otros terminos, esto significa verificar si una cadena es una palabra de un Lenguaje Regular infinito dado.
  En este caso reconoce lenguajes compuesto con numeros del 0 al 9 y con los simbolos '+' y '-' delante.
  
  Diagrama:
  
  ![N|Solid](https://github.com/damiancipolat/State-Machines-js/blob/master/libro_automatas/doc/automata_1.png?raw=true)

  Ejecutar:
  
  ```sh   
   $ node reconocedor_1.js
  ```

- **Reconocedor y accionador**:reconocedor_accionador.js

    Es una extensión del automata anterior, agrega a la capacidad de reconocer el realizar acciones en cada estado.
    Se usa el AFD (diagrama anterior), para reconocer "Todos los números enteros en base 10, que pueden estar precedidos por un signo".

    **Algoritmo**:
    - Caracter a analizar: primer caracter de la cadena 
    - Estado actual del automata: estado inicial
    
    Mientras haya caracteres en la cadena, repetir:
    
      1) Determinar el nuevo estado actual (estado de llegagada de la transición).
      2) Llevar a cabo la acción correspondiente.
      3) Actualizar el carácter a analizar.
      
    Si el último estado actual es un estado final, entonces la cadena procesada es una palabra del lenguaje, caso contrario, la cadena no pertenece al lenguaje.
    
     Ejecutar:
  
  ```sh   
   $ node reconocedor_accionador.js
  ```

- **Analizador lexico**:analizador_lexico.js
Pendiente...
    
