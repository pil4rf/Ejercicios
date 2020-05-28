function agregarRegistroLector(libro){
	/* La funcion debe ingresar los datos del lector en un nuevo array para tener una base de datos
	Para esto debo: 
	1. Ingresar los datos: 
		*Nombre
		*DNI
		*Telefono
	2. fijarme que los datos no estén ingresados anteriormente en el array para no repetir información.
	3. ingresar la info del lector y, por potro lado, ingresar los datos de este alquiler en particular en otro array donde se 
	detalla: Fecha de devolucion, isbn y dni del lector. 
	*/

	let existeLector = false

	const nombre = prompt("Introducir nombre")
	const dni = parseInt(prompt("Introducir DNI"))
	const telefono = prompt("Introducir telefono")

	for(let i = 0; i < lectores.length; i++) {
		const lector = lectores[i]

		if(lector.dni == dni){

			existeLector = true
		}
	}

	if(!existeLector)

		lectores.push({
			nombre: nombre,
			dni: dni,
			telefono: telefono,	
		})

	agregarAlquiler(libro,dni)
}


function agregarAlquiler (libro, dni) {
	/* 
	La funcion recibe el libro que se alquila en la funcion principal y el dni del lector para poder ingresar esos datos en un 
	nuevo array donde controlaremos las fechas de devoluciones de los mismos, y para saber mas adelante cuándo una devolucion está
	fuera de fecha. 
	Para esto la funcion debe ingresar en el array de Alquileres:
		*Isbn
		*DNI del lector
		*fecha de devolucion (se calculan 15 dias desde el día de su alquiler)
	*/
	alquileres.push({

		isbn: libro.isbn,
		dniTitular: dni,
		fechaDevolucion: calcularFechaDevolucion(),
	})
}

function calcularFechaDevolucion () {
	/* 
	La funcion debe calcular la fecha en la que el lector debe devolver el libro a partir de la fecha del dia que se lo lleva.
	Para esto debemos:
	1. Saber qué fecha es el dia actual 
	2. A la fecha actual sumarle 15 días mas
	*/

	const fechaActual = new Date()
	const fechaDevolucion = new Date(fechaActual.getFullYear(),fechaActual.getMonth(),fechaActual.getDate())

	return sumarDias(fechaDevolucion,15).toLocaleDateString()
}	

function sumarDias(fecha, dias) {

  fecha.setDate(fecha.getDate() + dias)
  return fecha
}