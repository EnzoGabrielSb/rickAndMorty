import Card from "./Card";

function Cards({ characters, onClose }) {
  // [ {...}, {...} ]

  return (
    <div>
      {characters.map((character) => {
        return (
          <Card
            key={character.id}
            name={character.name}
            species={character.species}
            gender={character.gender}
            image={character.image}
            id={character.id}
            onClose={() => onClose(character.id)}
          />
        );
      })}
    </div>
  );
}

export default Cards;
