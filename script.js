//Bienvenida a Javascript básico, para comentar una linea de código puedes usar las dos barras // y para comentar un bloque de varias líneas puedes usar barra y asterisco para abrir /*  asterisco y barra para cerrar */

//En el archivo index.html que tienes abierto en el navegador (preferiblemente chrome o firefox) vamos a trabajar con la consola, abre tu inspector y en la pestaña de consola, mira si puedes ver el mensaje escrito abajo.

console.log('Hola soy tu consola y juntas vamos a aprender Javascript')

//Si has encontrado el mensaje puedes continuar con los ejercicios

//Ejercicio 1: Imprime en la consola "Bienvenida al bootcamp Femcoders de Factoría F5" y mira en tu navegador si sale el resultado.

//Escribe tu código aquí

console.log("Bienvenida al bootcamp Femcoders de Factoría F5");


//VARIABLES Y TIPOS DE DATOS
//Ejercicio 2: Crea una variable por los siguientes tipos de dato: string, number, boolean, null, undefined, object, array e imprímelos en la consola.

//Escribe tu código aquí

let miString = "Hola Mundo";
let miNumber = 42;
let miBoolean = true;
let miNull = null;
let miUndefined;
let miObject = { clave: "valor" };
let miArray = [1, 2, 3, 4, 5];

console.log(miString);
console.log(miNumber);
console.log(miBoolean);
console.log(miNull);
console.log(miUndefined);
console.log(miObject);
console.log(miArray);


//Ejercicio 3: Crea una constante llamada postres con un tipo de dato array que contiene los siguientes elementos: helado, tarta, pastel e imprímelo en la consola. 

//Escribe tu código aquí
const postres = ["helado", "tarta", "pastel"];
console.log(postres);



//Ejercicio 4: Crea una constante con un tipo de dato objeto llamado coder que contengan dos propiedades, nombre y edad e imprímelo en la consola.

//Escribe tu código aquí
const coder = {
    nombre: "Jenny",
    edad: 41
};
console.log(coder);



//Ejercicio 5: Busca como imprimir en consola el tipo de dato de cada variable que hemos creado.

//Escribe tu código aquí

console.log(typeof miString);
console.log(typeof miNumber);
console.log(typeof miBoolean);
console.log(typeof miNull);
console.log(typeof miUndefined);
console.log(typeof miObject);
console.log(typeof miArray);
console.log(typeof postres);
console.log(typeof coder);



//OPERADORES ARITMÉTICOS
//Ejercicio 6: Crea una varible que sume 2 números e imprime el resultado en consola.

//Escribe tu código aquí
let num=parseInt(prompt("Ingresa el primer número para sumar:"));
let num2=parseInt(prompt("Ingresa el segundo número para sumar:"));
let suma = num + num2;
console.log("La suma es: " + suma);



//Ejercicio 7: Crea una varible que reste 2 números e imprime el resultado en consola.

//Escribe tu código aquí

let num3=parseInt(prompt("Ingresa el primer número para restar:"));
let num4=parseInt(prompt("Ingresa el segundo número para restar:"));
let resta = num3 - num4;
console.log("La resta es: " + resta);


//Ejercicio 8: Crea una varible que multiplique 2 números e imprime el resultado en consola.

//Escribe tu código aquí

let num5=parseInt(prompt("Ingresa el primer número para multiplicar:"));
let num6=parseInt(prompt("Ingresa el segundo número para multiplicar:"));
let multiplicacion = num5 * num6;
console.log("La multiplicación es: " + multiplicacion);


//Ejercicio 9: Crea una varible que divida 2 números e imprime el resultado en consola.

//Escribe tu código aquí

let num7=parseInt(prompt("Ingresa el primer número para dividir:"));
let num8=parseInt(prompt("Ingresa el segundo número para dividir:"));
if (num8 === 0) {
    console.log("Error: No se puede dividir entre 0.");
} else {
    let division = num7 / num8;
    console.log("La división es: " + division.toFixed(2)); // muestra con 2 decimales
}


//OPERADORES DE COMPARACIÓN
// Ejercicio 10: Crea dos variables, la primera con valor 1 y la segunda con valor 2, compara ambas variables dentro de otra variable e imprime en la consola para ver el resultado.

//Escribe tu código aquí

const var1 = 1;
const var2 = 2;
const comparacion1 = var1 < var2;
console.log(comparacion1);


// Ejercicio 10: Crea otra variable que compare las dos primeras variables creadas en el ejercicio anterior, para que el resultado impreso en la consola sea true.

//Escribe tu código aquí

const comparacion2 = var1 <= var2;
console.log(comparacion2);


//Ejercicio 11: completa el ejercicio

let numUno = 15
let numDos = 20

let comparacion = numUno < numDos; //Realiza la operación de comparación que consideres para que el resultado en consola sea true
console.log(comparacion)


//Ejercicio 12: completa el ejercicio

let numTres = 1
let num3AsString = "1"

let result = numTres === num3AsString; //Realiza la operación de comparación que consideres entre las dos variables dadas, para que el resultado en consola sea false sin usar el comparador de desigualdad
console.log(result) 


//Ejercicio 13: completa el ejercicio

let result2 = numTres == num3AsString; //Realiza la operación de comparación que consideres con las dos variables del ejercicio anterior para que el resultado en consola sea true.
console.log(result2)



//OPERADORES DE CADENAS
//Ejercicio 14: Crea una variable con tu nombre y otra variable con tu apellido y crea otra nueva variable con tu nombre completo concatenando las dos variables anteriores e imprime en consola. Debe haber un espacio entre tu nombre y apellido.

//Escribe tu código aquí
const nombre = "Jennifer";
const apellido = "Cros";
const nombreCompleto = nombre + " " + apellido;
console.log(nombreCompleto);



//OPERADORES DE LÓGICA
//Ejercicio 15: Descomenta todo el bloque desde la variable 'a' hasta el 'console.log(res6)' y completa el ejercicio. (Saldrá un error y no podrás visualizar el resultado hasta que termines este ejercicio)

let a = 6;
let b = 3;

let res =  a < 10 && b > 1 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea true
console.log(res)

let res2 = a < 10 && b < 1 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea false
console.log(res2)

let res3 = a == 5 && b == 5 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea false
console.log(res3)

let res4 = a == 6 || b == 0 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea true
console.log(res4)

let res5 = a == 0 || b == 3 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea true
console.log(res5)

let res6 = a == 6 && b == 3 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea true
console.log(res6)
