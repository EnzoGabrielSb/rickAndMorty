const { axios } = require("axios");
const { Character } = require("../DB_connection");

const getApiData = async () => {
  try {
    let i = 1;
    let characters = [];

    while (i < 6) {
      let apiData = await axios(
        `https://rickandmortyapi.com/api/character?page=${i}`
      );

      characters.push(apiData);
      i++;
    }

    // Espero que se resuelvan todas las promesas y el PromiseAll me devuelve un array!
    characters = (await Promise.all(characters)).map((res) =>
      res.data.results.map((char) => {
        return {
          id: char.id,
          name: char.name,
          status: char.name,
          species: char.species,
          gender: char.gender,
          origin: char.origin.name,
          image: char.image,
          image2: char.image,
        };
      })
    );

    let allCharacters = [];
    characters.map((char) => {
      allCharacters = allCharacters.concat(char);
    });

    return allCharacters;
  } catch (error) {
    return { error: error.message };
  }
};

const saveApiData = async () => {
  try {
    const allCharacters = await getApiData();
    // bulkCreate me permite pasarle un array de objetos y me lo crea TODOS juntos en una DB
    await Character.bulkCreate(allCharacters);
    return allCharacters;
  } catch (error) {
    return { error: error.message };
  }
};

module.exports = saveApiData;
