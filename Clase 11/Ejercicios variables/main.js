const miComidaPreferida = {
	nombre : "Pastel de papa",
	cantidadDeVecesQueComi : 15,
	cantidadDeVecesQueMeCocinaron: 7,
	ingredientes : ['morron', 'papa', 'carne', 'cebolla', 'pimenton', 'sal'] 
}

miComidaPreferida.llevaMasDeCincoIngredientes = miComidaPreferida.ingredientes.lenght > 5

miComidaPreferida.cantidadDeVecesQueMeCocine = miComidaPreferida.cantidadDeVecesQueComi - miComidaPreferida.cantidadDeVecesQueMeCocinaron
