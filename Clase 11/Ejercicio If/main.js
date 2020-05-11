// ejercicio if

function calcularResultadoDeExamen (notaExamen) {
	if (notaExamen < 1 || notaExamen > 10) {
		return 'La nota no está dentro de los parámetros'
	}

	if (notaExamen < 4) {
		return 'Aplazado'
	}

	if (notaExamen <= 6) {
		return 'A recuperar'
	}

	if (notaExamen < 10) {
		return 'Aprobado'
	}

	return 'Sobresaliente'
}

let notaExamen = 8

console.log (calcularResultadoDeExamen(notaExamen))


function sonHermanos (persona1, persona2) {
	return persona1.padre === persona2.padre && persona1.madre === persona2.madre
}

const persona1 = {
	padre : 'Pablo',
	madre : 'Roxana'
}

const persona2 = {
	padre : 'Pablo',
	madre : 'Gabriela'
}

console.log(sonHermanos(persona1,persona2))


function contarEspacios(texto) {
  let espacios = 0

  for (let i = 0; i < texto.length; i++) {
    if (texto[i] === ' ') {
      espacios = espacios + 1
    }
  }

  return espacios
}

console.log(contarEspacios('hola como te va'))
console.log(contarEspacios('mi nombre es pilar y me gusta la milanesa'))



