const clientes = [
	{
		nombre: 'Paramore',
		telefono: '1120203030',
		sesiones: [
			{
				fecha: '20/04/2020',
				duracion: 2,
			},
			{
				fecha: '11/03/2020',
				duracion: 5,
			},
		],
		pagos: [
			{
				fecha: '25/03/2020',
				monto: 150,
			},
			{
				fecha: '01/04/2020',
				monto: 300,
			},
		],
	},
	{
		nombre: 'The 1975',
		telefono: '1123456789',
		sesiones: [
			{
				fecha: '06/01/2020',
				duracion: 3,
			},
			{
				fecha: '13/02/2020',
				duracion: 4,
			},
		],
		pagos: [
			{
				fecha: '07/03/2020',
				monto: 300,
			},
			{
				fecha: '25/03/2020',
				monto: 100,
			},
		],
	},
	{
		nombre: 'Twenty One Pilots',
		telefono: '1198765432',
		sesiones: [
			{
				fecha: '10/04/2020',
				duracion: 6,
			},
			{
				fecha: '18/03/2020',
				duracion: 3,
			},
		],
		pagos: [
			{
				fecha: '13/05/2020',
				monto: 600,
			},
			{
				fecha: '21/03/2020',
				monto: 300,
			},
		],
	},
	{
		nombre: 'Gus Dapperton',
		telefono: '1198327654',
		sesiones: [
			{
				fecha: '01/01/2020',
				duracion: 4,
			},
			{
				fecha: '03/04/2020',
				duracion: 5,
			},
		],
		pagos: [
			{
				fecha: '20/01/2020',
				monto: 300,
			},
			{
				fecha: '30/01/2020',
				monto: 600,
			},
		],
	},
	{
		nombre: 'beabadoobee',
		telefono: '1199995432',
		sesiones: [
			{
				fecha: '17/05/2020',
				duracion: 6,
			},
			{
				fecha: '18/05/2020',
				duracion: 7,
			},
		],
		pagos: [
			{
				fecha: '25/05/2020',
				monto: 400,
			},
			{
				fecha: '27/05/2020',
				monto: 550,
			},
			{
				fecha: '13/06/2020',
				monto: 100,
			},
		],
	},
	{
		nombre: 'Clairo',
		telefono: '1198765333',
		sesiones: [
			{
				fecha: '11/03/2020',
				duracion: 10,
			},
		],
		pagos: [
			{
				fecha: '14/03/2020',
				monto: 330,
			},
			{
				fecha: '24/03/2020',
				monto: 400,
			},
		],
	},
	{
		nombre: 'Mac Miller',
		telefono: '1198777732',
		sesiones: [
			{
				fecha: '22/01/2020',
				duracion: 5,
			},
			{
				fecha: '03/02/2020',
				duracion: 6,
			},
			{
				fecha: '28/02/2020',
				duracion: 5,
			},
		],
		pagos: [
			{
				fecha: '01/03/2020',
				monto: 800,
			},
			{
				fecha: '15/03/2020',
				monto: 300,
			},
		],
	},
	{
		nombre: 'Gorillaz',
		telefono: '1198765552',
		sesiones: [
			{
				fecha: '11/05/2020',
				duracion: 2,
			},
			{
				fecha: '18/04/2020',
				duracion: 6,
			},
		],
		pagos: [
			{
				fecha: '19/05/2020',
				monto: 500,
			},
			{
				fecha: '21/06/2020',
				monto: 300,
			},
		],
	},
]

const misDeudores = obtenerDeudores(clientes)
const misMejoresClientes = obtenerMejoresClientes(clientes)
const facturacionEn = obtenerFacturacionEn(clientes,3,2020)
const miPrediccion = predecirGrabacionesPorSemana(clientes)

console.log(misDeudores)
console.log(misMejoresClientes)
console.log(facturacionEn)
console.log(miPrediccion)