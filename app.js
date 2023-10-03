const operation = require("./math");
const person = require("./person");
const circulo = require("./geometria/circulo");
const animales = require("./animales/index");
const fecha  = require("./terceros");

console.log(operation.sumar(2,2));
console.log(operation.resta(5,2));
console.log(operation.multiplicar(2,2));
console.log(operation.sumar(5,1));

console.log(person);

console.log(circulo.area(7));
console.log(circulo.circunferencia(7));


console.log("Información del perro:", animales.perro);
console.log("Información del gato:", animales.gato);
console.log("Información del pájaro:", animales.pajaro);

console.log(fecha.obtenerDia());