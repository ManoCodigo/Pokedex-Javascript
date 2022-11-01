
const url = "https://pokeapi.co/api/v2/pokemon/"
const limit = 10
const offset = 0
const pokemonsOl = document.getElementById('pokemonList')

fetch(url)
  .then( response => response.json())
  .then( responseBody => {
    for (let i = 0; i < responseBody.results.length; i++) {
      const pokemons = responseBody.results[i]
      pokemonsOl.innerHTML += convertPokemonsHtml(pokemons)
    }
  })
  .catch( error => console.error(error))
  .finally( () => console.log('Requisição concluída!'))

  function convertPokemonsHtml(pokemons) {
    return `
        <li class="pokemons__card">
          <div class="pokemons__card__name">
            <h2>${pokemons.name}</h2>
            <p>#001</p>
          </div>
          <div class="pokemons__card__details">
            <div>
              <p>Grass</p>
              <p>Poisson</p>
            </div>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="${pokemons.name}">
          </div>
        </li>
      `
  }