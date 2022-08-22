const autoTypeElement = document.getElementById('auto-type');

const text = 'Hello! Happy New Year! I wish you all the best!';
const speedOfTyping = 200;

let index = 1;

function typeText() {
	autoTypeElement.innerText = text.slice(0, index);
	index++;

	if (index > text.length) {
		autoTypeElement.classList.add('text-animation');
	} else {
		setTimeout(typeText, speedOfTyping);
	}
}

typeText();
