//TIPOS PRIMITIVOS

//Number _ representa valores numéricos.
//       _ puede ser entero o de punto flotante.
//       _ admite notación exponencial (150.5 * 10^2)
let edad = 25;
let precio = 49.99;
let distancia = 150.5e2

//String _ representa secuencia de caracteres.
//       _ puedes usar comillas simples (') o dobles (") para definir cadenas.
//       _ uso de plantillas literales / template literals.
let nombre = "Goel";
let mensaje = 'Hola, ¿cómo estás?';
let saludo = `Hola, ${nombre} ¿cómo estás?`

//Boolean _ representa un valor lógico verdadero o falso.
//        _ utilizado en declaraciones condicionales y operaciones lógicas.
let esMayorDeEdad = true;
let tieneDescuento = false;

//Null _ representa la ausencia intencional de cualquier objeto o valor.
//     _ a menudo utilizado para inicializar variables antes de asignarles un valor.
let valorNulo = null;

//Undefined _ representa la falta de definición de un valor.
//          _ se asigna automáticamente a variables no inicializadas.
let variableNoDefinida;
//console.log(variableNoDefinida); //Salida: undefined

//Symbol _ introducido en ECMAScript 6, representa un identificador único e inmutable.
//       _ útil cuando necesitas crear propiedades de objeto que son únicas.
let symbol1 = Symbol("descripción");
let symbol2 = Symbol("descripción");
//console.log(symbol1 === symbol2); //Salida: false


//imprimir en la consola
console.log("Edad:", edad);
console.log("Precio:", precio);
console.log("Distancia:", distancia);

console.log("Nombre:", nombre);
console.log("Mensaje:", mensaje);
console.log("Saludo:", saludo);

console.log("Es mayor de edad:", esMayorDeEdad);
console.log("Tiene descuento:", tieneDescuento);

console.log("Valor nulo:", valorNulo);

console.log("Variable no definida:", variableNoDefinida);

console.log("Símbolo:", symbol1);
console.log("Símbolo:", symbol2);



//Operaciones con Números
let a = 10;
let b = 5;
let suma = a + b;
let resta = a - b;
let producto = a * b;
let division = a / b;
let modulo = a % b;

console.log(`Suma ${a} + ${b} = ${suma}`);
console.log(`Resta ${a} - ${b} = ${resta}`);
console.log(`Multiplicación ${a} * ${b} = ${producto}`);
console.log(`Division ${a} / ${b} = ${division}`);
console.log(`modulo ${a} % ${b} = ${modulo}`);



//Conversión entre Tipos
let numeroComoCadena = String(42);
let cadenaComoNumero = Number("3.14");
let booleanComoNumero = Number(true);

console.log(numeroComoCadena);
console.log(cadenaComoNumero);
console.log(booleanComoNumero);



//Concatenación de Cadenas
let hola = "hola";
let despedida = "adios"
let mensajeCompleto = hola + ", " + nombre + "! " + despedida;
let mensajeCompleto2 = `${hola}, ${nombre}! ${despedida}`;

console.log(mensajeCompleto);
console.log(mensajeCompleto2);



//Comparación de Valores
let x = 5;
let y = "5";
let esIgual = x == y;
let esIgualEstricto = x === y;

console.log(esIgual);
console.log(esIgualEstricto);



// Uso de NaN (Not a Number)
let resultadoInvalido = "a" / 2;

console.log(resultadoInvalido);