let arreglo = [3, 4, 5, 12, 6, 1, 13];
let arregloPar = [];

for (let i = 0; i < arreglo.length; i++) {
  if (arreglo[i] % 2 === 0) {
    arregloPar.push(arreglo[i]);
  }
}

console.log("Arreglo original:", arreglo);
console.log("Arreglo de pares:", arregloPar);
