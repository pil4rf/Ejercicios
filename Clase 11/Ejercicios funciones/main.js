function calcularAreaRectangulo (base, altura) {
	const areaRectangulo = base*altura
	return areaRectangulo
}

let base = 10;
let altura = 7;

console.log(calcularAreaRectangulo (base, altura))


function calcularPrecioTotal (precioUnitario, cantidadUnidades, costoEnvio) {
	const totalAPagar = (precioUnitario*cantidadUnidades)+costoEnvio
	return totalAPagar
}

let precioUnitario = 4;
let cantidadUnidades = 12;
const costoEnvio = 100

console.log(calcularPrecioTotal (precioUnitario, cantidadUnidades, costoEnvio))


function dejarPasar(edad) {
  return edad >= 18
}

let edad = 15;

console.log(dejarPasar(edad))