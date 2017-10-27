var elem = document.getElementById('butt');
elem.addEventListener('click', vverh);

function vverh() {
	this.style.marginLeft = "10px";
	this.style.transform = "rotate(-360deg)";
	
	let elem = document.getElementById('golova');
	elem.style.top = 0;
	window.setTimeout(func, 3000);
	window.setTimeout(span, 9000);
	window.setTimeout(bok, 10000);
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
	span.classList.add('bounceIn');
	parent.appendChild(span);
}

function bok() {
	let parent = document.body;
	let di = document.createElement('div');
	let di1 = document.createElement('div');
	di.classList.add('animated');
	di.classList.add('bounceInLeft');
	di.classList.add('bok');
	di1.classList.add('animated');
	di1.classList.add('bounceInRight');
	di1.classList.add('content');
	parent.appendChild(di);
	parent.appendChild(di1);
}



