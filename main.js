window.onload = function (){
	const input = document.querySelector('input')
	const button = document.querySelector('button')
	const lista = document.querySelector('.lista')
	const nuevaLista = document.querySelector('.nuevaLista')
	
	const anterioresItems = []	

	function limpiarLista() {
		anterioresItems.splice(0, anterioresItems.length)
		lista.innerHTML = ""
	}
	
	function agregarItem() {
		const itemDelUsuario = input.value


		if (!anterioresItems.includes(itemDelUsuario)) {
			anterioresItems.push(itemDelUsuario)

			const nuevoElemento = document.createElement('div')
			nuevoElemento.append(itemDelUsuario)


			const botonBorrar = document.createElement('button')
			botonBorrar.innerHTML = 'X'

			botonBorrar.onclick = function () {
				anterioresItems.splice(anterioresItems.indexOf(itemDelUsuario), 1)
				lista.removeChild(nuevoElemento)
			}
			nuevoElemento.append(botonBorrar)

			lista.append(nuevoElemento)

			input.value = ""
		}	
		else {
			input.classList.add('yaIngresado')

			input.onkeydown = function(event) {
				if (event.key !== 'Enter', 'button.onclick') {
					input.classList.remove('yaIngresado')

					input.onkeydown = function(event) {
						if (event.key === 'Enter') {
							agregarItem()	
						}
					}

					button.onclick = function () {
						agregarItem()	
					}
				}
			}
		}
	}

	input.onkeydown = function(event) {
		if (event.key === 'Enter') {
			agregarItem()	
		}
	}


	button.onclick = function () {
		agregarItem()	
	}

	nuevaLista.onclick = function () {
		limpiarLista()
	}
}	


















