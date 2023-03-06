import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import style from "./Nav.css";

export default function Nav({ onSearch }) {
  return (
    <nav>
      <div class="links">
        <Link to="/about" class="link">
          About
        </Link>
        <Link to="/home" class="link">
          Home
        </Link>
        <Link to="/favorites" class="link">
          Favorites
        </Link>
      </div>

      <div>
        <SearchBar onSearch={onSearch} />
      </div>
    </nav>
  );
}
