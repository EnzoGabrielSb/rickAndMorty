import Card from "./Card";

function Cards({ characters, onClose }) {
  // [ {...}, {...} ]

  console.log(characters);

  return (
    <div key="cards-container">
      {characters.map(({ id, name, species, gender, image }) => {
        return (
          <Card
            key={id}
            name={name}
            species={species}
            gender={gender}
            image={image}
            id={id}
            onClose={() => onClose(id)}
          />
        );
      })}
    </div>
  );
}

export default Cards;
