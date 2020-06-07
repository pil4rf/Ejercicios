window.onload = function () {
	const titulo = document.querySelector('h1')
	const parrafo = document.querySelector('p')
	const logo = document.querySelector('.logo')
	const firma = document.querySelector('.firma')
	const nombre = document.querySelector('#nombre')


	titulo.style = 'display: none'
	parrafo.style = 'font-size: 25px; color: violet'
	logo.style = 'border-radius: 40%'
	firma.style = 'border-radius: 40%'

	let displayNombre = true

  	firma.onclick = function() {
  		if (displayNombre) {
  			nombre.style = 'display: none'
  		} else {
  			nombre.style = 'display: block'
  		}
    	
    	displayNombre = !displayNombre
    }
}