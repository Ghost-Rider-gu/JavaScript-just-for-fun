const pokemonApi = 'https://pokeapi.co/api/v2/pokemon/';
const numberOfPokemon = 100;
const backgroundCards = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
	electric: '#FCF7DE',
	water: '#DEF3FD',
	ground: '#f4e7da',
	rock: '#d5d5d4',
	fairy: '#fceaff',
	poison: '#98d7a5',
	bug: '#f8d5a3',
	dragon: '#97b3e6',
	psychic: '#eaeda1',
	flying: '#F5F5F5',
	fighting: '#E6E0D4',
	normal: '#F5F5F5'
};
const colorByType = Object.keys(backgroundCards);
const pokemonCards = document.getElementById('pokemon-cards');

async function getPokemons() {
    for (let i = 1; i <= numberOfPokemon; i++) {
        await getPokemonById(i);
    }
}

async function getPokemonById(pokemonId) {
    const data = await fetch(`${pokemonApi}${pokemonId}`);
    const pokemonData = await data.json();
    createPokemonCard(pokemonData);
}

function createPokemonCard(pokemonData) {
    const pokemonCard = document.createElement('div');
    pokemonCard.classList.add('pokemon-card');

    const pokemonTypes = pokemonData.types.map(type => type.type.name);
    const typeOfPokemon = colorByType.find(type => pokemonTypes.indexOf(type) > -1);
    const bgColor = backgroundCards[typeOfPokemon];

    pokemonCard.style.backgroundColor = bgColor;

    const pokemonCardContent = `<div class="pokemon-image">
                                    <img 
                                        src="https://pokeres.bastionbot.org/images/pokemon/${pokemonData.id}.png"
                                        alt=""
                                    />
                                </div>
                                <div class="pokemon-info">
                                    <span class="pokemon-number">#${pokemonData.id}</span>
                                    <h3>${pokemonData.name}</h3>
                                    <small>Type: <span>${typeOfPokemon}</span></small>
                                </div>`;

    pokemonCard.innerHTML = pokemonCardContent;
    pokemonCards.appendChild(pokemonCard);
}

getPokemons();
