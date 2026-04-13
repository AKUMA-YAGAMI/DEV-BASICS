const button = document.getElementById('button');
const input = document.getElementById('input');
const div = document.getElementById('div');





async function fetchPokemon() {
const pokemonName = input.value;
const toLowerCaseName = pokemonName.toLowerCase();
try{

const response1 = await fetch(`https://pokeapi.co/api/v2/pokemon/${toLowerCaseName}`);
if(!response1.ok){throw new Error('this shit just crash')}

const data = await response1.json();
console.log(data);

div.innerHTML = `NAME :${data.name}  <br> ORDER :${data.order} <br> TYPE :${data.types[0].type.name} <br> FAVORITE ATTACK :${data.abilities[0].ability.name}<br> PICTURE: <img src="${data.sprites.front_default}" alt="${data.name}">`;
}
catch(error){
console.error('Error fetching Pokémon data:', error);
}


 
}


button.addEventListener('click', fetchPokemon);
