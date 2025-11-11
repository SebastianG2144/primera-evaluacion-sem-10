let topping = prompt("Elija un topping: oreo, kitkat, brownie o ninguno");
let precioBase = 50;
let precioFinal;

switch (topping.toLowerCase()) {
  case "oreo":
    precioFinal = precioBase + 10;
    console.log("El helado con topping de Oreo cuesta", precioFinal, "MXN.");
    break;
  case "kitkat":
    precioFinal = precioBase + 15;
    console.log("El helado con topping de KitKat cuesta", precioFinal, "MXN.");
    break;
  case "brownie":
    precioFinal = precioBase + 20;
    console.log("El helado con topping de Brownie cuesta", precioFinal, "MXN.");
    break;
  default:
    console.log("No tenemos este topping, lo sentimos.");
    console.log("El helado sin topping cuesta", precioBase, "MXN.");
}
