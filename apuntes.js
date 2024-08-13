// alert('Hola desde un alert');

// var apellido = "Aguilar";
let nombre = "Ana";

const pi = 3.14;
// Tipos de datos

// No definido
let noDefinido;
// Número
let cantidad = 50;
// Cadena de texto o String
let bebida = "agua";
// booleanos
let activo = true;

// Objetos
// Persona: nombre, apellido, edad, peso 
let persona = {nombre : 'Ana', apellido : 'Aguilar', edad : 18, peso:79};
console.log(persona);
// Arrays colección 
let personas = [
    {nombre: 'Mario', apellido : 'Leyva', edad : 21},
    {nombre: 'Juan', apellido : 'Cruz', edad : 21},
    {nombre: 'Alexis', apellido : 'Gaona', edad : 21},
    persona
]
console.log(personas);
console.log(personas[2]);

// Funciones JS
// Listado de instrucciones
function suma(a, b) {
    return a + b;
}
let resultadoDeSuma = suma(9, 7);
console.log(resultadoDeSuma);

function multiplicacion(a, b) {
    return a * b;
}
let resultado = multiplicacion(5,7);
console.log(resultado);





