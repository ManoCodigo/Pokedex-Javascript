// sass --watch assets/sass/styles.scss:assets/css/styles.css

const pokemonsOl = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMore')
const loadBackButton = document.getElementById('loadBack')
let limit = 20
let offset = 0

loadPokemons(offset, limit)

function loadPokemons(offset, limit) {
  pokeApi.getPokemons(offset, limit).then( (pokemonsList = []) => {
    pokemonsOl.innerHTML += pokemonsList.map(convertPokemonsLi).join('')
  })
}

function convertTypeAbilits(type) {
  return type.map(typeSlot => `<p>${typeSlot.type.name}</p>`) 
}

function convertPokemonsLi(pokemons) {
  return `
      <li class="pokemons__card ${pokemons.type}">
        <div class="pokemons__card__name">
          <h2>${pokemons.name}</h2>
          <p>#${pokemons.id}</p>
        </div>
        <div class="pokemons__card__details">
          <div>
          ${pokemons.types.map(type => `<p>${type}</p>`).join('')}
          </div>
          <img src="${pokemons.photo}" alt="${pokemons.name}" class="pokemons__card__details__poke-img">
        </div>
        <img src="assets/images/pokebola-fundo.png" class="pokemons__card__img">
      </li>
    `
}

function loadMore() {
  offset += limit
  loadPokemons(offset, limit)
}

