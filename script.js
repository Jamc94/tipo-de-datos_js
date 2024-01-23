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