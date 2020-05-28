function buscarCondicionLibro(libros, isbn){
	/*
	Esta funcion debe rastrear si, primero en principal, el libro lo tiene la biblioteca y luego si está disponible o no. 
	Para esto debe: 
	1. recorrer libros (for)
	2. con un (if) hay dos opciones: 
		- O lo encuentra y luego chequea el estado del libro, que a su vez:
			2.a(if) tiene otros dos caminos: disponible o alquilado.
		- O no lo encuentra dentro de la biblioteca y da aviso que este es un libro que no pertenece a la biblioteca.
	*/
	let seEncuentra = false
	let alquilado = false

	for(let i = 0; i< libros.length; i++) {

		if(libros[i].isbn == isbn){
			seEncuentra = true

			if(libros[i].estado != 'Disponible'){
				alquilado =  true
			}
		}
	}

	if(!seEncuentra)
		return 'No se encuentra el libro en esta biblioteca'

	if(alquilado)
		return 'Se encuentra alquilado'
	else
		return 'Se encuentra disponible para alquilar'
}


function alquilarLibro (libros, isbn) { 
	/*
	La funcion principalmente debe cambiar el estado del libro a 'alquilado', sumar una vez la cantidad de veces que fue alquilado
	para mas adelante poder saber cuáles son los libros más pedidos y, con una funcion auxiliar, se registrará al lector.
	Para esto debe recorrer libros (for), encontrar el libro por el isbn y cambiar el estado, sumar 1 en la cantidad (++) y 
	se registra a quien alquila este libro. 
	*/
	
	for(let i = 0; i< libros.length; i++){
		const libro = libros[i]

		if(libro.isbn == isbn){

			libro.estado = 'Alquilado'
			libros.cantAlquilada++
			agregarRegistroLector(libro)
		}
	}

	return 'Libro alquilado con exito'
}


function disponibilidadPorAutor (libros, autorABuscar) {
	/* 
	Esta funcion debe rastrar libros únicamente 'Disponibles' ingesando el autor.
	Para esto debe hacer:
	1. recorrer libros (for).
	2. con un if plantear dos condiciones que deben ser verdaderas:
		-Que el autor que se busca esté dentro del array de libros
		-Que el libro de ese autor este libro esté disponble.
	*/
	const librosDelAutor = []

	for (let i = 0; i < libros.length; i++) {

		if (autorABuscar === libros[i].autor && libros[i].estado === 'Disponible') {

			librosDelAutor.push({
				titulos: libros[i].titulo,
				isbn: libros[i].isbn,
			})
		}	
	}
	return librosDelAutor	
}	


function obtenerLibrosMasPedidos (libros) {
	/*
	Esta funcion debe saber qué libros son los mas pedidos en base a la cantidad de alquileres que tuvo, y que fuimos sumando
	cada vez un lector se lo llevaba. 
	Para esto debe hacer:
		1. Ordenar los libros de mayor a menor según la 'cantAlquileres'.
		2. Mostrar los primero 5 libros mas pedidos. (puse los primero 5 porque la biblioteca tiene solo 10 libros jajaj)
	*/	

	return libros.sort(function(a, b) {

		return (b.cantAlquilada - a.cantAlquileres)}).slice(0,5) 	
}


function devolucionDeLibro(isbn) {
	/* 
	Esta funcion debe cambiar el estado del libro de 'alquilado' a 'disponible' y eliminar los datos dentro del array 
	de Alquileres donde detallamos anteriormente la fecha de devolucion y el dni del lector.
	Para esto debe hacer: 
		1. recorrer libros, buscarlo por isbn y cambiar el estado. 
		2. Encontrar por isbn el libro dentro del array de Aquileres y eliminarlo.
	*/

	for(let i = 0; i < libros.length; i++) {

		if(libros[i].isbn == isbn){
			libros[i].estado = 'Disponible'
		}
	}

	for (i = 0; i < alquileres.length; i++) {
		const alquiler = alquileres[i]

	 	if (isbn.indexOf(alquiler.isbn) !== -1) {
			alquileres.splice(i, 1)
    	}
	}

	return 'Devolucion procesada exitosamente'
}


function obtenerDevolucionesAtrasadas () {
	/*
	Esta funcion debe avisar cuando un libro aún no fue devuelto pasado el día de devolucion y mostrar los datos del libro y
	del lector para poder contactarnos con él y hacer el reclamo.
	Para esto debemos: 
		1. recorrer el array de alquileres 
		2. comparar si la fecha de hoy es mayor a la fecha de devolucion.
		3. Si es mayor la fecha de hoy a la de devolucion, recorrer array de lectores e ingresar los datos siguientes datos: 
			*isbn
			*Nombre del lector
			*Telefono
			*fecha de devolcion
		en un nuevo array para hacer el reclamo.
	*/
	const fechaHoy = new Date()

	for (let i = 0; i < alquileres.length; i++) {
		const alquiler = alquileres[i]

		if(fechaHoy.toLocaleDateString() > alquiler.fechaDevolucion) {

			for (let j = 0; j < lectores.length; j++) {
				const lector = lectores[j]

				lectoresMorosos.push({
					isbn: alquiler.isbn,
					nombre: lector.nombre,
					telefono: lector.telefono,
					DevolucionPactada: alquiler.fechaDevolucion,	
				})
				return lectoresMorosos	
			}		
		}
	}
}	// Esta funcion no me salio lpm  
