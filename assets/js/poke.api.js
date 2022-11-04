
const pokeApi = {}

pokeApi.getPokemons = (offset, limit) => {
  const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`

  return fetch(url)
    .then( response => response.json())
    .then( responseBody => responseBody.results)
    .then( pokemons => pokemons.map(pokeApi.getPokemonsDetails))
    .then( detailsRequest => Promise.all(detailsRequest))
    .then( pokemonDetails => pokemonDetails)
}

pokeApi.getPokemonsDetails = (pokemon) => {
  return fetch(pokemon.url)
  .then(response => response.json())
  .then(convertPokeApiDetailToPokemon)
}

function convertPokeApiDetailToPokemon(pokeDetail) {
  const pokemon = new Pokemon()

  pokemon.id = pokeDetail.id
  pokemon.name = pokeDetail.name

  const types = pokeDetail.types.map(typeSlot => typeSlot.type.name)
  const [type]  = types
  pokemon.types = types
  pokemon.type = type

  pokemon.photo = pokeDetail.sprites.other.dream_world.front_default

  return pokemon
}