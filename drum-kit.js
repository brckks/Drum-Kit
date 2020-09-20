function playSound(e) {
	
	//console.log(e.keyCode);
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
	if (!audio) return; //stop the function from running all togerher
	audio.currentTime=0; //rewind to the start
	audio.play();
	key.classList.add('playing');

	//console.log(audio);
	//console.log(key);	
}

function removeTransition(e){
	//console.log(e);
	if (e.propertyName !== 'transform') return; // skip it if it's not a transform
	console.log(e.propertyName);
	this.classList.remove('playing'); 
}

function start(){
	const keys = document.querySelectorAll('.key');
	keys.forEach(key => key.addEventListener('transitionend', removeTransition));
	window.addEventListener('keydown', playSound);
}

window.addEventListener('DOMContentLoaded', start);