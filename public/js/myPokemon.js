import PageComponent from "./components/PageComponent/PageComponent.js";

new PageComponent(document.body);
const pokeapi = "https://enigmatic-depths-16565.herokuapp.com/pokemon";

async function getPokemons(pokelink) {
  const rawData = await fetch(pokelink);
  const pokemonsList = await rawData.json();

  return pokemonsList;
}
async function createCards(pokemonArray) {
  const pokeArray = pokemonArray;
  const parentElement = document.body.querySelector(".pokemone-list");
  parentElement.innerHTML = "";
  pokeArray.forEach(async (pokemon) => {
    const card = PageComponent.addCard(parentElement, await pokemon);
    PageComponent.generateRemoveButton(card.element, pokemon);
    const newData = await getPokemons(pokeapi);
    createCards(newData);
  });
}
async function generatePage(api) {
  const pokemonArray = await getPokemons(api);
  createCards(pokemonArray);
}

generatePage(pokeapi);
