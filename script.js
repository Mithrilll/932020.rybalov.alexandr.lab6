function hidePicture(pictureClass) {
	let pic = document.getElementsByClassName(pictureClass)[0];
	pic.classList.add('hidden');
}

function revealPicture(pictureClass) {
	let pic = document.getElementsByClassName(pictureClass)[0];
	pic.classList.remove('hidden');
}