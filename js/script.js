var elem = document.getElementById('butt');
elem.addEventListener('click', vverh);

function vverh() {
	this.style.marginLeft = "10px";
	this.style.transform = "rotate(-360deg)";
	
	let elem = document.getElementById('golova');
	elem.style.top = 0;
	let elem1 = document.getElementById('footer');
	elem1.style.top = "86%";
	window.setTimeout(func, 2000);
	window.setTimeout(span, 6000);
	window.setTimeout(bok, 7000);
	window.setTimeout(menu, 8000);
	window.setTimeout(menuic, 8000);
	this.removeEventListener('click', vverh);

}

function func() {
	let elem = document.getElementById('butt');
	elem.style.borderRadius = "10px";
}



function span() {
	let parent = document.getElementById('golova');
	let span = document.createElement('span');
	span.innerHTML = 'VPadike';
	span.style.cssText = 'float: left; display: block; margin-top: 10px; margin-left: 10px; height: 80px; padding-left: 5px; border-left: 1px solid black; font-size: 70px; font-weight: lighter;';
	span.classList.add('animated');
	span.classList.add('zoomIn');
	parent.appendChild(span);
}

function bok() {
	let parent = document.body;
	let di = document.createElement('div');
	let di1 = document.createElement('div');
	di.classList.add('animated');
	di.classList.add('zoomInLeft');
	di.classList.add('bok');
	di1.classList.add('animated');
	di1.classList.add('zoomInRight');
	di1.classList.add('content');
	parent.appendChild(di);
	parent.appendChild(di1);
}
	var elems = document.getElementsByTagName('div');
	var elems1 = document.getElementsByTagName('button');
	
function menu() {
		for (var i = 0; i < 8; i++) {
		button = document.createElement('button');
		button.classList.add('button');
		button.classList.add('animated');
		button.classList.add('bounceIn');
		elems[1].appendChild(button);
		}
		elems1[3].addEventListener('click', conten);
}

function menuic() {
		 	elems1[1].innerHTML = '<i class="fa fa-envelope" aria-hidden="true"></i>';
		 	elems1[2].innerHTML = '<i class="fa fa-camera-retro" aria-hidden="true"></i>';
		 	elems1[3].innerHTML = '<i class="fa fa-home" aria-hidden="true"></i>';
		 	elems1[4].innerHTML = '<i class="fa fa-comments" aria-hidden="true"></i>';	
		 	elems1[5].innerHTML = '<i class="fa fa-group" aria-hidden="true"></i>';
		 	elems1[6].innerHTML = '<i class="fa fa-newspaper-o" aria-hidden="true"></i>';
		 	elems1[7].innerHTML = '<i class="fa fa-film" aria-hidden="true"></i>';
		 	elems1[8].innerHTML = '<i class="fa fa-play-circle" aria-hidden="true"></i>';
}

function conten() {
	let h1 = document.createElement('h1');
	h1.innerHTML = 'Your page';
	h1.classList.add('animated');
	h1.classList.add('zoomIn');
	let dov = document.createElement('div');
	dov.classList.add('dov');
	dov.classList.add('animated');
	dov.classList.add('zoomIn');
	let img = document.createElement('img');
	img.src = 'img/photo.jpg';
	img.classList.add('im');
	let span = document.createElement('span');
	span.classList.add('name');
	span.classList.add('animated');
	span.classList.add('bounceIn');
	span.innerHTML = "Dimka BanDit"
	let span1 = document.createElement('span');
	span1.classList.add('name');
	span1.classList.add('name1');
	span1.classList.add('animated');
	span1.classList.add('bounceIn');
	span1.innerHTML = "Online Forever"
	elems[2].appendChild(h1);
	elems[2].appendChild(dov);
	elems[3].appendChild(img);
	elems[3].appendChild(span);
	elems[3].appendChild(span1);
	elems1[3].removeEventListener('click', conten);
}
