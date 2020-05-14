function contarEspacios (texto) {
	let espacios = 0

	for (let i = 0; i < texto.length; i++) {
		if (texto[i] === ' ') {
			espacios += 1 
		}
	}
	return espacios
}

console.log(contarEspacios('este texto tiene cuatro espacios'))

function buscarTweets (tweet, textoABuscar) {
	let resultadoBusqueda = []

  for (let i = 0; i < tweet.length; i++) {
    if (tweet[i].includes(textoABuscar)) {
      resultadoBusqueda.push(tweet[i])
    }
  }
  return resultadoBusqueda
}  


console.log(buscarTweets([
  'hola, mi nombre es pilar',
  'ya empezo el otoño',
  'ojala se termine esta cuarentini',
  'hola que tal'
  ], 'hola'))



function expresionAAsterisco(expresion) {
  let asteriscos = ''

  for (let i = 0; i < expresion.length; i++) {
    asteriscos += '*'
  }

  return asteriscos
} 

function censurarTexto (texto, expresionesCensuradas) {
  let textoCensurado = texto

  for (let i = 0; i < expresionesCensuradas.length; i++) {
    const expresionCensurada = expresionesCensuradas[i]

    if (textoCensurado.includes(expresionesCensuradas)) {
      textoCensurado = textoCensurado.replace(expresionCensurada, expresionAAsterisco(expresionCensurada))
    }
  }
  return textoCensurado
}

console.log(censurarTexto('este es el texto que hay que censurar', ['texto'])) 

