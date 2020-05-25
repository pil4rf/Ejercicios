const valor_por_hora = 100


function obtenerDeudores (clientes) {
	const deudores = []
	for(let i = 0; i < clientes.length; i++) {
		const cliente = clientes[i]

		const valorTotalSesiones = obtenerGastadoPorCliente(cliente)

		let montoPagado = 0

		for (j = 0; j < cliente.pagos.length; j++){
			const pagoTotal = cliente.pagos[j]

			montoPagado += pagoTotal.monto
		}

		const deudaPorCliente = valorTotalSesiones - montoPagado

		if (deudaPorCliente > 0) {
			deudores.push({
				nombre: cliente.nombre,
				telefono: cliente.telefono,
				deuda: deudaPorCliente,
			})
		}
	}

	return deudores
}

function obtenerMejoresClientes (clientes) {
	const gastadoPorCliente = []

	for (let i = 0; i < clientes.length; i++){
		const cliente = clientes[i]

		gastadoPorCliente.push({
		nombre: cliente.nombre,
		montoSesiones: obtenerGastadoPorCliente(cliente),
		})
	}

	let clientesOrdenados = gastadoPorCliente.sort(function (a,b) {
		return (b.montoSesiones - a.montoSesiones)
	})

	let mejoresClientes = clientesOrdenados.slice(0, 5)

	let mejoresClientesNombres = []

	for (i = 0; i < mejoresClientes.length; i++) {
		const cliente = mejoresClientes[i]
		
		mejoresClientesNombres.push ({
			nombre: cliente.nombre
		})		
	}

	return mejoresClientesNombres
}

function obtenerFacturacionEn (clientes, mes, anio) {
	let totalFacturacion = 0
	const fechaABuscar = '0' + mes + '/' + anio

	for (let i = 0; i < clientes.length; i++) {
		const cliente = clientes[i]

		for (let j = 0; j < cliente.pagos.length; j++) {
			const pagosEn = cliente.pagos[j]

			if (pagosEn.fecha.includes(fechaABuscar)) {

				totalFacturacion += pagosEn.monto
			}
		}
	}

	return totalFacturacion
}

function predecirGrabacionesPorSemana (clientes) {
	let cantidadGracabionesMesPasado = 0

	const mesPasado = obtenerMesPasado ()
	const anioDeMesPasado = obtenerAnioDeMesPasado ()

	for (let i = 0; i < clientes.length; i ++) {
		const cliente = clientes[i]

		for (let j = 0; j < cliente.sesiones.length; j++) {
			const sesion = cliente.sesiones[j]

			if (buscarFechaEn(sesion.fecha, mesPasado, anioDeMesPasado)){
				cantidadGracabionesMesPasado += 1
			}
		}
	}

	return cantidadGracabionesMesPasado / 4
}

