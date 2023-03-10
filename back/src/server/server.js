const express = require("express");
const app = express();
const axios = require("axios");
const cors = require("cors");
const getAllChars = require("../controllers/getAllChars");

app.use(cors());
app.use(express.json());

app.get("/rickandmorty/allCharacters", async (req, res) => {
  try {
    const allCharacters = await getAllChars();

    res.status(200).json(allCharacters);
  } catch (error) {
    res.status(404).send("Hubo un error con los datos cargados.");
  }
});

app.get("/rickandmorty/character/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const response = await axios(
      `https://rickandmorty.com/api/character/${id}`
    );
    const data = response.data;

    const character = {
      id: data.id,
      name: data.name,
      species: data.species,
      gender: data.gender,
      image: data.image,
    };

    res.status(200).json(character);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

app.get("/rickandmorty/detail/:detailId", async (req, res) => {
  try {
    const { detailId } = req.params;

    const response = await axios(
      `https://rickandmortyapi.com/api/character/${detailId}`
    );
    const data = response.data;

    const characterDetail = {
      name: data.name,
      status: data.status,
      species: data.species,
      gender: data.gender,
      origin: data.origin.name,
      image: data.image,
    };

    res.status(200).json(characterDetail);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

const fav = [];

app.get("/rickandmorty/fav", (req, res) => {
  res.status(200).json(fav);
});

//La informacion por post llega por body
app.post("/rickandmorty/fav", (req, res) => {
  fav.push(req.body);
  res.status(200).send("Personaje agregado correctamente");
});

app.delete("/rickandmorty/fav/:id", (req, res) => {
  const { id } = req.params;

  const deleteFav = fav.filter((char) => char.id !== id);

  fav = deleteFav;

  res.status(200).send("Se elimino correctamente");
});

module.exports = app;
