let nivel = prompt("Ingrese el nivel: Course, Carrera o Master").toLowerCase();
let beca = prompt("Ingrese la beca (Facebook, Google, Jesua o ninguna)").toLowerCase();

let precioMensual;
let duracion;

if (nivel === "course") {
  precioMensual = 4999;
  duracion = 2;
} else if (nivel === "carrera") {
  precioMensual = 3999;
  duracion = 6;
} else if (nivel === "master") {
  precioMensual = 2999;
  duracion = 12;
} else {
  console.log("Nivel no válido.");
}

let descuento = 0;
if (beca === "facebook") descuento = 0.20;
else if (beca === "google") descuento = 0.15;
else if (beca === "jesua") descuento = 0.50;

let precioConDescuento = precioMensual * (1 - descuento);
let total = precioConDescuento * duracion;

console.log("Precio mensual con descuento:", precioConDescuento.toFixed(2), "MXN");
console.log("Total por el programa:", total.toFixed(2), "MXN");
