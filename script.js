//TIPOS PRIMITIVOS

//Number _ representa valores numéricos.
//       _ puede ser entero o de punto flotante.
let edad = 25;
let precio = 49.99;

//String _ representa secuencia de caracteres.
//       _ puedes usar comillas simples (') o dobles (") para definir cadenas.
let nombre = "Goelthaz";
let mensaje = 'Hola, ¿cómo estás?';

//Boolean _ representa un valor lógico verdadero o falso.
//        _ utilizado en declaraciones condicionales y operaciones lógicas.
let esMayorDeEdad = true;
let tieneDescuento = false;

//Null _ representa la ausencia intencional de cualquier objeto o valor.
//     _ a menudo utilizado para inicializar variables antes de asignarles un valor.
let valorNulo = null;

//Undefined _ representa la falta de definición de un valor.
//          _ se asigna automáticamente a variables no inicializadas
let variableNoDefinida;

//Symbol _ introducido en ECMAScript 6, representa un identificador único e inmutable.
let symbolInmutable = Symbol("descripción");



console.log("Edad:", edad);
console.log("Nombre:", nombre);
console.log("Es mayor de edad:", esMayorDeEdad);
console.log("Valor nulo:", valorNulo);
console.log("Variable no definida:", variableNoDefinida);
console.log("Símbolo:", symbolInmutable);