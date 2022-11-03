// sass --watch assets/sass/styles.scss:assets/css/styles.css

const pokemonsOl = document.getElementById('pokemonList')

pokeApi.getPokemons().then( (pokemonsList = []) => {
  pokemonsOl.innerHTML += pokemonsList.map(convertPokemonsLi).join('')
})

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
          <img src="${pokemons.photo}" alt="${pokemons.name}">
        </div>
      </li>
    `
}



