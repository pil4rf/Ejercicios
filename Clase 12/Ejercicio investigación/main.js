function definirTriangulo (alturaTriangulo) {
	for (let i = 0; i <= alturaTriangulo; i++) {
		console.log(obtenerGuiones(calcularGuiones(i, alturaTriangulo)))
	}
}

function obtenerGuiones (cantidadGuiones) {
	let guiones = ''

	for (let i = 0; i < cantidadGuiones; i++) {
		guiones += '-'
	}
	return guiones
}

function calcularGuiones (numeroDeLinea, altura) {
	if (numeroDeLinea <= altura / 2) {
		return numeroDeLinea
	}

	return altura + 1 - numeroDeLinea
}

definirTriangulo(7)