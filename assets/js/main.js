
const url = "https://pokeapi.co/api/v2/pokemon/"
const limit = 10
const offset = 0

fetch(url).then( response => response.json())
  .then( responseBody => {
    console.log(responseBody);
  })
  .catch( error => console.error(error))
  .finally( () => console.log('Requisição concluída!'))