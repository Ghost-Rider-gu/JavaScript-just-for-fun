const jokeText = document.getElementById('joke-text');
const jokeButton = document.getElementById('joke-btn');

const jokeApiUrl = 'https://api.chucknorris.io/jokes/random';

function getNewJoke() {
	fetch(jokeApiUrl)
    .then((joke) => joke.json())
    .then((jokeData) => {
		jokeText.innerHTML = jokeData.value;
	});
}

getNewJoke();

jokeButton.addEventListener('click', getNewJoke);
