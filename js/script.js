var elem = document.getElementById('butt');
elem.addEventListener('click', vverh);
elem.addEventListener('click', bok);

function vverh() {
	let elem = document.getElementById('golova');
	elem.style.top = 0;
}

function bok() {
	let elem = document.getElementById('bok');
	elem.style.left = 0;
	elem.style.height = "650px";
}