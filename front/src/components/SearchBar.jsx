import Nav from "./Nav";
import { useState } from "react";
import "./SearchBar.css";

function SearchBar({ onSearch }) {
  const [character, setCharacters] = useState("");

  const handleChange = (event) => {
    setCharacters(event.target.value);
  };

  return (
    <div class="input-group">
      <input
        type="search"
        value={character}
        onChange={handleChange}
        class="input"
        placeholder="Agrega Id del Personaje"
      />
      <button class="button--submit" onClick={() => onSearch(character)}>
        Agregar
      </button>
    </div>
  );
}

export default SearchBar;
