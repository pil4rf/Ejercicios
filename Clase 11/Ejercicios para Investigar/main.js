function obtenerRecetaPorIngrediente (listaDeRecetas, ingrediente) {
	const listaDeRecetasConIngrediente = []

	for (let i = 0; i < listaDeRecetas.length; i++) {
		const receta = listaDeRecetas[i]

		for (let j = 0; j < receta.ingredientes.length; j++) {
			const ingredienteDeReceta = receta.ingredientes[j]

			if (ingredienteDeReceta === ingrediente) {
				listaDeRecetasConIngrediente.push(receta)
			}
		}
	}

	return listaDeRecetasConIngrediente
}

const recetas = [
	{
		nombre: 'Milanesas con papas fritas',
		ingredientes: ['pan rallado', 'carne', 'papas', 'aceite', 'perejil', 'ajo', 'sal'],
	},
	{
		nombre: 'Pastel de papa',
		ingredientes: ['carne', 'morron', 'cebolla', 'papas', 'sal', 'primenton'],
	},
]

const recetasConPapas = obtenerRecetaPorIngrediente(recetas, 'papas')

console.log(recetasConPapas)

