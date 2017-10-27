var elem = document.getElementById('butt');
elem.addEventListener('click', vverh);

function vverh() {
	this.style.marginLeft = "10px";
	this.style.transform = "rotate(-360deg)";
	
	let elem = document.getElementById('golova');
	elem.style.top = 0;
	window.setTimeout(func, 3000);
	window.setTimeout(span, 10000);
	this.removeEventListener('click', vverh);

}

function func() {
	let elem = document.getElementById('butt');
	elem.style.borderRadius = 0;
}



function span() {
	var parent = document.getElementById('golova');
	var span = document.createElement('span');
	span.innerHTML = 'VPadike';
	span.style.cssText = 'float: left; display: block; margin-top: 10px; margin-left: 10px; height: 80px; padding-left: 5px; border-left: 1px solid black; font-size: 70px; font-weight: lighter;';
	span.classList.add('animated');
	span.classList.add('bounceIn');
	parent.appendChild(span);
}


