const percentageText = document.querySelector('.load-status');
const backgroundImage = document.querySelector('.background');

let loadStatus = 0;
let processing = setInterval(startBlurring, 40);

function startBlurring() {
	loadStatus++;

	if (loadStatus > 99) {
		clearInterval(processing);
	}

	percentageText.innerText = `${loadStatus}%`;
	percentageText.style.opacity = scale(loadStatus, 0, 100, 1, 0);

	backgroundImage.style.filter = `blur(${scale(loadStatus, 0, 100, 40, 0)}px)`;
}

const scale = (num, in_min, in_max, out_min, out_max) => {
	return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}
