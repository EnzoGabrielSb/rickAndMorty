import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

export default function Nav({ onSearch }) {
  return (
    <nav>
      <Link to="/about">About</Link>
      <Link to="/home">Home</Link>
      <Link to="/favorites">Favorites</Link>

      <SearchBar onSearch={onSearch} />
    </nav>
  );
}
