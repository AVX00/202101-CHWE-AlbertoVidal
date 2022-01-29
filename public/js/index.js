import PageComponent from "./components/PageComponent/PageComponent.js";

new PageComponent(document.body);

async function getPokemons() {
  const data = await fetch("https://pokeapi.co/api/v2/pokemon/");
  const pokemonsList = await data.json();

  const pokemonPromises = pokemonsList.results.map(async ({ url }) => {
    const pokemonData = await fetch(url);
    const pokemon = await pokemonData.json();
    return pokemon;
  });

  const pokemonArray = await Promise.all(pokemonPromises);
  return pokemonArray;
}

async function createCards(pokemonArray) {
  const pokeArray = await pokemonArray;
  const parentElement = document.body.querySelector(".pokemone-list");
  pokeArray.forEach(async (pokemon) => {
    PageComponent.addCard(parentElement, await pokemon);
  });
}

createCards(getPokemons());
