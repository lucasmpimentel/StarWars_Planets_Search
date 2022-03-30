async function getPlanets() {
  const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
  try {
    const data = await fetch(url);
    const dataJSON = data.json();
    return dataJSON;
  } catch (error) {
    console.log(error);
  }
}

export default getPlanets;
