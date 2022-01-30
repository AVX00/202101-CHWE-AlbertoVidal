import PageComponent from "./components/PageComponent/PageComponent.js";

const page = new PageComponent(document.body);
const pokeapi = "https://pokeapi.co/api/v2/pokemon/";

async function getPokemons(pokelink) {
  const rawData = await fetch(pokelink);
  const pokemonsList = await rawData.json();
  const { previous } = pokemonsList;
  const { next } = pokemonsList;

  const pokemonPromises = pokemonsList.results.map(async ({ url }) => {
    const pokemonRaw = await fetch(url);
    const pokemon = await pokemonRaw.json();
    return pokemon;
  });

  const pokemonArray = await Promise.all(pokemonPromises);
  return [pokemonArray, previous, next];
}

async function createCards(pokemonArray) {
  const pokeArray = pokemonArray;
  const parentElement = document.body.querySelector(".pokemone-list");
  parentElement.innerHTML = "";
  pokeArray.forEach(async (pokemon) => {
    const card = PageComponent.addCard(parentElement, await pokemon);
    PageComponent.generateFavButton(card.element, pokemon);
  });
}

async function generatePage(api) {
  const [pokemonArray, previous, next] = await getPokemons(api || pokeapi);
  createCards(pokemonArray);
  const previousAction = async () => generatePage(previous);
  const nextAction = async () => generatePage(next);
  const buttonsParent = page.element.querySelector(".footer");
  PageComponent.generateButtons(
    buttonsParent,
    previousAction,
    nextAction,
    previous,
    next
  );
}

generatePage(pokeapi);
