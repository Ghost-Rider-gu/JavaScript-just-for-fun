const quoteTextElement = document.getElementById('text');
const quoteAuthorElement = document.getElementById('author');

async function getMotivationQuote() {
	const quoteData = await fetch("https://motivational-quotes1.p.rapidapi.com/motivation", {
		"method": "POST",
		"headers": {
			"content-type": "application/json",
			"x-rapidapi-key": "42b6f37128msh9e7e56a8c79dfcbp1a628ajsn9b2cdc5a0e1a",
			"x-rapidapi-host": "motivational-quotes1.p.rapidapi.com"
		},
		"body": {
			"key1": "value",
			"key2": "value"
		}
	});

	if (quoteData.ok) {
		const parsedData = await quoteData.text();
		createQuote(parsedData);
	} else {
		alert(`HTTP error: ${quoteData.status}`);
	}
}

function createQuote(parsedQuoteData) {
	const quoteData = parsedQuoteData.split('\n');

	const quoteText = document.createElement('span');
	quoteText.innerText = quoteData[0] || 'No quote for today. Sorry';
	quoteTextElement.appendChild(quoteText);

	const quoteAuthor = document.createElement('span');
	quoteAuthor.innerText = quoteData[1] || 'No author. Sorry';
	quoteAuthorElement.appendChild(quoteAuthor);
}

getMotivationQuote();
