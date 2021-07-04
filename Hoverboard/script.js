const hoverboard = document.getElementById('hoverboard');

const BOARD_SIZE = 300;
const COLORS = ['#0000ff', '#8a2be2', '#a52a2a', '#deb887', '#5f9ea0', '#7fff00', '#d2691e',
			 	'#ff7f50', '#6495ed', '#fff8dc', '#dc143c', '#1e90ff', '#8b008b', '#e9967a',
				'#696969', '#dcdcdc', '#f0fff0', '#7cfc00', '#fffacd', '#add8e6', '#e0ffff'];

for	(let i = 0; i < BOARD_SIZE; i++) {
	const newSquare = document.createElement('div');
	newSquare.classList.add('square');

	newSquare.addEventListener('mouseover', () => setSquareColor(newSquare));
	newSquare.addEventListener('mouseout',  () => removeSquareColor(newSquare));

	hoverboard.appendChild(newSquare);
}

const setSquareColor = (square) => {
	const randomColor = Math.floor(Math.random() * COLORS.length);
	
	square.style.background = COLORS[randomColor];
	square.style.boxShadow = `0 0 3px ${COLORS[randomColor]}, 0 0 12px ${COLORS[randomColor]}`;
};

const removeSquareColor = (square) => {
	square.style.background = 'black';
};
