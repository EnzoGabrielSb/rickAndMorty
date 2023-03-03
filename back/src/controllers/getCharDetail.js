const axios = require("axios");

const getCharDetail = (res, id) => {
  axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => response.data)
    .then((data) => {
      let char = {
        name: data.name,
        image: data.image,
        gender: data.gender,
        species: data.species,
        origin: data.origin.name,
        status: data.status,
      };
      res
        .writeHead(200, { "Content-type": "application/json" })
        .end(JSON.stringify(char));
    })
    .catch((err) => res.writeHead(500, { "Content-type": "text/plain" }))
    .end("No se pudo obtener el personaje esperado.");
};

module.export = getCharDetail;
