function obtenerGastadoPorCliente (cliente) {
	let duracionTotalSesiones = 0

	for(let j = 0; j < cliente.sesiones.length; j++) {
		const sesionesPorCliente = cliente.sesiones[j]

		duracionTotalSesiones += sesionesPorCliente.duracion
	} 

	return duracionTotalSesiones * valor_por_hora
}

function obtenerFechaABuscar (mes, anio) {
	if (mes > 9) {
		return mes + '/' + anio
	}

	return '0' + mes + '/' + anio 
}

function buscarFechaEn (fecha, mes, anio) {
	const aBuscar = obtenerFechaABuscar(mes, anio)

	return fecha.includes(aBuscar)
}

function obtenerMesPasado () {
	const fechaActual = new Date ()
	const mesActual = fechaActual.getMonth() + 1

	if (mesActual === 0) {
		return 12
	}

	return mesActual - 1
}

function obtenerAnioDeMesPasado () {
	const fechaActual = new Date ()
	const mesActual = fechaActual.getMonth() + 1
	const anioActual = fechaActual.getFullYear()

	if (mesActual === 1) {
		return anioActual - 1
	}

	return anioActual
}
