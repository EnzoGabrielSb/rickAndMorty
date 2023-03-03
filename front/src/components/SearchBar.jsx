import Nav from "./Nav";
import { useState } from "react";

function SearchBar({ onSearch }) {
  const [character, setCharacters] = useState("");

  const handleChange = (event) => {
    setCharacters(event.target.value);
  };

  return (
    <div>
      <input type="search" value={character} onChange={handleChange} />
      <button onClick={() => onSearch(character)}>Agregar</button>
    </div>
  );
}

export default SearchBar;
