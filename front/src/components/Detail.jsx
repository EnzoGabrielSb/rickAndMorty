import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "../components/Detail.css";

const Detail = () => {
  //Tomo el ID de cada personaje usando useParams.
  const { detailId } = useParams();
  console.log("Detail:", detailId);

  const [character, setCharacter] = useState({});

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay nadie con ese ID Rey/Reina");
        }
      });
    return setCharacter({});
  }, [detailId]);

  return (
    <div>
      <Link to="/home">
        <button>HOME</button>
      </Link>

      <div class="conteinerDetail">
        <h1>Details:</h1>

        <h2>Name: {character?.name}</h2>
        <h2>Status: {character?.status}</h2>
        <h2>Specie:{character?.species}</h2>

        <h2>Gender: {character?.gender}</h2>
        <h2>Id: {character?.id}</h2>

        <img src={character?.image} alt={character?.name} />
      </div>
    </div>
  );
};

export default Detail;
