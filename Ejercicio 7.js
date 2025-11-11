let diametro = parseFloat(prompt("Ingrese el diámetro de la rueda (m):"));
let grosor = parseFloat(prompt("Ingrese el grosor de la rueda (m):"));

if (diametro > 1.4) {
  console.log("La rueda es para un vehículo grande.");
  if (grosor < 0.4) console.log("El grosor para esta rueda es inferior al recomendado.");
} else if (diametro > 0.8 && diametro <= 1.4) {
  console.log("La rueda es para un vehículo mediano.");
  if (grosor < 0.25) console.log("El grosor para esta rueda es inferior al recomendado.");
} else {
  console.log("La rueda es para un vehículo pequeño.");
}
