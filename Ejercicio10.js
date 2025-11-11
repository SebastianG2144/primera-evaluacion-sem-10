let tipoVehiculo = prompt("Ingrese el tipo de vehículo (coche, moto o autobús):").toLowerCase();
let kms = parseFloat(prompt("Ingrese los kilómetros recorridos:"));
let litros = parseFloat(prompt("Ingrese los litros consumidos:"));

let precioKm;

if (tipoVehiculo === "coche") {
  precioKm = 0.20;
} else if (tipoVehiculo === "moto") {
  precioKm = 0.10;
} else if (tipoVehiculo === "autobús") {
  precioKm = 0.50;
} else {
  console.log("Tipo de vehículo no válido.");
}

let extra = litros <= 100 ? 5 : 10;
let total = (precioKm * kms) + extra;

console.log("Total a pagar:", total.toFixed(2), "MXN");
