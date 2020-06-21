window.onload = function () {
	const chairs = document.querySelectorAll('.chair')
	const addButton = document.querySelector('.button-add')
	const removeButton = document.querySelector('.button-remove')

	let showedChairs = 0

	addButton.onclick = function () {
		const chairToShow = chairs[showedChairs]

		if (chairToShow === undefined) {
			return
		}

		chairToShow.style.visibility = 'visible'

		showedChairs++
	}

	removeButton.onclick = function () {
		const chairToHide = chairs [showedChairs - 1]

		if (chairToHide === undefined) {
			return
		}

		chairToHide.style.visibility = 'hidden'

		showedChairs--
	}

}