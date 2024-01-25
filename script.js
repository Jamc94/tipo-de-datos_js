//TIPOS PRIMITIVOS



//String _ Representa secuencia de caracteres.
//       _ Puedes definirse con comillas simples (') o dobles (").
//       _ Uso de plantillas literales / template literals.
let nombre = "Goel";
let mensaje = 'Hola, ¿cómo estás?';
let saludo = `Hola, ${nombre} ¿cómo estás?`

console.log("Nombre:", nombre);
console.log("Mensaje:", mensaje);
console.log("Saludo:", saludo);

//         Situaciones de Uso
//       _ Manipulación de texto y generación de mensajes dinámicos.
//       _ Concatenación de cadenas.
//       _ Construcción de URLs y rutas.
//       _ Plantillas literales para interpolar cadenas de texto.

//         Consideraciones Adicionales
//       _ Las cadenas son inmutables, no se pueden modificar directamente, cualquier manipulación crea una nueva cadena.
//       _ Puedes acceder a caracteres individuales usando la notación de corchetes //nombre[0] //Salida: G
//       _ Métodos útiles: length, toUpperCase(), toLowerCase(), slice(start, end).



//Number _ Representa valores numéricos.
//       _ Puede ser entero o de punto flotante.
//       _ Admite notación exponencial (1e3 representa 1000).
let edad = 25;
let precio = 49.99;
let distancia = 1e3 // 1000

console.log("Edad:", edad);
console.log("Precio:", precio);
console.log("Distancia:", distancia);

//         Situaciones de Uso
//       _ Manipulación de datos numéricos.
//       _ Cálculos matemáticos y operaciones financieras.
//       _ Control de la temporización en animaciones y eventos.

//         Consideraciones Adicionales
//       _ Cuidado con la precisión en operaciones con punto flotante.
//       _ JavaScript no hace distinción entre enteros y números de punto flotante. 
//       _ Métodos útiles: isNaN, isFinite()



//BigInt _ Permite representar números enteros de longitud arbitraria.
//       _ Evita posibles desbordamientos. 
let cantidadUsuario = 1234567890123456789012345678901234567890n;

console.log(`Cantidad de Usuarios: ${cantidadUsuario}`);

//         Situaciones de Uso
//       _ Trabajo con números extremadamente grandes.

//         Consideraciones adicionales
//       _ Los literales de BigInt se crean añadiendo una "n" al final del número.


//Boolean _ Representa un valor lógico verdadero o falso.
//        _ Utilizado en declaraciones condicionales y operaciones lógicas.
let esMayorDeEdad = true;
let puedeVotar = false;
let puedeConducir = esMayorDeEdad && !puedeVotar;

console.log("Es mayor de edad:", esMayorDeEdad);
console.log("Puede votar:",  puedeVotar);
console.log("Puede conducir:", puedeConducir)

//          Situaciones de Uso
//        _ Evaluación de condiciones y toma de decisiones en el código.
//        _ Filtrado de datos y control de flujo.

//          Consideraciones Adicionales
//        _ Los booleanos son esenciales para el diseño de algoritmos condicionales.
//        _ Los booleanos son útiles para realizar comparaciones y tomar decisiones en el código.
//        _ Operadores lógicos: && (AND), || (OR), !(NOT).



//Null _ Representa la ausencia intencional de cualquier objeto o valor.
//     _ A menudo utilizado para inicializar variables antes de asignarles un valor.
let valorNulo = null;

console.log("Valor nulo:", valorNulo);

//       Situaciones de Uso
//     _ Para indicar que una variable no tiene un valor válido o no apunta a ningún objeto.

//       Consideraciones Adicionales
//     _ null es asignado y debe ser utilizado de manera explicita.
//     _ Útil para restablecer intencionalmente el valor de una variable.



//Undefined _ Representa la falta de definición de un valor.
//          _ Se asigna automáticamente a variables no inicializadas.
let variableNoDefinida;

console.log("Variable no definida:", variableNoDefinida); //Salida: undefined

//            Situaciones de Uso
//          _ Indicar la ausencia de un valor asignado.
//          _ Como valor por defecto para parámetros de funciones.
//          _ Cuando una variable se declara pero no se le asigna un valor.
//          _ Puede ser retornado por funciones que no tienen una instrucción "return".

//            Consideraciones Adicionales
//          _ Evita asignar directamente undefined, ya que puede llevar a confusiones.



//Symbol _ Introducido en ECMAScript 6, representa un identificador único e inmutable.
//       _ Útil cuando necesitas crear propiedades de objeto que son únicas.
let symbol1 = Symbol("descripción");
let symbol2 = Symbol("descripción");

console.log("Símbolo:", symbol1);
console.log("Símbolo:", symbol2);
console.log(symbol1 === symbol2); //Salida: false

//         Situaciones de Uso
//       _ Como claves para propiedades de objetos, garantizando unicidad.

//         Consideraciones Adicionales
//       _ Cada símbolo creado es único, incluso si tiene la misma descripción.



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

console.log(isNaN("Hola")); //Salida: true 