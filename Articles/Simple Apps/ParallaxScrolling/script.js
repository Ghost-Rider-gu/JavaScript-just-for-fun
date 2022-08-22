import BackgroundParallax from './BackgroundParallax.js';

function startGame() {
	const canvas = document.getElementById('parallax');
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	const backgroundImages = [];
	for (let i = 1; i <= 5; i++) {
		backgroundImages.push(`./images/layer${i}.png`);
	}

	const backgroundParallax = new BackgroundParallax(backgroundImages, canvas);
	backgroundParallax.render();
}

startGame();
