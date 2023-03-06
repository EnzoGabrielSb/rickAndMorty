import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Detail = () => {
  //Tomo el ID de cada personaje usando useParams.
  const { detailId } = useParams();

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

      <h1>Detalles:</h1>
      <h2>{character?.id}</h2>
      <h2>{character?.name}</h2>
      <h2>{character?.status}</h2>
      <h2>{character?.species}</h2>
      <h2>{character?.gender}</h2>

      <img src={character?.image} alt={character?.name} />
    </div>
  );
};

export default Detail;
