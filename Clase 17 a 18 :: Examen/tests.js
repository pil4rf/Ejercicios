let libros = [
	{
		titulo: 'Quiero Salir De Casa',
		autor: 'Covid',
		editorial: 'Cuarentini',
		Lanzamiento: 2019, 
		isbn: '001-94-5483-592-2',
		estado: 'Disponible',
		cantAlquileres: 33,
	},
	{
		titulo: 'La Sombra Del Viento',
		autor: 'Carlos Ruiz Zafon',
		editorial: 'Planeta',
		Lanzamiento: 2009, 
		isbn: '948-53-1647-124-7',
		estado: 'Disponible',
		cantAlquileres: 28,
	},
	{
		titulo: 'Amor y Anarquia',
		autor: 'Martin Caparros',
		editorial: 'Planeta',
		Lanzamiento: 2017, 
		isbn: '674-49-2953-684-1',
		estado: 'Disponible',
		cantAlquileres: 16,
	},
	{
		titulo: 'Marina',
		autor: 'Carlos Ruiz Zafon',
		editorial: 'Planeta',
		Lanzamiento: 2012, 
		isbn: '539-49-2585-135-4',
		estado: 'Disponible',
		cantAlquileres: 19,	
	},
	{
		titulo: 'La Resistencia',
		autor: 'Ernesto Sabato',
		editorial: 'Emece',
		Lanzamiento: 2000, 
		isbn: '693-67-9536-793-5',
		estado: 'Disponible',
		cantAlquileres: 19,
	},
	{
		titulo: 'Un Saco De Huesos',
		autor: 'Stephen King',
		editorial: 'Penguin Random House',
		Lanzamiento: 2016, 
		isbn: '693-18-6438-242-5',
		estado: 'Alquilado',
		cantAlquileres: 22,
	},
	{
		titulo: 'Falco',
		autor: 'Arturo Perez-Reverte',
		editorial: 'Alfaguara',
		Lanzamiento: 2017, 
		isbn: '205-39-6820-103-5',
		estado: 'Alquilado',
		cantAlquileres: 20,
	},
	{
		titulo: 'El Resplandor',
		autor: 'Stephen King',
		editorial: 'Plaza y Janes',
		Lanzamiento: 1987, 
		isbn: '869-35-3002-464-2',
		estado: 'Alquilado',
		cantAlquileres: 15,
	},
	{
		titulo: 'Bestiario',
		autor: 'Julio Cortazar',
		editorial: 'Alfaguara',
		Lanzamiento: 2011, 
		isbn: '978-04-1969-879-3',
		estado: 'Alquilado',
		cantAlquileres: 12,
	},
	{
		titulo: 'Rebelion En La Granja',
		autor: 'George Orwell',
		editorial: 'Planet',
		Lanzamiento: 1945, 
		isbn: '694-02-1945-924-0',
		estado: 'Alquilado',
		cantAlquileres: 10,
	},
]

let lectores = [
	{
		nombre: 'Pilar',
		dni: 40291866,
		telefono: '1123190888',
	},
	{
		nombre: 'Tomas',
		dni: 39342045,
		telefono: '1122222222',
	},
	{
		nombre: 'Julian',
		dni: 37782492,
		telefono: '1133333333',
	},
	{
		nombre: 'Ayelen',
		dni: 40669356,
		telefono: '1144444444',
	},
]	

let alquileres = [
{
	isbn: '694-02-1945-924-0',
	dniTitular: 40291866,
	fechaDevolucion: '03/06/2020',
},
{
	isbn:'978-04-1969-879-3',
	dniTitular: 40291866,
	fechaDevolucion: '20/05/2020',
},
{
	isbn:'869-35-3002-464-2',
	dniTitular: 40669356,
	fechaDevolucion: '10/06/2020',
},
{
	isbn:'205-39-6820-103-5',
	dniTitular: 37782492,
	fechaDevolucion: '23/05/2020',
},
{
	isbn:'693-18-6438-242-5',
	dniTitular:39342045,
	fechaDevolucion: '07/06/2020',
},
]

let lectoresMorosos = []


//un ejemplo con uno 'Disponible', otro 'Alquilado' y otro que no existe
console.log(buscarCondicionLibro(libros, '001-94-5483-592-2'))
console.log(buscarCondicionLibro(libros, '693-18-6438-242-5'))
console.log(buscarCondicionLibro(libros, '693-18-3333-333-5'))

console.log(alquilarLibro(libros, '948-53-1647-124-7'))

console.log(disponibilidadPorAutor(libros, 'Carlos Ruiz Zafon'))

console.log(obtenerLibrosMasPedidos(libros))

console.log(devolucionDeLibro('693-18-6438-242-5'))