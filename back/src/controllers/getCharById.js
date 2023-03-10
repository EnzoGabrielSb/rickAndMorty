/*const axios = require("axios");

const getCharByid = (res, id) => {
  axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => response.data)
    .then((data) => {
      let char = {
        key: data.id,
        name: data.name,
        image: data.image,
        gender: data.gender,
        species: data.species,
        id: data.id,
      };
      res
        .writeHead(200, { "Content-type": "application/json" })
        .end(JSON.stringify(char));
    })
    .catch((err) =>
      res.writeHead(500, { "Content-type": "text/plain" }).end(err.message)
    );
};

module.exports = getCharByid;
*/
