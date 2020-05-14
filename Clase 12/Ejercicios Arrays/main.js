function duplicarNumeros (listaDeNumeros) {
	for (let i = 0; i < listaDeNumeros.length; i++) {
		listaDeNumeros[i] = listaDeNumeros [i] * 2
	}

	return listaDeNumeros
}

// console.log(duplicarNumeros([ 2, 5, 8 ]))


function multiplicar (listaDeNumeros) {
	let resultado = 1

	for (let i = 0; i < listaDeNumeros.length; i++) {
		resultado = resultado * listaDeNumeros[i]
	}

	return resultado
}

console.log(multiplicar ([2, 4, 3]))


function calcularPromedios (listaDeNumeros) {
	let resultadoSuma = 0

	for (let i = 0; i < listaDeNumeros.length; i++) {
		resultadoSuma = resultadoSuma + listaDeNumeros[i] 
	}

	const promedio = resultadoSuma / listaDeNumeros.length

	return promedio
}

console.log(calcularPromedios ([2, 6, 4 ]))

