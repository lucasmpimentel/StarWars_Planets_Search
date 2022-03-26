async function getPlanets() {
  const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const data = await fetch(url);
  const dataJSON = data.json();
  return dataJSON;
}

export default getPlanets;
