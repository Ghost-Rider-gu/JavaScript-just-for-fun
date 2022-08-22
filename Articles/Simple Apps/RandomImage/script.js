const imageUrl = 'https://source.unsplash.com/random/';
const imageContainer = document.querySelector('.image-container');

for (let i = 0; i < 20; i++) {
	const newImage = document.createElement('img');
	newImage.src = `${imageUrl}${getRandomSize()}`;
	imageContainer.appendChild(newImage);
}

function getRandomSize() {
	return `${getRandomNumber()}x${getRandomNumber()}`;
}

function getRandomNumber() {
	return Math.floor(Math.random() * 10) + 300;
}
